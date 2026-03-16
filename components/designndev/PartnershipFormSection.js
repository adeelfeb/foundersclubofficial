'use client'

import FreeConsultationSection from './FreeConsultationSection'

/**
 * Home page contact/form section. Uses the shared FreeConsultationSection.
 */
export default function PartnershipFormSection() {
  return (
    <section className="py-16 md:py-24 bg-forest-900 bg-gradient-forest-textured bg-forest-textured-size bg-forest-textured-rep relative overflow-hidden">
      <div className="absolute inset-0 bg-forest-950/40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FreeConsultationSection animated />
      </div>
    </section>
  )
}
