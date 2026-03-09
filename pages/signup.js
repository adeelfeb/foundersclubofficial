import Head from 'next/head'
import { useMemo, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Eye, EyeOff } from 'lucide-react'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'
import { AuthCardSkeleton } from '../components/Skeleton'
import { useRecaptcha } from '../utils/useRecaptcha'
import { safeParseJsonResponse } from '../utils/safeJsonResponse'
import { foundersClubImages } from '../lib/foundersClubImages'

function formatErrorMessage(payload, fallback) {
  if (!payload) return fallback
  if (payload.message) return payload.message
  return fallback
}

function shouldSkipAuthRedirect() {
  if (typeof window === 'undefined') return false
  const redirectKey = 'auth_redirect_count'
  const redirectTimeKey = 'auth_redirect_time'
  const now = Date.now()
  const lastRedirectTime = parseInt(sessionStorage.getItem(redirectTimeKey) || '0', 10)
  const redirectCount = parseInt(sessionStorage.getItem(redirectKey) || '0', 10)
  if (now - lastRedirectTime > 5000) {
    sessionStorage.setItem(redirectKey, '0')
    sessionStorage.setItem(redirectTimeKey, String(now))
    return false
  }
  if (redirectCount >= 2) {
    console.warn('[Signup] Redirect loop detected, clearing auth state')
    localStorage.removeItem('token')
    sessionStorage.removeItem(redirectKey)
    sessionStorage.removeItem(redirectTimeKey)
    return true
  }
  return false
}

function incrementRedirectCount() {
  if (typeof window === 'undefined') return
  const redirectKey = 'auth_redirect_count'
  const redirectTimeKey = 'auth_redirect_time'
  const count = parseInt(sessionStorage.getItem(redirectKey) || '0', 10)
  sessionStorage.setItem(redirectKey, String(count + 1))
  sessionStorage.setItem(redirectTimeKey, String(Date.now()))
}

