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
  const detail =
    typeof payload.error === 'string'
      ? payload.error
      : Array.isArray(payload.error)
      ? payload.error.join(', ')
      : ''
  if (detail) {
    return `${payload.message || fallback}: ${detail}`
  }
  return payload.message || fallback
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
    console.warn('[Login] Redirect loop detected, clearing auth state')
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

export default function LoginPage() {
  const router = useRouter()
  const { execute: executeRecaptcha, isAvailable: recaptchaAvailable } = useRecaptcha()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const hasCheckedAuth = useRef(false)
  const [needsVerification, setNeedsVerification] = useState(false)
  const [pendingEmail, setPendingEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')

  const redirectTo = useMemo(() => {
    return router.query.redirect || '/dashboard'
  }, [router.query.redirect])

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
          const redirectDestination = router.query.redirect || '/dashboard'
          if (redirectDestination === '/dashboard' || !router.query.redirect) {
            router.replace('/dashboard').then(() => {
              if (typeof window !== 'undefined') {
                window.location.hash = 'blogs'
              }
            })
          } else {
            router.replace(redirectDestination)
          }
          return
        } else {
          localStorage.removeItem('token')
        }
      } catch (err) {
        console.log('[Login] Auth check failed, showing login page:', err)
        localStorage.removeItem('token')
      } finally {
        setCheckingAuth(false)
      }
    }
    checkAuth()
  }, [router.isReady])

  const isDisabled = useMemo(() => {
    if (loading) return true
    const identifierValid = identifier.trim().length > 0
    const passwordValid = password.length >= 5
    return !identifierValid || !passwordValid
  }, [identifier, password, loading])

  const isVerifyDisabled = useMemo(() => {
    if (loading) return true
    return !verificationCode.trim() || verificationCode.trim().length < 4
  }, [verificationCode, loading])

  async function onVerifySubmit(e) {
    e.preventDefault()
    if (isVerifyDisabled) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: pendingEmail, otp: verificationCode.trim() }),
      })
      const text = await res.text()
      let data = {}
      if (text && text.trim()) {
        try {
          data = JSON.parse(text)
        } catch {
          setError('Server error. Please try again.')
          setLoading(false)
          return
        }
      }
      if (!res.ok || !data.success) {
        setError(formatErrorMessage(data, 'Invalid or expired code. Try again or request a new one.'))
        setLoading(false)
        return
      }
      if (data.data && data.data.token) {
        localStorage.setItem('token', data.data.token)
      }
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('auth_redirect_count')
        sessionStorage.removeItem('auth_redirect_time')
      }
      const redirectDest = router.query.redirect || '/dashboard'
      if (redirectDest === '/dashboard' || !router.query.redirect) {
        router.replace('/dashboard').then(() => {
          if (typeof window !== 'undefined') {
            window.location.hash = 'blogs'
          }
        })
      } else {
        router.replace(redirectDest)
      }
    } catch (err) {
      console.error('[Login] Verify error', err)
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function backToSignIn() {
    setNeedsVerification(false)
    setPendingEmail('')
    setVerificationCode('')
    setError('')
  }

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
      const trimmedIdentifier = identifier.trim()
      const isEmail = trimmedIdentifier.includes('@')
      const loginPayload = { password }
      if (isEmail) {
        loginPayload.email = trimmedIdentifier
      } else {
        loginPayload.username = trimmedIdentifier
      }
      if (recaptchaToken) loginPayload.recaptchaToken = recaptchaToken

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(loginPayload),
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
            setError("We couldn't sign you in. Please try again.")
          }
          setLoading(false)
          return
        }
      }

      if (!res.ok || !data.success) {
        if (res.status === 403 && data.needs_verification && data.email) {
          setPendingEmail(data.email)
          setNeedsVerification(true)
          setError('')
          setLoading(false)
          return
        }
        const errorMessage = formatErrorMessage(data, "We couldn't sign you in with those credentials.")
        setError(errorMessage)
        setLoading(false)
        return
      }

      if (data.data && data.data.token) {
        localStorage.setItem('token', data.data.token)
      }
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('auth_redirect_count')
        sessionStorage.removeItem('auth_redirect_time')
      }
      const redirectDest = router.query.redirect || '/dashboard'
      if (redirectDest === '/dashboard' || !router.query.redirect) {
        router.replace('/dashboard').then(() => {
          if (typeof window !== 'undefined') {
            window.location.hash = 'blogs'
          }
        })
      } else {
        router.replace(redirectDest)
      }
    } catch (err) {
      console.error('[Login] Error during sign-in flow', err)
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Unable to connect to the server. Please check your internet connection and try again.')
      } else {
        setError(err.message || "We couldn't sign you in. Please check your credentials and try again.")
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
          <title>Member Login | Founders Club</title>
          <meta name="description" content="Sign in to your Founders Club account." />
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
        <title>Member Login | Founders Club</title>
        <meta name="description" content="Sign in to your Founders Club account." />
        <meta name="keywords" content="Founders Club, login, member login" />
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
              Member Login
            </h1>
            <p className="text-gold-100/90 text-lg">
              Sign in to access your Founders Club account and member resources.
            </p>
          </div>
          <div className="max-w-md mx-auto px-4">
            <div className="fc-card rounded-2xl border border-forest-600 bg-forest-700/60 p-6 md:p-8">
              {error && (
                <div
                  className="rounded-lg border border-red-800/60 bg-red-900/20 px-4 py-3 text-red-200 text-sm font-medium mb-6"
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </div>
              )}

              {needsVerification ? (
                <>
                  <p className="text-gold-100/90 text-sm mb-6">
                    We&apos;ve sent a verification code to <strong className="text-gold-300">{pendingEmail}</strong>. Enter it below to sign in.
                  </p>
                  <form onSubmit={onVerifySubmit} className="flex flex-col gap-5" noValidate>
                    <label>
                      <span className={labelClass}>Verification Code</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        id="login-verify-code"
                        name="otp"
                        placeholder="Enter 6-digit code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        maxLength={6}
                        disabled={loading}
                        className={fieldClass}
                      />
                    </label>
                    <button type="submit" disabled={isVerifyDisabled} className="btn-fc-primary w-full justify-center py-3">
                      {loading && (
                        <span
                          className="inline-block h-4 w-4 rounded-full border-2 border-forest-950/40 border-t-gold-400 animate-spin"
                          aria-hidden
                        />
                      )}
                      <span>{loading ? 'Verifying…' : 'Verify & Sign In'}</span>
                    </button>
                  </form>
                  <button
                    type="button"
                    onClick={backToSignIn}
                    disabled={loading}
                    className="mt-4 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors disabled:opacity-60"
                  >
                    ← Back to sign in
                  </button>
                </>
              ) : (
                <>
                  <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
                    <label>
                      <span className={labelClass}>Email or Username</span>
                      <input
                        type="text"
                        inputMode="text"
                        autoComplete="username email"
                        id="login-identifier"
                        name="identifier"
                        placeholder="you@example.com or username"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
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
                          autoComplete="current-password"
                          id="login-password"
                          name="password"
                          placeholder="Enter your password"
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
                    </label>
                    <button type="submit" disabled={isDisabled} className="btn-fc-primary w-full justify-center py-3">
                      {loading && (
                        <span
                          className="inline-block h-4 w-4 rounded-full border-2 border-forest-950/40 border-t-gold-400 animate-spin"
                          aria-hidden
                        />
                      )}
                      <span>{loading ? 'Signing you in…' : 'Sign In'}</span>
                    </button>
                  </form>
                </>
              )}

              <footer className="mt-8 pt-6 border-t border-forest-600/60 flex flex-wrap justify-center items-center gap-2 text-sm text-gold-100/80">
                <span>Need an account?</span>
                <Link href="/signup" className="font-semibold text-gold-400 hover:text-gold-300 transition-colors">
                  Create one here
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
