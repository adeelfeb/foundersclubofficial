'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function VettedForImpact() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-forest-700/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="section-heading font-heading text-4xl md:text-5xl font-medium text-gold-500 mb-6 text-left normal-case">
              <span className="text-white">About</span> Us
          </h2>
          <p className="text-gold-200 font-medium text-lg mb-4">
              At Sahail Law, we believe the law should empower—not overwhelm.
          </p>
          <div className="space-y-4 text-gold-100/90 text-base md:text-lg leading-relaxed">
              <p>
                Our firm is built on clarity, integrity, and a commitment to delivering practical legal solutions that protect what matters most to you.
              </p>
          </div>
          <Link href="/about-us" className="btn-fc-primary mt-6 inline-block">
              Learn more about us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
