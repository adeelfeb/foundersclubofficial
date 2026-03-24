import Navbar from '../components/designndev/Navbar'
import FoundersClubHero from '../components/designndev/FoundersClubHero'
import PracticeAreasSection from '../components/designndev/PracticeAreasSection'
import IconBoxSection from '../components/designndev/IconBoxSection'
import PartnershipOpportunities from '../components/designndev/PartnershipOpportunities'
import VettedForImpact from '../components/designndev/VettedForImpact'
import TestimonialsSection from '../components/designndev/TestimonialsSection'
import PartnershipFormSection from '../components/designndev/PartnershipFormSection'
import FaqSection from '../components/designndev/FaqSection'
import Footer from '../components/designndev/Footer'
import TextureOverlay from '../components/designndev/TextureOverlay'

export const metadata = {
  title: 'Founders Club | Private Network for 7-9 Figure Entrepreneurs',
  description: 'The Modern Day Members Only Community. Partnership opportunities and direct access to an exclusive network of Forbes-listed founders and over $20B in assets under management.',
  keywords: 'founders club, entrepreneurs, private network, membership, mastermind, partnership',
  openGraph: {
    title: 'Founders Club | Private Network for 7-9 Figure Entrepreneurs',
    description: 'The Modern Day Members Only Community. For Founders and Entrepreneurs focused on Mind, Body, and Business.',
    url: 'https://foundersclubofficial.com',
    siteName: 'Founders Club',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay />
      <Navbar />
      <div className="relative w-full mx-auto">
        <FoundersClubHero />
        <IconBoxSection />
        <PracticeAreasSection />
        <VettedForImpact />
        <PartnershipOpportunities />
        <TestimonialsSection />
        <FaqSection layout="section" />
        <PartnershipFormSection />
      </div>
      <Footer />
    </main>
  )
}
