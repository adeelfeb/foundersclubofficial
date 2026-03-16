'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { foundersClubImages } from '../../lib/foundersClubImages'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { question: 'What areas of law does Sahail Law cover?', answer: 'We offer legal services across wills and estates, corporate law, real estate, immigration, family law, and dispute resolution. Our team can advise on the right approach for your situation and refer you to specialists when needed.' },
  { question: 'How do I book a consultation?', answer: 'You can book a consultation by clicking the "Book consultation" button on our website, contacting us via the contact page, or reaching out on WhatsApp. We aim to respond within one business day and will arrange a time that works for you.' },
  { question: 'What should I bring to my first meeting?', answer: 'For your first meeting, bring any relevant documents (e.g. existing wills, contracts, or correspondence), a short summary of your situation, and a list of questions. We will guide you on anything else needed once we know your matter.' },
  { question: 'Do you offer fixed fees or only hourly billing?', answer: 'We offer both fixed fees and hourly billing depending on the type of matter. For straightforward work such as wills or certain corporate filings, we often quote a fixed fee. For more open-ended matters we can discuss hourly rates and estimates upfront.' },
  { question: 'Are consultations confidential?', answer: 'Yes. All communications with our firm are confidential and protected by solicitor–client privilege. We do not share your information with third parties without your consent, except where required by law.' },
  { question: 'Do you serve clients outside Ontario?', answer: 'Our physical office is in Ontario, and we are licensed to practise law in Ontario. For matters in other provinces or countries we can often work with local counsel or refer you to a trusted lawyer in that jurisdiction.' },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <main className="relative min-h-screen bg-forest-900 bg-gradient-forest-textured bg-forest-textured-size bg-forest-textured-rep">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <section className="relative min-h-[45vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${foundersClubImages.aboutCta})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-forest-950/60" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6 normal-case">
            Frequently Asked Questions
          </h1>
          <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
            Quick answers to common questions about our services and how we work.
          </p>
        </div>
      </section>
      <div className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="space-y-0">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 text-left no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="font-subheading text-lg md:text-xl font-medium text-gold-200 pr-4">
                      {item.question}
                    </span>
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center text-gold-500 bg-gold-500/10 transition-colors rounded-none">
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={2.5} aria-hidden />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} aria-hidden />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="pt-2 pb-2 text-gold-100/90 leading-relaxed font-subheading">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-12 text-gold-200/80 font-subheading">
            Can&apos;t find your answer?{' '}
            <Link href="/contact" className="text-gold-400 hover:text-gold-300 underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
