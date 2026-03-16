'use client'

import Image from 'next/image'
import Link from 'next/link'
import { foundersClubImages } from '../../lib/foundersClubImages'

const services = [
  { label: 'Wills & Estates', href: '#practice-areas' },
  { label: 'Corporate Law', href: '#practice-areas' },
  { label: 'Real Estate Law', href: '#practice-areas' },
  { label: 'Immigration Law', href: '#practice-areas' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-950 text-gold-100/90 border-t border-forest-800">
      <section className="py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10">
            {/* Logo */}
            <div className="col-span-2 sm:col-span-1 order-first">
              <Link href="/" className="inline-flex items-center no-underline hover:opacity-90 transition-opacity">
                <Image
                  src={foundersClubImages.logo}
                  alt="Founders Club"
                  width={140}
                  height={46}
                  className="h-9 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Menu */}
            <div>
              <h4 className="font-subheading font-medium text-gold-200 text-xs tracking-wide uppercase mb-3">Menu</h4>
              <ul className="space-y-2 text-sm font-subheading">
                <li><Link href="/about-us" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">About Us</Link></li>
                <li><Link href="/our-team" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Team</Link></li>
                <li><Link href="/contact" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Contact Us</Link></li>
                <li><Link href="/partnerships" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">Partnerships</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-subheading font-medium text-gold-200 text-xs tracking-wide uppercase mb-3">Services</h4>
              <ul className="space-y-2 text-sm font-subheading">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in touch */}
            <div>
              <h4 className="font-subheading font-medium text-gold-200 text-xs tracking-wide uppercase mb-3">Get in touch</h4>
              <ul className="space-y-2 text-sm font-subheading">
                <li>
                  <a href="mailto:info@sahailaw.ca" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">
                    info@sahailaw.ca
                  </a>
                </li>
                <li>
                  <a href="tel:+14374515551" className="text-gold-100/80 hover:text-gold-300 transition-colors no-underline">
                    +1 437-451-5551
                  </a>
                </li>
                <li className="text-gold-100/70">Ontario, Canada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 md:py-4 border-t border-forest-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gold-200/60 text-xs font-subheading">
            © {currentYear} Founders Club. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  )
}
