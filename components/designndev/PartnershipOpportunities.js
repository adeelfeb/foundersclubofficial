'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Hexagon, Mic } from 'lucide-react'

const opportunities = [
  {
    title: 'Accessible Justice',
    description: "At Stellar Law Professional Corporation, we believe that quality legal support should be accessible to everyone. That's why we offer a free, no-obligation case review to help you understand your rights and legal options.",
    Icon: Calendar,
  },
  {
    title: 'Dedicated Support',
    description: 'Our lawyers are readily available to meet with you and provide clear, practical guidance tailored to your situation. Early legal advice can be crucial in protecting your interests and strengthening your position.',
    Icon: Users,
  },
  {
    title: 'Act Without Delay',
    description: 'Delaying legal advice, or relying on incorrect guidance, can negatively impact your case. Take the first step with confidence. Contact us today to schedule your confidential, no-obligation consultation with one of our experienced legal professionals.',
    Icon: Hexagon,
  },
  {
    title: 'Results That Matter',
    description: 'We are committed to delivering results that truly matter. We approach every case with precision, strategy, and dedication to achieve the best possible outcome for our clients.',
    Icon: Mic,
  },
]

export default function PartnershipOpportunities() {
  return (
    <section className="py-16 md:py-24 section-divider-gold relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading font-heading text-4xl md:text-5xl font-medium text-gold-500 text-left mb-12 md:mb-16 normal-case"
        >
          <span className="text-white">Partnership</span> Opportunities
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
                <h3 className="font-heading text-xl font-medium text-gold-200">
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
