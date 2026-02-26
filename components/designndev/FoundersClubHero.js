'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FoundersClubHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-forest-800">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 via-forest-800 to-forest-800 pointer-events-none" />
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 50%)',
      }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gold-300 mb-6 leading-tight"
        >
          Our Founders Run The World&apos;s Best Brands
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-gold-100/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Partnership opportunities and global presence—direct access to an exclusive network of Forbes-listed founders and over $20 Billion in assets under management. A leading global powerhouse built for our members to thrive and succeed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-forest-800 bg-gold-400 border border-gold-400 rounded hover:bg-gold-300 transition-colors no-underline"
          >
            BECOME A MEMBER
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 h-px w-24 mx-auto bg-gold-500/50"
        />
      </div>
    </section>
  )
}
