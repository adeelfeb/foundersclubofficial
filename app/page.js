import Navbar from '../components/designndev/Navbar'
import FoundersClubHero from '../components/designndev/FoundersClubHero'
import PracticeAreasSection from '../components/designndev/PracticeAreasSection'
import PartnershipOpportunities from '../components/designndev/PartnershipOpportunities'
import VettedForImpact from '../components/designndev/VettedForImpact'
import TestimonialsSection from '../components/designndev/TestimonialsSection'
import PartnershipFormSection from '../components/designndev/PartnershipFormSection'
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
    <main className="relative min-h-screen bg-forest-900 bg-gradient-forest-textured bg-forest-textured-size bg-forest-textured-rep">
      <TextureOverlay />
      <Navbar />
      <div className="relative w-full mx-auto">
        <FoundersClubHero />
        <PracticeAreasSection />
        <VettedForImpact />
        <PartnershipOpportunities />
        <TestimonialsSection />
        <PartnershipFormSection />
      </div>
      <Footer />
    </main>
  )
}
