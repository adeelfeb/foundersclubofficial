'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'
import { FAQ_ITEMS } from '../../lib/faqContent'

function FaqAccordion({ idPrefix, footerClassName = '', white = false }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const card =
    white
      ? 'border border-neutral-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
      : 'border border-gold-200/55 bg-gold-50/95 shadow-[0_1px_2px_rgba(32,60,45,0.06)]'
  const btnRing = white
    ? 'focus-visible:ring-2 focus-visible:ring-forest-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
    : 'focus-visible:ring-2 focus-visible:ring-gold-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gold-50'
  const iconWrap = white
    ? 'text-forest-800 bg-neutral-100 border border-neutral-200'
    : 'text-gold-600 bg-gold-500/15 border border-gold-500/25'
  const answerBorder = white ? 'border-neutral-200' : 'border-gold-200/60'
  const answerText = white ? 'text-neutral-700' : 'text-forest-800/95'
  const footerMuted = white ? 'text-neutral-600' : 'text-gold-200/80'
  const footerLink = white ? 'text-forest-800 underline hover:text-forest-950' : 'text-gold-400 hover:text-gold-300'

  return (
    <>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className={`${card} rounded-none px-4 py-4 md:px-5 md:py-5`}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className={`w-full flex items-center justify-between gap-4 text-left no-underline focus:outline-none ${btnRing} rounded-none`}
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-answer-${index}`}
                id={`${idPrefix}-question-${index}`}
              >
                <span className="font-subheading text-lg md:text-xl font-medium text-forest-950 pr-4">
                  {item.question}
                </span>
                <span className={`shrink-0 w-8 h-8 flex items-center justify-center transition-colors rounded-none ${iconWrap}`}>
                  {isOpen ? (
                    <Minus className="w-4 h-4" strokeWidth={2.5} aria-hidden />
                  ) : (
                    <Plus className="w-4 h-4" strokeWidth={2.5} aria-hidden />
                  )}
                </span>
              </button>
              <div
                id={`${idPrefix}-answer-${index}`}
                role="region"
                aria-labelledby={`${idPrefix}-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className={`pt-3 pb-0 ${answerText} leading-relaxed font-subheading border-t ${answerBorder} mt-3`}>
                  {item.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <p className={`mt-12 font-subheading ${footerMuted} ${footerClassName}`}>
        Can&apos;t find your answer?{' '}
        <Link href="/contact" className={`${footerLink} underline`}>
          Get in touch
        </Link>
        .
      </p>
    </>
  )
}

/**
 * @param {{ layout?: 'page' | 'section', skipPageHero?: boolean }} props
 * — `page`: full FAQ page (hero + list). — `section`: home / inline block with h2.
 * — `skipPageHero`: when layout is `page`, render only the accordion (use with external PageHero).
 */
export default function FaqSection({ layout = 'page', skipPageHero = false }) {
  const idPrefix = layout === 'section' ? 'home-faq' : 'faq'

  if (layout === 'section') {
    return (
      <section
        className="relative py-16 md:py-24 overflow-hidden bg-white text-forest-950"
        aria-labelledby="home-faq-heading"
      >
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="home-faq-heading"
            className="section-heading font-heading text-3xl md:text-4xl font-semibold text-forest-950 mb-4 text-center normal-case"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading text-center mb-10 md:mb-12">
            Quick answers to common questions about our services and how we work.
          </p>
          <FaqAccordion idPrefix={idPrefix} footerClassName="text-center" white />
        </div>
      </section>
    )
  }

  if (skipPageHero) {
    return (
      <div className="pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <FaqAccordion idPrefix={idPrefix} white />
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6 normal-case">
            Frequently Asked Questions
          </h1>
          <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
            Quick answers to common questions about our services and how we work.
          </p>
        </div>
      </section>
      <div className="pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <FaqAccordion idPrefix={idPrefix} white />
        </div>
      </div>
    </>
  )
}
