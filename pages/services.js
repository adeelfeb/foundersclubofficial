import Head from 'next/head'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'
import Services from '../components/designndev/Services'
export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Founders Club</title>
        <meta name="description" content="Explore how we support founders and entrepreneurs. Practice areas and services from The Founders Club." />
        <meta name="keywords" content="Founders Club, services, practice areas, entrepreneurship" />
      </Head>
      <div className="min-h-screen relative">
        <Navbar />
        <main className="relative z-10 pb-20">
          <Services />
        </main>
        <Footer />
      </div>
    </>
  )
}












