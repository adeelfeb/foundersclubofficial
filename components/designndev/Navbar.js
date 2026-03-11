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
    { href: '/contact', label: 'Contact' },
  ]

  const linkClass = (href) =>
    `px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 no-underline ${
      isActive(href)
        ? 'text-gold-400'
        : 'text-white/90 hover:text-white'
    }`

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-sm nav-gold-line"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo – larger size */}
          <Link
            href="/"
            className="flex items-center no-underline hover:opacity-90 transition-opacity"
          >
            <Image
              src={foundersClubImages.logo}
              alt="Sahail Law"
              width={300}
              height={100}
              className="h-16 w-auto md:h-20 lg:h-[5.5rem] xl:h-24 object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <a
              href="https://wa.me/13654995551"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fc-primary"
            >
              Get a free consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold-200 rounded-lg transition-colors"
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
            className="lg:hidden overflow-hidden bg-black/85 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block py-3 px-3 text-sm font-medium rounded-lg no-underline ${isActive(item.href) ? 'text-gold-400' : 'text-white/90 hover:text-white'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
          <a
              href="https://wa.me/13654995551"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fc-primary w-full text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a free consultation
            </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
