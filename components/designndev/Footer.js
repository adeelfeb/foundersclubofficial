'use client'

import Image from 'next/image'
import Link from 'next/link'
import { foundersClubImages } from '../../lib/foundersClubImages'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 text-gold-100/90 border-t border-forest-700 bg-footer-pattern relative">
      {/* Subtle texture from client site */}
      <div className="absolute inset-0 opacity-[0.035] bg-cover bg-center bg-repeat pointer-events-none" style={{ backgroundImage: `url(${foundersClubImages.texture})`, backgroundSize: 'auto' }} aria-hidden />
      <section className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <Link href="/" className="inline-flex items-center no-underline hover:opacity-90 transition-opacity">
                <Image
                  src={foundersClubImages.logo}
                  alt="Founders Club"
                  width={100}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
                <span className="font-heading text-xl md:text-2xl font-semibold text-gold-500 ml-2 hidden sm:inline">FOUNDERS CLUB</span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-10 md:gap-12">
              <div>
                <h4 className="font-semibold text-gold-400 text-sm tracking-wide mb-3">LINKS</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about-us" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">About Us</Link></li>
                  <li><Link href="/events" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Events</Link></li>
                  <li><Link href="/partnerships" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Partnerships</Link></li>
                  <li><Link href="/nominate" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Nominate</Link></li>
                  <li><Link href="/contact" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gold-400 text-sm tracking-wide mb-3">LEGAL</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy-policy" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Privacy Policy</Link></li>
                  <li><Link href="/privacy-policy" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Terms of Service</Link></li>
                  <li><Link href="/privacy-policy" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Cookies Settings</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gold-400 text-sm tracking-wide mb-3">SOCIALS</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Instagram</a></li>
                  <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">LinkedIn</a></li>
                  <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">X</a></li>
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
