'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useRecaptcha } from '../../utils/useRecaptcha'
import { safeParseJsonResponse } from '../../utils/safeJsonResponse'

const partnershipTypes = [
  'Event Sponsorship',
  'Strategic Alliance',
  'Preferred Partner',
  'Media Sponsorship',
  'Other',
]

const hearAboutOptions = [
  'Referral',
  'Website',
  'Social Media',
  'Event',
  'Podcast / Newsletter',
  'Other',
]

export default function PartnershipFormSection() {
  const { execute: executeRecaptcha, isAvailable: recaptchaAvailable } = useRecaptcha()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    partnershipType: '',
    hearAbout: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const recaptchaToken = recaptchaAvailable ? await executeRecaptcha() : null
    if (recaptchaAvailable && !recaptchaToken) {
      setSubmitStatus({ type: 'error', message: 'Security verification failed. Please refresh and try again.' })
      return
    }
    setIsSubmitting(true)
    setSubmitStatus(null)
    const name = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim()
    if (!name || !formData.email?.trim()) {
      setSubmitStatus({ type: 'error', message: 'First name and email are required.' })
      setIsSubmitting(false)
      return
    }
    try {
      const payload = { name, email: formData.email.trim() }
      if (recaptchaToken) payload.recaptchaToken = recaptchaToken
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await safeParseJsonResponse(response)
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you! We will be in touch soon.' })
        setFormData({ firstName: '', lastName: '', email: '', company: '', phone: '', partnershipType: '', hearAbout: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' })
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-forest-700/80 border border-forest-600 rounded-lg text-gold-100 placeholder-gold-200/40 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-all'
  const labelClass = 'block text-sm font-medium text-gold-200/90 mb-2'

  return (
    <section className="py-16 md:py-24 bg-forest-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-forest-900/50 pointer-events-none" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-10"
        >
            <h2 className="section-heading font-heading text-4xl md:text-5xl font-medium text-gold-500 mb-4 normal-case">
            Explore a Strategic Partnership
          </h2>
          <p className="text-gold-100/80 text-base md:text-lg">
            Interested in learning more about how you can become a member or partner of The Founders Club? Get in touch about available opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-forest-700/80 border border-forest-600 rounded-2xl p-6 md:p-8 relative fc-card"
        >
          {isSubmitting && (
            <div className="absolute inset-0 rounded-2xl bg-forest-800/60 backdrop-blur-sm z-10 pointer-events-auto" aria-hidden />
          )}
          <form onSubmit={handleSubmit} className="space-y-5 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className={labelClass}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Last name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className={labelClass}>Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
                placeholder="Company name"
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label htmlFor="partnershipType" className={labelClass}>What type of partnership are you looking for?</label>
              <select
                id="partnershipType"
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select an option</option>
                {partnershipTypes.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="hearAbout" className={labelClass}>How did you hear about The Founders Club?</label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select an option</option>
                {hearAboutOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>Anything else you&apos;d like to include?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-y min-h-[100px]`}
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.01 } : {}}
              whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              className="w-full py-4 px-6 font-medium text-forest-950 bg-gold-500 border-2 border-gold-400 rounded-none hover:bg-gold-400 hover:border-gold-300 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-fc-gold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting…</span>
                </>
              ) : (
                'Submit partnership request'
              )}
            </motion.button>
            <AnimatePresence mode="wait">
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`p-4 rounded-lg border ${
                    submitStatus.type === 'success'
                      ? 'bg-gold-400/10 text-gold-200 border-gold-500/30'
                      : 'bg-red-900/20 text-red-200 border-red-700/50'
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
