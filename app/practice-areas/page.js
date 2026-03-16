import Navbar from '../../components/designndev/Navbar'
import PracticeAreasSection from '../../components/designndev/PracticeAreasSection'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'

export const metadata = {
  title: 'Practice Areas | Founders Club',
  description: 'Explore our practice areas and how we support founders and entrepreneurs.',
  keywords: 'Founders Club, practice areas, legal, entrepreneurship',
}

export default function PracticeAreasPage() {
  return (
    <main className="relative min-h-screen bg-forest-900 bg-gradient-forest-textured bg-forest-textured-size bg-forest-textured-rep">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <div className="w-full max-w-[420px] sm:max-w-none mx-auto sm:mx-0 pt-24">
        <PracticeAreasSection />
      </div>
      <Footer />
    </main>
  )
}
