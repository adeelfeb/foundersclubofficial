'use client'

import { motion } from 'framer-motion'

export default function VettedForImpact() {
  return (
    <section id="impact" className="py-16 md:py-24 bg-forest-800 border-t border-forest-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gold-400 mb-6">
              Vetted for Impact
            </h2>
            <div className="space-y-4 text-gold-100/90 text-base md:text-lg leading-relaxed">
              <p>
                Membership is selective. Every founder is vetted not only for what they have built but for how they show up—with openness, generosity, and a willingness to pour into others.
              </p>
              <p>
                The Founders Club has become far more than a network. It is a home for operators who want to build enduring companies while living intentional lives.
              </p>
              <p>
                For those inside, the results are consistent: better decisions, deeper partnerships, and a community that sharpens every dimension of the founder journey.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden bg-forest-700"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-900/50"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gold-400/40 font-serif text-lg">Community</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
