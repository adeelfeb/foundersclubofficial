'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SiWhatsapp } from 'react-icons/si'
import TextureOverlay from './TextureOverlay'

// Professional background video – replace with your own when ready (e.g. /video/hero.mp4)
const HERO_VIDEO_SRC = 'https://assets.mixkit.co/videos/9236/9236-720.mp4'

export default function FoundersClubHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-start pt-24 pb-20 overflow-hidden bg-neutral-950">
      {/* Video background – full bleed, muted loop */}
      <div className="absolute inset-0 w-full h-full bg-neutral-900" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster=""
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
      {/* Blur layer so video doesn’t compete with text */}
      <div
        className="absolute inset-0 w-full h-full backdrop-blur-[2px]"
        aria-hidden
      />
      {/* Dark gradient overlay for strong text contrast */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 from-20% via-black/70 via-50% to-transparent"
        aria-hidden
      />
      {/* Same texture as rest of site (subtle on hero) */}
      <TextureOverlay opacity={0.05} className="mix-blend-overlay" />
      {/* Subtle gold tint – vibrant gradient */}
      <div
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse 70% 80% at 25% 50%, rgba(212,175,55,0.22) 0%, rgba(201,162,39,0.08) 45%, transparent 60%)',
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
          Everyone deserves easy and affordable access to law.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link href="/contact" className="btn-fc-primary text-base px-8 py-3.5 no-underline inline-flex items-center gap-2">
            <SiWhatsapp className="w-5 h-5 shrink-0 text-gold-600" aria-hidden />
            Book consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
