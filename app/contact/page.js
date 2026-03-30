import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import FreeConsultationSection from '../../components/designndev/FreeConsultationSection'
import PageHero, { PAGE_HERO_IMAGES } from '../../components/designndev/PageHero'

export const metadata = {
  title: 'Contact Us | Founders Club',
  description: 'Get in touch with The Founders Club. Building something meaningful? Connect with 1000+ serious founders and operators who understand your journey.',
  keywords: 'Founders Club, contact, get in touch',
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        title="Contact us"
        subtitle="Add your details below and we'll get back to you with next steps and a time to talk."
        imageFilename={PAGE_HERO_IMAGES.contact}
        imageAlt="Contact Sahai Law"
        priority
      />
      <div className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <FreeConsultationSection animated={false} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
