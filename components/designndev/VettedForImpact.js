'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { foundersClubImages } from '../../lib/foundersClubImages'

export default function VettedForImpact() {
  return (
    <section id="about" className="py-16 md:py-24 bg-forest-800 border-t border-forest-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading font-heading text-4xl md:text-5xl font-medium text-gold-500 mb-6 text-left normal-case">
              About Us
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
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden bg-forest-700"
          >
            <Image
              src={foundersClubImages.aboutImage}
              alt="About Sahail Law"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
