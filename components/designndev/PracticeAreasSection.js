'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { foundersClubImages } from '../../lib/foundersClubImages'

export default function PracticeAreasSection() {
  const areas = foundersClubImages.practiceAreas

  return (
    <section id="practice-areas" className="py-16 md:py-24 bg-forest-800">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-500 mb-12 md:mb-16 text-left normal-case"
        >
          Practice Areas
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {areas.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[4/5] min-h-[280px] sm:min-h-[320px] w-full overflow-hidden fc-card border border-forest-600/80"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Lighter overlay so images stay bright – only over text area */}
              <div
                className="absolute inset-0 bg-forest-900/35 transition-opacity duration-300 group-hover:bg-forest-900/25"
                aria-hidden
              />
              {/* Gradient only at bottom for label readability */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-950/75 via-forest-950/20 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <h3 className="font-subheading text-lg md:text-xl font-medium text-gold-50 drop-shadow-sm">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
