import Navbar from '../../components/designndev/Navbar'
import PracticeAreasSection from '../../components/designndev/PracticeAreasSection'
import Footer from '../../components/designndev/Footer'
import PageHero, { PAGE_HERO_IMAGES } from '../../components/designndev/PageHero'

export const metadata = {
  title: 'Practice Areas | Founders Club',
  description: 'Explore our practice areas and how we support founders and entrepreneurs.',
  keywords: 'Founders Club, practice areas, legal, entrepreneurship',
}

export default function PracticeAreasPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        title="Practice areas"
        subtitle="Explore how we support you across immigration, corporate law, family law, and more."
        imageFilename={PAGE_HERO_IMAGES.services}
        imageAlt="Our legal practice areas"
        priority
      />
      <div className="w-full max-w-[420px] sm:max-w-none mx-auto sm:mx-0">
        <PracticeAreasSection />
      </div>
      <Footer />
    </main>
  )
}
