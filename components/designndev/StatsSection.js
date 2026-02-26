'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '1,000+', label: 'Members In Our Network' },
  { value: '150+', label: 'Partnered Founders' },
  { value: '$20B+', label: 'Combined Assets Under Management' },
  { value: '35+', label: 'Advisory Board Members' },
]

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-forest-800 border-t border-forest-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl md:text-3xl font-semibold text-gold-400 mb-12 md:mb-16"
        >
          Member Insights & Impact
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-semibold text-gold-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gold-100/80 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
