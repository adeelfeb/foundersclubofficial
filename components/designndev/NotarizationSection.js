'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function NotarizationSection() {
  return (
    <section
      className="relative w-full overflow-hidden border-t border-gold-500/20 border-b border-gold-500/15"
      aria-labelledby="notarization-heading"
    >
      {/* Header-style glass strip */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" aria-hidden />
      <div className="absolute inset-0 nav-gold-line opacity-60" aria-hidden />
      <div
        className="absolute inset-0 opacity-45"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(165,139,128,0.14) 0%, transparent 55%), linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 100%)',
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16"
      >
        <Link
          href="/contact"
          className="group flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10 py-10 md:py-12 lg:py-14 transition-colors no-underline hover:opacity-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400/50 rounded-sm"
        >
          <div className="min-w-0 flex-1 space-y-3 text-left max-w-3xl">
            <p className="font-subheading text-xs sm:text-sm tracking-[0.2em] uppercase text-gold-300/90">
              Services
            </p>
            <h2
              id="notarization-heading"
              className="section-heading font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] font-semibold text-gold-100 normal-case leading-tight"
            >
              For notarization &amp; power of attorney
            </h2>
            <p className="font-subheading text-base md:text-lg text-gold-100/75 leading-relaxed max-w-2xl">
              Book a visit or ask about affidavits, certified copies, and POA documents—we&apos;ll point you to the right next step.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-3">
            <span className="font-subheading text-sm font-medium text-gold-300/90 whitespace-nowrap sm:order-2">
              Get in touch
            </span>
            <span
              className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center border border-gold-400/45 bg-black/30 text-gold-400 transition-colors group-hover:border-gold-400/70 group-hover:bg-gold-400/10 group-hover:text-gold-300"
              aria-hidden
            >
              <ChevronRight className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2} />
            </span>
          </div>
        </Link>
      </motion.div>
    </section>
  )
}
