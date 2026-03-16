import Head from 'next/head'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'
import Services from '../components/designndev/Services'
import TextureOverlay from '../components/designndev/TextureOverlay'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Founders Club</title>
        <meta name="description" content="Explore how we support founders and entrepreneurs. Practice areas and services from The Founders Club." />
        <meta name="keywords" content="Founders Club, services, practice areas, entrepreneurship" />
      </Head>
      <div className="min-h-screen bg-forest-900 bg-gradient-forest-textured bg-forest-textured-size bg-forest-textured-rep relative">
        <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
        <Navbar />
        <main className="relative z-10 pb-20">
          <Services />
        </main>
        <Footer />
      </div>
    </>
  )
}












