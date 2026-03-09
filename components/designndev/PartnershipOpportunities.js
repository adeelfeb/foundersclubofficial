'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Hexagon, Mic } from 'lucide-react'

const opportunities = [
  {
    title: 'Event Sponsorship',
    description: 'Align your brand with premier founder events, from masterminds to our Annual Retreat. Gain visibility and connection with high-growth entrepreneurs.',
    Icon: Calendar,
  },
  {
    title: 'Strategic Alliance',
    description: 'Partner with The Founders Club to co-create value for members—whether through content, programs, or exclusive access to your network.',
    Icon: Users,
  },
  {
    title: 'Preferred Partner Status',
    description: 'Become a vetted preferred partner and get direct access to our member base for tailored offerings and long-term relationships.',
    Icon: Hexagon,
  },
  {
    title: 'Media Sponsorship',
    description: 'Support our podcast, newsletter, and digital content. Reach founders where they are and build authority in the ecosystem.',
    Icon: Mic,
  },
]

export default function PartnershipOpportunities() {
  return (
    <section className="py-16 md:py-24 bg-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-semibold text-gold-500 text-center mb-12 md:mb-16"
        >
          Partnership Opportunities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {opportunities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="fc-card p-6 md:p-8 flex flex-col"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gold-400/10 text-gold-400">
                  <item.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-subheading text-xl font-semibold text-gold-200">
                  {item.title}
                </h3>
              </div>
              <p className="text-gold-100/80 text-sm md:text-base leading-relaxed flex-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <svg className="w-6 h-6 text-gold-500/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
