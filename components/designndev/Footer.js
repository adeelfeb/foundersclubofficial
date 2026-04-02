'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { foundersClubImages } from '../../lib/foundersClubImages'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about-us' },
  { label: 'Practice areas', href: '/practice-areas' },
  { label: 'Our team', href: '/our-team' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact us', href: '/contact' },
]

/** Footer mark — sized up to pair with header branding */
const FOOTER_LOGO_CLASS =
  'h-16 w-auto sm:h-[4.5rem] md:h-[5.25rem] lg:h-[6rem] xl:h-[6.75rem] 2xl:h-[7.25rem] object-contain [image-rendering:auto]'

function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (honeypot) return
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), website_url: honeypot }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Please try again.')
        return
      }
      setStatus('success')
      setMessage(data.message || 'Thanks for subscribing.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="w-full max-w-md lg:max-w-xl lg:ml-auto lg:text-right">
      <p className="font-subheading text-xs tracking-wide text-gold-200/90 uppercase mb-2 lg:text-right">
        Email updates
      </p>
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-2 sm:flex-row sm:items-stretch sm:justify-end">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status !== 'loading') {
              setStatus('idle')
              setMessage('')
            }
          }}
          placeholder="Enter your email"
          disabled={status === 'loading'}
          className="flex-1 min-w-0 rounded-none border border-gold-500/35 bg-black/25 px-3 py-2.5 text-sm text-gold-50 placeholder:text-gold-200/45 focus:border-gold-400/60 focus:outline-none focus:ring-1 focus:ring-gold-400/35 font-subheading"
        />
        <input
          type="text"
          name="website_url"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-px w-px opacity-0"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-none border border-gold-500/50 bg-gold-500/90 px-5 py-2.5 text-sm font-sans text-forest-950 hover:bg-gold-400 transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? '…' : 'Sign up'}
        </button>
      </form>
      {message && (
        <p
          className={`mt-2 text-xs font-subheading lg:text-right ${status === 'error' ? 'text-red-300/90' : 'text-gold-300/90'}`}
          role="status"
        >
          {message}
        </p>
      )}
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative text-gold-100/90 border-t border-forest-800 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${foundersClubImages.footerDecorBg})` }}
        aria-hidden
      />
      {/* Layered overlay: darken + rose-gold tint + subtle noise for readability */}
      <div className="absolute inset-0 bg-forest-950/92" aria-hidden />
      <div
        className="absolute inset-0 opacity-55"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 25%, rgba(165,139,128,0.18) 0%, transparent 55%), linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.85) 100%)',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 opacity-20 bg-noise-subtle" aria-hidden />
      <section className="relative z-10 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top: logo flush left, signup right — separated by bottom rule */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12 pb-8 md:pb-10 border-b border-gold-400/25">
            <Link
              href="/"
              className="inline-flex items-end leading-none no-underline hover:opacity-90 transition-opacity shrink-0 self-start"
            >
              <Image
                src={foundersClubImages.logoFooter}
                alt="Sahai Law"
                width={1440}
                height={427}
                className={FOOTER_LOGO_CLASS}
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 480px, (max-width: 1536px) 600px, 680px"
                quality={100}
              />
            </Link>
            <FooterNewsletter />
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            <div>
              <h4 className="font-subheading font-medium text-gold-200 text-xs tracking-wide uppercase mb-3">
                Office
              </h4>
              <ul className="space-y-2 text-sm font-subheading text-gold-100/85">
                <li className="text-gold-50/95 font-medium">Sahai Law</li>
                <li>Brampton, Ontario</li>
                <li>
                  <a
                    href="tel:+14374515551"
                    className="text-gold-100/85 hover:text-gold-300 transition-colors no-underline"
                  >
                    +1 437-451-5551
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@sahailaw.ca"
                    className="text-gold-100/85 hover:text-gold-300 transition-colors no-underline"
                  >
                    info@sahailaw.ca
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-subheading font-medium text-gold-200 text-xs tracking-wide uppercase mb-3">
                Quick links
              </h4>
              <ul className="space-y-2 text-sm font-subheading">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-subheading font-medium text-gold-200 text-xs tracking-wide uppercase mb-3">
                Hours
              </h4>
              <p className="text-sm font-subheading text-gold-100/85 leading-relaxed">
                Monday – Friday
                <br />
                9:00 AM – 5:00 PM
              </p>
            </div>

            <div>
              <h4 className="font-subheading font-medium text-gold-200 text-xs tracking-wide uppercase mb-3">
                Follow us
              </h4>
              <p className="text-sm font-subheading text-gold-100/70 mb-3">
                Connect with Sahai Law for updates and insights.
              </p>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-subheading text-gold-200 hover:text-gold-100 no-underline border border-gold-500/30 px-3 py-2 rounded-none hover:border-gold-400/50 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-3 md:py-4 border-t border-forest-800/80 bg-forest-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gold-200/60 text-xs font-subheading">
            © {currentYear} Sahai Law. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  )
}
