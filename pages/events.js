import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'
import { foundersClubImages } from '../lib/foundersClubImages'

const stats = [
  { value: '150+', label: 'Member-only events annually' },
  { value: '10,000+', label: 'Total attendees across all experiences' },
  { value: 'Worldwide', label: 'Rooted in the U.S. and Canada, our members gather from around the world through high-impact chapters in New York, Miami, Los Angeles, Toronto, and beyond.' },
]

const eventTypes = [
  {
    title: 'Founders Forum',
    description: 'Immersive weekend retreats in inspiring locations such as beach houses and mountain cabins, combining strategy sessions, shared meals, memorable adventures, and transformational Men\'s and Women\'s retreats like the Muskoka experience and the NYC Female Founder weekend.',
  },
  {
    title: 'Masterminds',
    description: 'Private, invite-only dinners hosted in exclusive venues for 20 to 50 founders. These gatherings foster meaningful conversation and connections that extend far beyond the table.',
  },
  {
    title: 'Ongoing Local Meetups',
    description: 'Private, invite-only dinners hosted in exclusive venues for 20 to 50 founders. These gatherings foster meaningful conversation and connections that extend far beyond the table.',
  },
  {
    title: 'Founder Getaways',
    description: 'Immersive weekend retreats in inspiring locations such as beach houses and mountain cabins, combining strategy sessions, shared meals, memorable adventures, and transformational Men\'s and Women\'s retreats like the Muskoka experience and the NYC Female Founder weekend.',
  },
  {
    title: "Men's Growth Workshops",
    description: "Structured environments for men committed to brotherhood, clarity, accountability, and long-term growth.",
  },
  {
    title: "Women's Growth Workshops",
    description: "Small-group sessions where ambitious women connect, support one another, and grow in all areas of life.",
  },
]

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Events | Founders Club</title>
        <meta name="description" content="The Founders Club curates a calendar of cornerstone experiences: flagship gatherings, intimate workshops, masterminds, and retreats." />
        <meta name="keywords" content="Founders Club, events, retreats, masterminds, founders forum" />
      </Head>
      <div className="relative min-h-screen">
        <Navbar />
        {/* Hero section with full-bleed background */}
        <section className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${foundersClubImages.ctaBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-forest-950/60" aria-hidden />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6 normal-case">
              Events
            </h1>
            <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed font-subheading">
              Each year, The Founders Club curates a calendar of cornerstone experiences designed to build leaders, deepen relationships, and renew perspective.
            </p>
            <Link href="/become-a-member" className="btn-fc-primary">
              Apply for Membership
            </Link>
          </div>
        </section>
        <main className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold-100/80 text-center max-w-2xl mx-auto mb-12 pt-8">
              With hundreds of experiences hosted year-round, members have unlimited opportunities to connect, collaborate, and build lifelong friendships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="font-sans text-4xl font-semibold text-gold-500 mb-2">150+</div>
                <div className="text-gold-100/80 text-sm">Member-only events annually</div>
              </div>
              <div className="text-center">
                <div className="font-sans text-4xl font-semibold text-gold-500 mb-2">10,000+</div>
                <div className="text-gold-100/80 text-sm">Total attendees across all experiences</div>
              </div>
              <div className="text-center">
                <div className="font-subheading text-xl font-semibold text-gold-500 mb-2">Worldwide</div>
                <div className="text-gold-100/80 text-sm">Rooted in the U.S. and Canada, our members gather from around the world through high-impact chapters in New York, Miami, Los Angeles, Toronto, and beyond.</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {eventTypes.map((event) => (
                <div key={event.title} className="bg-forest-700/50 border border-forest-600 rounded-xl p-6">
                  <h3 className="font-subheading text-xl font-semibold text-gold-300 mb-3">{event.title}</h3>
                  <p className="text-gold-100/80 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>

            <p className="text-gold-100/90 text-center text-lg mb-8">
              What began as a small dinner series has grown into a nationwide ecosystem hosting more than 150 curated gatherings each year.
            </p>
            <p className="text-gold-100/80 text-center mb-12">
              Our members come together in person across the country, day in and day out, actively working and supporting each other.
            </p>

            <section className="text-center pt-8 border-t border-forest-600/50">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gold-500 mb-4">
                Apply to Join The Club
              </h2>
              <p className="text-gold-100/90 mb-6 max-w-xl mx-auto">
                The Founders Club is not for everyone. But for the right founder, it can change everything.
              </p>
              <Link href="/become-a-member" className="btn-fc-primary">
                Become a Member
              </Link>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
