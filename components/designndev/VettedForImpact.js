'use client'

import { motion } from 'framer-motion'

export default function VettedForImpact() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-heading font-heading text-4xl md:text-5xl font-medium text-gold-500 mb-6 text-center normal-case">
            <span className="text-white">About</span> Sahai Law
          </h2>
          <div className="text-gold-100/90 text-base md:text-lg leading-relaxed lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6">
            <p>
              At Sahai Law, support is embedded in the way we practice. Our name reflects a clear and ongoing commitment to stand with our clients, provide sound guidance, and deliver advocacy without compromise.
            </p>
            <p>
              We approach every matter with a disciplined and strategic mindset. From the outset, we focus on understanding your objectives, assessing risk, and positioning your case for the strongest possible outcome. Our work is deliberate, precise, and tailored to the complexities of each matter we handle.
            </p>
            <p>
              We believe effective legal representation goes beyond advice. It requires clarity, responsiveness, and a consistent focus on advancing our clients&apos; interests. At Sahai Law, we prioritize communication, attention to detail, and practical solutions that align with your goals.
            </p>
            <p className="text-gold-200 font-medium mt-4 lg:mt-2 lg:col-span-2 text-center">
              Defined by support. Proven through results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
