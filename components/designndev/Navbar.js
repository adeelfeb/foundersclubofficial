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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-sm nav-gold-line"
      >
        <div className="relative z-[60] w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-3 items-center py-0 min-h-[5rem] md:min-h-[5.5rem] gap-4 sm:gap-8 lg:gap-12">
            {/* Left: Menu toggle – generous tap target */}
            <div className="flex justify-start min-w-[3rem]">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 text-white hover:text-gold-200 rounded-lg transition-colors -ml-1"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Center: Logo – on mobile larger and pushed right; on sm+ centered */}
            <div className="flex justify-end sm:justify-center col-span-2 sm:col-span-1">
              <Link
                href="/"
                className="flex items-center no-underline hover:opacity-90 transition-opacity"
              >
                <Image
                  src={foundersClubImages.logo}
                  alt="Founders Club"
                  width={280}
                  height={94}
                  className="h-24 w-auto sm:h-[4.25rem] md:h-[4.5rem] lg:h-20 xl:h-24 object-contain"
                />
              </Link>
            </div>

            {/* Right: CTA */}
          <div className="hidden sm:flex justify-end min-w-[3rem]">
              <a
                href="https://wa.me/13654995551"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fc-primary font-heading text-sm whitespace-nowrap py-2.5 px-4 md:py-3 md:px-5 md:text-base"
              >
                Get a free consultation
              </a>
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
            className="fixed top-[5rem] md:top-[5.5rem] left-0 right-0 bottom-0 z-40 bg-black/92 backdrop-blur-md overflow-auto"
            aria-hidden="false"
          >
            <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 pb-16">
              {/* Mobile: CTA inside menu as full-width button */}
              <div className="sm:hidden mb-8">
                <a
                  href="https://wa.me/13654995551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fc-primary font-heading w-full justify-center text-base py-3.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a free consultation
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
