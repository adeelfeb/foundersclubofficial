'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function NotarizationSection() {
  return (
    <section
      className="relative w-full bg-forest-950 border-t border-gold-500/20 border-b border-gold-500/15"
      aria-labelledby="notarization-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10"
      >
        <Link
          href="/contact"
          className="group flex w-full items-center justify-between gap-6 py-6 md:py-8 transition-colors no-underline hover:opacity-95"
        >
          <h2
            id="notarization-heading"
            className="section-heading font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-gold-100 normal-case text-left leading-snug"
          >
            For notarization &amp; power of attorney
          </h2>
          <span
            className="shrink-0 w-10 h-10 flex items-center justify-center border border-gold-500/40 text-gold-400 group-hover:text-gold-300 group-hover:border-gold-400/60 transition-colors"
            aria-hidden
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2} />
          </span>
        </Link>
      </motion.div>
    </section>
  )
}
