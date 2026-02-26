'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Anne Mahlum',
    role: 'Founder, SolidCore',
    quote: "Anne's session on leadership and self-mastery at Founders Forum became one of the most talked-about events of the year. Her story of resilience continues to shape the Club's culture of high performance with empathy.",
    company: 'SolidCore',
  },
  {
    name: 'Jake Karls',
    role: '"Rainmaker", Midday Squares',
    quote: 'Jake has taken the stage at our Annual Retreat and calls The Club "the only place where founders can speak without filters." His roundtable in Miami inspired dozens of members to take bold creative risks.',
    company: 'Midday Squares',
  },
  {
    name: 'Megan Klein',
    role: 'Little Saints',
    quote: '"Secured a $2.3M partnership from a dinner introduction." Through a single TFC dinner, Megan connected with a strategic investor who helped scale her beverage brand into national retail within six months.',
    company: 'Little Saints',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gold-400 text-center">
            What Members Are Saying
          </h2>
          <Quote className="w-8 h-8 text-gold-500/60 flex-shrink-0" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-forest-700/60 border border-forest-600 rounded-xl p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center mb-4 flex-shrink-0">
                <span className="font-serif text-lg font-semibold text-gold-400">
                  {t.name.charAt(0)}
                </span>
              </div>
              <p className="text-gold-100/90 text-sm md:text-base leading-relaxed mb-4 flex-1">
                {t.quote}
              </p>
              <div className="pt-3 border-t border-forest-600">
                <p className="font-semibold text-gold-200 text-sm">{t.name}</p>
                <p className="text-gold-100/70 text-xs">{t.role}</p>
                <p className="text-gold-500/80 text-xs mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
