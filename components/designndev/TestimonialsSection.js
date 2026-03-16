'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { foundersClubImages } from '../../lib/foundersClubImages'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sahail',
    role: 'Client',
    quote: "Professional, clear, and genuinely invested in our outcome. We couldn't have asked for better representation.",
  },
  {
    name: 'Joel',
    role: 'Client',
    quote: "The team made a complex process straightforward. Highly recommend for anyone needing reliable legal support.",
  },
  {
    name: 'Anne M.',
    role: 'Client',
    quote: "At Sahail Law, we believe the law should empower—not overwhelm. They delivered on that promise for us.",
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 6000)
    return () => clearInterval(t)
  }, [total])

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  return (
    <section className="py-16 md:py-24 bg-forest-800 relative overflow-hidden">
      {/* Background image from temp */}
      <div className="absolute inset-0">
        <Image
          src={foundersClubImages.testimonialsBg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-forest-900/55" aria-hidden />
      <div className="absolute inset-0 bg-forest-800/40" aria-hidden />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading font-heading text-4xl md:text-5xl font-medium text-gold-500 mb-12 md:mb-16 text-left normal-case"
        >
          <span className="text-white">Reviews</span> From Clients
        </motion.h2>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              <Quote className="w-12 h-12 md:w-14 md:h-14 text-gold-500/70 mb-4" strokeWidth={1.2} />
              <p className="text-gold-100/95 text-base md:text-lg leading-relaxed max-w-2xl">
                {testimonials[index].quote}
              </p>
              <p className="mt-6 text-gold-200 font-medium">
                — {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={goPrev}
            className="p-2 rounded-full border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-gold-500' : 'bg-gold-500/40 hover:bg-gold-500/60'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            className="p-2 rounded-full border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
