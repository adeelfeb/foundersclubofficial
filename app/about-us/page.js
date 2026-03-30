import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
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
      <Navbar />
      <PageHero
        title="About us"
        subtitle="Quality legal support, clear guidance, and experienced professionals at Sahai Law."
        imageFilename={PAGE_HERO_IMAGES.aboutUs}
        imageAlt="Sahai Law — about us"
        priority
      />
      <section className="relative z-10 py-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gold-100/90 text-base md:text-lg leading-relaxed space-y-6 font-subheading">
            <p>
              Sahai Law is built on a simple idea: everyone deserves straightforward, affordable access to legal help.
              We start with a free, no-obligation case review so you can understand your rights and options before you
              commit to anything.
            </p>
            <p>
              Our team is here to listen, explain your choices in plain language, and guide you with practical advice
              tailored to your situation—whether you are planning ahead, responding to a dispute, or navigating a
              complex process.
            </p>
            <p>
              Getting reliable advice early can protect what matters most. Reach out to book a confidential consultation
              and take the next step with confidence.
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
