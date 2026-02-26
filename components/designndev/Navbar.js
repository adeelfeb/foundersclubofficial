'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

function useRouterCompat() {
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname)
      const handleRouteChange = () => setPathname(window.location.pathname)
      window.addEventListener('popstate', handleRouteChange)
      const op = history.pushState
      const or = history.replaceState
      history.pushState = function (...args) {
        op.apply(history, args)
        handleRouteChange()
      }
      history.replaceState = function (...args) {
        or.apply(history, args)
        handleRouteChange()
      }
      return () => {
        window.removeEventListener('popstate', handleRouteChange)
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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href) => {
    if (!isMounted) return false
    const pathname = router.asPath || router.pathname
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/information', label: 'ABOUT & TEAM' },
    { href: '/blogs', label: 'MEMBERSHIP' },
    { href: '#impact', label: 'IMPACT' },
    { href: '/blogs', label: 'NEWS' },
    { href: '/contact', label: 'CONTACT' },
  ]

  const linkClass = (href) =>
    `px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 no-underline ${
      isActive(href) ? 'text-gold-400' : 'text-gold-200/90 hover:text-gold-300'
    }`

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-forest-800/98 backdrop-blur-md shadow-lg' : 'bg-forest-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl font-semibold text-gold-400 tracking-tight no-underline hover:text-gold-300 transition-colors"
          >
            FOUNDERS CLUB
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/login"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-forest-800 bg-gold-400 hover:bg-gold-300 border border-gold-400 rounded transition-colors no-underline"
            >
              LOG IN
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-gold-400 bg-transparent border border-gold-400 rounded hover:bg-gold-400/10 transition-colors no-underline"
            >
              APPLY NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gold-300 hover:text-gold-400 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-forest-700 border-t border-forest-600"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block py-3 px-3 text-sm font-medium rounded-lg no-underline ${linkClass(item.href)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-forest-600">
                <Link
                  href="/login"
                  className="flex-1 text-center py-3 text-sm font-semibold text-forest-800 bg-gold-400 rounded-lg no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOG IN
                </Link>
                <Link
                  href="/signup"
                  className="flex-1 text-center py-3 text-sm font-semibold text-gold-400 border border-gold-400 rounded-lg no-underline hover:bg-gold-400/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  APPLY NOW
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
