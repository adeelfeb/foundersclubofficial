import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import PageHero, { PAGE_HERO_IMAGES } from '../../components/designndev/PageHero'

export const metadata = {
  title: 'About Us | Sahai Law',
  description:
    'At Sahai Law, quality legal support should be accessible to everyone. Free, no-obligation case review, clear guidance, and experienced legal professionals.',
  keywords: 'Sahai Law, legal consultation, case review, Ontario legal services',
}

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <PageHero
        title="About us"
        subtitle="Quality legal support, clear guidance, and experienced professionals at Sahai Law."
        imageFilename={PAGE_HERO_IMAGES.aboutUs}
        imageAlt="Sahai Law — about us"
        priority
      />
      <section className="relative py-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="pt-2">
              <Link href="/contact" className="btn-fc-primary inline-block">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
