import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import FreeConsultationSection from '../../components/designndev/FreeConsultationSection'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { foundersClubImages } from '../../lib/foundersClubImages'

export const metadata = {
  title: 'Contact Us | Founders Club',
  description: 'Get in touch with The Founders Club. Building something meaningful? Connect with 1000+ serious founders and operators who understand your journey.',
  keywords: 'Founders Club, contact, get in touch',
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-forest-900 bg-gradient-forest-textured bg-forest-textured-size bg-forest-textured-rep">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <section className="relative min-h-[45vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${foundersClubImages.aboutCta})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-forest-950/60" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6 normal-case">
            Let&apos;s Chat
          </h1>
          <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
            Building something meaningful? Add your details below and we&apos;ll get back to you with next steps and a time to talk.
          </p>
        </div>
      </section>
      <div className="relative z-10 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <FreeConsultationSection animated={false} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
