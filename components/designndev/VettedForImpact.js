'use client'

import Image from 'next/image'
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
          <h2 className="section-heading font-heading text-4xl md:text-5xl font-medium text-gold-500 mb-10 md:mb-12 text-left normal-case">
            At Sahai Law
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-center gap-10">
            <div className="text-gold-100/90 text-base md:text-lg leading-relaxed space-y-6 font-subheading">
              <p>
                At Sahai Law, we believe that quality legal support should be accessible to everyone. That&apos;s why we offer a free, no-obligation case review to help you understand your rights and legal options.
              </p>
              <p>
                Our lawyers are readily available to meet with you and provide clear, practical guidance tailored to your situation. Early legal advice can be crucial in protecting your interests and strengthening your position.
              </p>
              <p>
                Delaying legal advice or relying on incorrect guidance can negatively impact your case. Take the first step with confidence. Contact us today to schedule your confidential, no-obligation consultation with one of our experienced legal professionals.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-forest-800">
              <Image
                src="/images/24.jpg"
                alt="Sahai Law"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
