import Head from 'next/head'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'
import LetsChatForm from '../components/designndev/LetsChatForm'
import { foundersClubImages } from '../lib/foundersClubImages'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Founders Club</title>
        <meta name="description" content="Get in touch with The Founders Club. Building something meaningful? Connect with 1000+ serious founders and operators who understand your journey." />
        <meta name="keywords" content="Founders Club, contact, get in touch" />
      </Head>
      <div className="min-h-screen bg-forest-800 relative">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-center opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: `url(${foundersClubImages.texture})`, backgroundSize: 'auto' }}
          aria-hidden
        />
        <Navbar />
        <main className="relative z-10 pt-24 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6 text-center">
              Let&apos;s Chat
            </h1>
            <p className="text-gold-100/90 text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              If you&apos;re building something meaningful and want to do it alongside 1000+ serious founders and operators who understand your journey, congratulations. You&apos;ve finally found the room you&apos;ve been looking for.
            </p>
            <div className="bg-forest-700/60 border border-forest-600 rounded-2xl p-6 md:p-8 fc-card">
              <LetsChatForm />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
