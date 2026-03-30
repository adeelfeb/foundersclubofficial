'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { foundersClubImages } from '../../lib/foundersClubImages'

export default function FoundersClubHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-start pt-20 pb-20 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 w-full h-full" aria-hidden>
        <Image
          src={foundersClubImages.sectionBelowHeroBg}
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
            'radial-gradient(ellipse 70% 80% at 25% 50%, rgba(212,175,55,0.18) 0%, rgba(201,162,39,0.05) 45%, transparent 60%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-left pt-2">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight max-w-3xl drop-shadow-lg"
        >
          Everyone deserves easy and affordable access to the law.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link href="/contact" className="btn-fc-primary text-base px-8 py-3.5 no-underline inline-flex items-center gap-2">
            <FaWhatsapp className="w-5 h-5 shrink-0 text-emerald-700" aria-hidden />
            BOOK A FREE CALL
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
