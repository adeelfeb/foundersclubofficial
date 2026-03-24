import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import FaqSection from '../../components/designndev/FaqSection'
import PageHero, { PAGE_HERO_IMAGES } from '../../components/designndev/PageHero'

export default function FAQPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <PageHero
        title="Frequently asked questions"
        subtitle="Quick answers about our services, consultations, and how we work."
        imageFilename={PAGE_HERO_IMAGES.faq}
        imageAlt="Frequently asked questions"
        priority
      />
      <FaqSection layout="page" skipPageHero />
      <Footer />
    </main>
  )
}
