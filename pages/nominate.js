import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'
import TextureOverlay from '../components/designndev/TextureOverlay'

const benefits = [
  {
    count: 2,
    title: 'Accepted Nominees',
    reward: 'Free Retreat Ticket',
    description: 'Score a fully comped ticket (up to $4,000 value) to an upcoming Founders Club retreat. Think high-conviction founders, unforgettable settings, and breakthroughs by the pool.',
  },
  {
    count: 4,
    title: 'Accepted Nominees',
    reward: 'The Billion Dollar Dinner',
    description: 'Every January in Miami. 10 seats. Off-the-record. One table. Over $1B in founder net worth. No fluff. No press. No filters. Just real depth, shared among the rare few.',
  },
]

export default function NominatePage() {
  return (
    <>
      <Head>
        <title>Nominate | Founders Club</title>
        <meta name="description" content="The Founders Club Nomination Program empowers you to shape the future of the club. Nominate up to five founders per year." />
        <meta name="keywords" content="Founders Club, nominate, referral, nomination program" />
      </Head>
      <div className="min-h-screen bg-forest-900 bg-gradient-forest-textured bg-forest-textured-size bg-forest-textured-rep relative">
        <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
        <Navbar />
        <main className="pt-20 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6 text-center normal-case">
              Founders Club Nomination Program
            </h1>
            <p className="text-gold-100/90 text-lg text-center max-w-2xl mx-auto mb-8 leading-relaxed font-subheading">
              We&apos;ve retired the referral program. Because this isn&apos;t about casual invites — it&apos;s about legacy. And legacy is built one extraordinary founder at a time.
            </p>
            <div className="text-center mb-16">
              <Link href="/become-a-member" className="btn-fc-primary">
                Nominate now
              </Link>
            </div>

            <p className="text-gold-200/90 font-subheading text-xl text-center mb-4">
              You don&apos;t just belong here. You help define what this is.
            </p>
            <p className="text-gold-100/90 text-center text-lg mb-12 max-w-2xl mx-auto">
              The Nomination Program empowers you to shape the future of the club. As a Founders Club member, you can nominate up to five founders per year. This isn&apos;t about scale — we already receive 200+ applications weekly and accept only five or six.
            </p>
            <p className="text-gold-100/80 text-center font-semibold mb-16">
              That&apos;s not hype. That&apos;s the standard.
            </p>

            <p className="text-gold-200/90 text-center text-lg mb-8">
              We Grow Slow. On Purpose.
            </p>
            <p className="text-gold-100/90 text-center mb-16 max-w-2xl mx-auto">
              With people who bring clarity, character, and the courage to build what actually matters.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-gold-400 text-center mb-8">
              Your Nomination Is a Vote
            </h2>
            <p className="text-gold-100/90 text-center mb-16 max-w-2xl mx-auto">
              Not just for a person — but for the future of this community. When you nominate, you&apos;re choosing who gets to walk this road with you. Who sharpens the circle. Who raises the bar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {benefits.map((b) => (
                <div key={b.count} className="bg-forest-700/60 border border-forest-600 rounded-xl p-6 md:p-8">
                  <div className="font-sans text-3xl font-semibold text-gold-400 mb-2">{b.count} {b.title}</div>
                  <div className="font-semibold text-gold-200 mb-3">{b.reward}</div>
                  <p className="text-gold-100/80 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>

            <section className="bg-forest-700/40 border border-forest-600 rounded-xl p-6 md:p-8 text-center">
              <h2 className="font-heading text-2xl font-semibold text-gold-400 mb-4">
                Submit a Nomination
              </h2>
              <p className="text-gold-100/90 mb-6">
                Visit: foundersclubofficial.com/pages/nominate
              </p>
              <p className="text-gold-100/80 text-sm mb-6">
                Or, have your nominee apply directly and select &quot;I was nominated,&quot; entering your name when prompted.
              </p>
              <Link href="/become-a-member" className="btn-fc-primary">
                Go to Application
              </Link>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