export default function SignupPage() {
  const router = useRouter()
  const { execute: executeRecaptcha, isAvailable: recaptchaAvailable } = useRecaptcha()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const hasCheckedAuth = useRef(false)

  useEffect(() => {
    if (!router.isReady || hasCheckedAuth.current) return
    hasCheckedAuth.current = true

    async function checkAuth() {
      try {
        if (shouldSkipAuthRedirect()) {
          setCheckingAuth(false)
          return
        }
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
        if (!token) {
          setCheckingAuth(false)
          return
        }
        const res = await fetch('/api/auth/me', {
          method: 'GET',
          credentials: 'include',
        })
        if (!res.ok) {
          localStorage.removeItem('token')
          setCheckingAuth(false)
          return
        }
        const data = await safeParseJsonResponse(res)
        if (data.success && data.data && data.data.user) {
          if (data.data.token && typeof window !== 'undefined') {
            localStorage.setItem('token', data.data.token)
          }
          incrementRedirectCount()
          router.replace('/dashboard').then(() => {
            if (typeof window !== 'undefined') {
              window.location.hash = 'blogs'
            }
          })
          return
        } else {
          localStorage.removeItem('token')
        }
      } catch (err) {
        console.log('[Signup] Auth check failed, showing signup page:', err)
        localStorage.removeItem('token')
      } finally {
        setCheckingAuth(false)
      }
    }
    checkAuth()
  }, [router.isReady])

  const passwordHint = password && password.length < 5 ? 'Use at least 5 characters.' : ''

  const isDisabled = useMemo(() => {
    if (loading) return true
    const nameValid = name.trim().length >= 2
    const emailValid = email.trim().length > 0 && email.includes('@')
    const passwordValid = password.length >= 5
    return !nameValid || !emailValid || !passwordValid
  }, [name, email, password, loading])

  async function onSubmit(e) {
    e.preventDefault()
    if (isDisabled) return
    setLoading(true)
    setError('')

    const recaptchaToken = recaptchaAvailable ? await executeRecaptcha() : null
    if (recaptchaAvailable && !recaptchaToken) {
      setError('Security verification failed. Please refresh and try again.')
      setLoading(false)
      return
    }

    try {
      const payload = { name: name.trim(), email: email.trim(), password }
      if (recaptchaToken) payload.recaptchaToken = recaptchaToken
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      })

      const text = await res.text()
      let data = {}

      if (text && text.trim()) {
        try {
          data = JSON.parse(text)
        } catch (parseErr) {
          if (res.status >= 500) {
            setError('Server error. Please try again in a moment.')
          } else if (res.status === 0 || !res.ok) {
            setError('Unable to connect to the server. Please check your internet connection.')
          } else {
            setError("We couldn't create your account. Please try again.")
          }
          setLoading(false)
          return
        }
      }

      if (!res.ok || !data.success) {
        const errorMessage = formatErrorMessage(data, "We couldn't create your account. Please try again.")
        setError(errorMessage)
        setLoading(false)
        return
      }

      if (data.data && (data.data.requiresVerification || data.data.message)) {
        const targetEmail = data.data.email || email
        router.push(`/verify-email?email=${encodeURIComponent(targetEmail)}`)
        return
      }

      if (data.data && data.data.token) {
        localStorage.setItem('token', data.data.token)
      }
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('auth_redirect_count')
        sessionStorage.removeItem('auth_redirect_time')
      }
      if (data.data && data.data.user) {
        router.replace('/dashboard').then(() => {
          if (typeof window !== 'undefined') {
            window.location.hash = 'blogs'
          }
        })
      }
    } catch (err) {
      console.error('[Signup] Error during signup flow', err)
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Unable to connect to the server. Please check your internet connection and try again.')
      } else {
        setError(err.message || "We couldn't create your account. Please check your connection and try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const fieldClass = 'block w-full rounded-lg border border-forest-600 bg-forest-800/80 px-4 py-3 text-gold-100 placeholder:text-gold-200/50 focus:border-gold-500/60 focus:outline-none focus:ring-2 focus:ring-gold-500/30 disabled:opacity-60'
  const labelClass = 'text-sm font-semibold text-gold-300 mb-1.5'

  if (checkingAuth) {
    return (
      <>
        <Head>
          <title>Create Account | Founders Club</title>
          <meta name="description" content="Create your Founders Club account." />
        </Head>
        <div className="min-h-screen bg-forest-800">
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-center opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: `url(${foundersClubImages.texture})`, backgroundSize: 'auto' }}
            aria-hidden
          />
          <Navbar />
          <main className="relative z-10 pt-24 pb-20 flex items-center justify-center min-h-[50vh]">
            <div className="w-full max-w-md mx-auto px-4">
              <div className="fc-card rounded-2xl border border-forest-600 bg-forest-700/60 p-6 md:p-8">
                <AuthCardSkeleton />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Create Account | Founders Club</title>
        <meta name="description" content="Create your Founders Club account and apply for membership." />
        <meta name="keywords" content="Founders Club, sign up, create account, membership" />
      </Head>
      <div className="min-h-screen bg-forest-800 relative">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-center opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: `url(${foundersClubImages.texture})`, backgroundSize: 'auto' }}
          aria-hidden
        />
        <Navbar />
        <main className="relative z-10 pt-24 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-4">
              Create Your Account
            </h1>
            <p className="text-gold-100/90 text-lg">
              Join The Founders Club. Create an account to apply for membership and access the network.
            </p>
          </div>
          <div className="max-w-md mx-auto px-4">
            <div className="fc-card rounded-2xl border border-forest-600 bg-forest-700/60 p-6 md:p-8">
              {error && (
                <div
                  className={`rounded-lg border px-4 py-3 text-sm font-medium mb-6 ${
                    error.startsWith('✓')
                      ? 'border-emerald-800/60 bg-emerald-900/20 text-emerald-200'
                      : 'border-red-800/60 bg-red-900/20 text-red-200'
                  }`}
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </div>
              )}

              <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
                <label>
                  <span className={labelClass}>Full name</span>
                  <input
                    type="text"
                    autoComplete="name"
                    id="signup-name"
                    name="name"
                    placeholder="Alex Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                    className={fieldClass}
                  />
                </label>
                <label>
                  <span className={labelClass}>Email</span>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    id="signup-email"
                    name="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className={fieldClass}
                  />
                </label>
                <label>
                  <span className={labelClass}>Password</span>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      id="signup-password"
                      name="password"
                      placeholder="Create a secure password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={5}
                      disabled={loading}
                      className={`${fieldClass} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      tabIndex={-1}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      disabled={loading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gold-200/80 hover:text-gold-300 rounded-md disabled:opacity-50"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {passwordHint && (
                    <small className="mt-1.5 block text-xs text-gold-200/70">{passwordHint}</small>
                  )}
                </label>
                <button type="submit" disabled={isDisabled} className="btn-fc-primary w-full justify-center py-3">
                  {loading && (
                    <span
                      className="inline-block h-4 w-4 rounded-full border-2 border-forest-950/40 border-t-gold-400 animate-spin"
                      aria-hidden
                    />
                  )}
                  <span>{loading ? 'Creating your account…' : 'Create Account'}</span>
                </button>
              </form>

              <footer className="mt-8 pt-6 border-t border-forest-600/60 flex flex-wrap justify-center items-center gap-2 text-sm text-gold-100/80">
                <span>Already registered?</span>
                <Link href="/login" className="font-semibold text-gold-400 hover:text-gold-300 transition-colors">
                  Sign in instead
                </Link>
              </footer>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
