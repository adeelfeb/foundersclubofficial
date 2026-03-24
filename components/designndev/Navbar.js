'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { foundersClubImages } from '../../lib/foundersClubImages'

function useRouterCompat() {
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname)
      const scheduleUpdate = () => {
        queueMicrotask(() => setPathname(window.location.pathname))
      }
      window.addEventListener('popstate', scheduleUpdate)
      const op = history.pushState
      const or = history.replaceState
      history.pushState = function (...args) {
        op.apply(history, args)
        scheduleUpdate()
      }
      history.replaceState = function (...args) {
        or.apply(history, args)
        scheduleUpdate()
      }
      return () => {
        window.removeEventListener('popstate', scheduleUpdate)
        history.pushState = op
        history.replaceState = or
      }
    }
  }, [])
  return { asPath: pathname, pathname }
}

export default function Navbar() {
  const router = useRouterCompat()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isActive = (href) => {
    if (!isMounted) return false
    const pathname = router.asPath || router.pathname
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const whatsappHref = 'https://wa.me/13654995551'
  const whatsappDisplay = '1 (365) 499-5551'

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/practice-areas', label: 'Practice areas' },
    { href: '/about-us', label: 'About us' },
    { href: '/our-team', label: 'Our Team' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300"
      >
        {/* Slim bar only; logo can extend past it (previous size) without growing the strip */}
        <div
          className="h-[var(--fc-navbar-height)] w-full bg-black/40 backdrop-blur-sm nav-gold-line"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 z-[60] pointer-events-none">
          <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-7 lg:px-9 xl:px-11 pointer-events-auto">
            <div className="grid grid-cols-3 items-center gap-3 sm:gap-6 lg:gap-10 h-[var(--fc-navbar-height)] py-0">
            {/* Left: Menu toggle – generous tap target */}
            <div className="flex justify-start min-w-[2.75rem] items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 -ml-0.5 text-white hover:text-gold-200 rounded-lg transition-colors touch-manipulation"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Desktop-only label + quick link */}
              <div className="hidden lg:flex items-center gap-2 pl-3">
                <div className="flex items-center gap-8">
                  <Link
                    href="/about-us"
                    className="font-heading text-sm text-white/90 hover:text-gold-200 no-underline transition-colors"
                  >
                    About us
                  </Link>
                  <Link
                    href="/practice-areas"
                    className="font-heading text-sm text-white/90 hover:text-gold-200 no-underline transition-colors"
                  >
                    Practice areas
                  </Link>
                </div>
              </div>
            </div>

            {/* Center: Logo – on mobile larger and pushed right; on sm+ centered */}
            <div className="flex justify-end sm:justify-center col-span-2 sm:col-span-1 min-h-0">
              <Link
                href="/"
                className="flex items-center leading-none no-underline hover:opacity-90 transition-opacity"
              >
                <Image
                  src={foundersClubImages.logo}
                  alt="Founders Club"
                  width={128}
                  height={38}
                  className="h-7 w-auto sm:h-7 md:h-8 lg:h-9 xl:h-9 object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Right: WhatsApp contact + CTA */}
            <div className="hidden sm:flex justify-end items-center min-w-0 pl-1 gap-2 md:gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 shrink-0 font-heading text-xs md:text-sm text-white/90 hover:text-gold-200 no-underline transition-colors"
              >
                <Image
                  src="/images/phone.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] md:h-5 md:w-5 object-contain opacity-95"
                  aria-hidden
                />
                <span className="whitespace-nowrap tabular-nums">
                  <span aria-hidden>– </span>
                  {whatsappDisplay}
                </span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fc-primary font-heading text-sm whitespace-nowrap shrink-0 !py-1.5 px-4"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
        </div>
      </motion.nav>

      {/* Menu overlay – rendered outside the animated nav so fixed positioning is true viewport-fixed */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 bottom-0 z-40 bg-black/92 backdrop-blur-md overflow-auto top-[var(--fc-navbar-height)]"
            aria-hidden="false"
          >
            <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-7 lg:px-9 xl:px-11 pt-8 pb-16">
              {/* Mobile: CTA inside menu as full-width button */}
              <div className="sm:hidden mb-8 space-y-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-heading text-base text-gold-200/95 hover:text-gold-100 no-underline transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src="/images/phone.png"
                    alt=""
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] object-contain opacity-95"
                    aria-hidden
                  />
                  <span className="whitespace-nowrap tabular-nums">
                    <span aria-hidden>– </span>
                    {whatsappDisplay}
                  </span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fc-primary font-heading w-full justify-center text-base !py-2.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Consultation
                </a>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 w-full max-w-[1200px]">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`nav-link-glow font-heading block py-5 px-1 text-3xl md:text-5xl font-semibold no-underline transition-colors border-b border-white/10 hover:border-gold-400/40 ${
                        isActive(item.href) ? 'text-gold-400' : 'text-white/95 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
