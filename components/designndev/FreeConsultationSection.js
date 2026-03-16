'use client'

import { motion } from 'framer-motion'
import LetsChatForm from './LetsChatForm'

/**
 * Reusable Free Consultation block: left column (heading + copy) + right column (contact form).
 * Used on the home page (inside PartnershipFormSection) and on the contact page.
 */
export default function FreeConsultationSection({ animated = true }) {
  const content = (
    <>
      <div className="text-left flex flex-col justify-center min-h-0">
        <p className="text-gold-200/80 text-sm md:text-base uppercase tracking-wider font-subheading mb-4">
          Please get in touch for all inquiries!
        </p>
        <h2 className="section-heading font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-gold-500 mb-6 text-left normal-case leading-tight">
          <span className="text-white">Free</span> Consultation
        </h2>
        <p className="text-gold-100/85 text-xl md:text-2xl leading-relaxed font-subheading max-w-lg">
          By getting in touch, we provide an opportunity to support you at the right time and to make the right decision. Our team is looking forward to hearing from you and assisting you with a wide range of matters.
        </p>
      </div>
      <div className="rounded-2xl border border-forest-600 p-6 md:p-8 fc-card flex flex-col min-h-0">
        <LetsChatForm />
      </div>
    </>
  )

  if (!animated) {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        {content}
      </section>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left flex flex-col justify-center min-h-0"
      >
        <p className="text-gold-200/80 text-sm md:text-base uppercase tracking-wider font-subheading mb-4">
          Please get in touch for all inquiries!
        </p>
        <h2 className="section-heading font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-gold-500 mb-6 text-left normal-case leading-tight">
          <span className="text-white">Free</span> Consultation
        </h2>
        <p className="text-gold-100/85 text-xl md:text-2xl leading-relaxed font-subheading max-w-lg">
          By getting in touch, we provide an opportunity to support you at the right time and to make the right decision. Our team is looking forward to hearing from you and assisting you with a wide range of matters.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border border-forest-600 p-6 md:p-8 fc-card flex flex-col min-h-0"
      >
        <LetsChatForm />
      </motion.div>
    </div>
  )
}
