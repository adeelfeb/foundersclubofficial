'use client'

import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import FaqSection from '../../components/designndev/FaqSection'

export default function FAQPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <FaqSection layout="page" />
      <Footer />
    </main>
  )
}
