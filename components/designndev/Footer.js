'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 text-gold-100/90 border-t border-forest-700 bg-footer-pattern bg-repeat">
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <Link
                href="/"
                className="font-serif text-xl md:text-2xl font-semibold text-gold-400 no-underline hover:text-gold-300 transition-colors"
              >
                FOUNDERS CLUB
              </Link>
            </div>
            <div className="flex flex-wrap gap-10 md:gap-12">
              <div>
                <h4 className="font-semibold text-gold-400 text-sm tracking-wide mb-3">LINKS</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Home</Link></li>
                  <li><Link href="/information" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">About & Team</Link></li>
                  <li><Link href="/blogs" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Membership</Link></li>
                  <li><Link href="/contact" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gold-400 text-sm tracking-wide mb-3">LEGAL</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy-policy" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Privacy Policy</Link></li>
                  <li><Link href="/information" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gold-400 text-sm tracking-wide mb-3">SOCIALS</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">LinkedIn</a></li>
                  <li><a href="#" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Twitter</a></li>
                  <li><a href="#" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 border-t border-forest-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gold-100/60 text-sm">
            © {currentYear} Founders Club. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  )
}
