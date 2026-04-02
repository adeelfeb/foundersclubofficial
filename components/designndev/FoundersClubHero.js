'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { foundersClubImages } from '../../lib/foundersClubImages'

export default function FoundersClubHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 w-full h-full" aria-hidden>
        <Image
          src={foundersClubImages.homeHeroBg}
          alt="Sahai Law"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Darken hero photo so it does not overpower the layout */}
      <div className="absolute inset-0 w-full h-full bg-black/45" aria-hidden />
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/88 from-15% via-black/62 via-45% to-black/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 80% at 25% 50%, rgba(165,139,128,0.18) 0%, rgba(140,114,104,0.05) 45%, transparent 60%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-subheading text-xs sm:text-sm tracking-[0.28em] uppercase text-gold-200/90 mb-3"
          >
            Sahai Law
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-4 leading-tight drop-shadow-lg"
          >
            TRUST. EXPERTISE. RESULTS.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gold-100/95 text-base sm:text-lg md:text-xl leading-relaxed font-subheading max-w-2xl mx-auto"
          >
            Practical legal guidance with clear next steps—built for busy families and business owners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact"
              className="btn-fc-primary text-sm sm:text-base px-6 sm:px-8 py-3 no-underline inline-flex items-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5 shrink-0 text-gold-700" aria-hidden />
              Book a Free Call
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto text-center"
        >
          {[
            { title: 'Family Law', body: 'Separation, parenting, support, and agreements.' },
            { title: 'Real Estate', body: 'Purchases, sales, refinancing, and closings.' },
            { title: 'Notary & POA', body: 'Notarization, affidavits, and powers of attorney.' },
          ].map((card) => (
            <div
              key={card.title}
              className="border border-gold-400/30 border-b-8 border-b-gold-500 bg-black/55 backdrop-blur-md px-5 py-4"
            >
              <div className="font-heading text-lg md:text-xl font-medium text-gold-200 mb-1.5">
                {card.title}
              </div>
              <div className="text-sm md:text-base text-gold-100/80 font-subheading leading-relaxed">
                {card.body}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
