import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'
import TestimonialsSection from '../components/designndev/TestimonialsSection'
import { foundersClubImages } from '../lib/foundersClubImages'

const stats = [
  { value: '0+', label: 'Members Nationwide' },
  { value: '0+', label: 'Annual Local & Virtual Events' },
  { value: '$0B+', label: 'Combined Annual Revenue' },
  { value: '0+', label: 'Active City Chapters' },
]

const accessItems = [
  'Masterminds',
  'Annual Retreat',
  '150+ in-person events each year',
  'Founders Forum (Flagship Summit)',
  'Private members Slack',
  'Founders Club Member App',
  "Men's and Women's Retreats",
  'Travel: $100k+ in value',
  '...and so much more.',
]

const fitCriteria = [
  '$1,000,000 or more in annual revenue or capital raised',
  'A successful exit or multiple ventures founded',
  'A proven track record of leadership, execution, and a growth mindset',
]

export default function BecomeAMemberPage() {
  return (
    <>
      <Head>
        <title>Become a Member | Founders Club</title>
        <meta name="description" content="Join The Founders Club: 1,000+ peers across North America and Canada, over $20 billion in combined revenue. Apply for membership." />
        <meta name="keywords" content="Founders Club, become a member, apply, membership" />
      </Head>
      <div className="relative min-h-screen">
        <Navbar />
        {/* Hero with full-bleed background */}
        <section className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${foundersClubImages.membersGroup})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-forest-950/65" aria-hidden />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6 normal-case">
              Become a Member
            </h1>
            <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed font-subheading">
              Members gain access to a network of 1,000+ peers across North America and Canada, representing over $20 billion in combined revenue, who have built, scaled, and exited global brands.
            </p>
            <Link href="/signup" className="btn-fc-primary">
              Apply Now
            </Link>
          </div>
        </section>
        <main className="pb-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

            <section className="mb-20">
              <h2 className="font-heading text-3xl font-semibold text-gold-500 text-center mb-8">
                Why Join The Founders Club?
              </h2>
              <h3 className="font-subheading text-2xl font-semibold text-gold-300 text-center mb-6">
                A Private Network For Proven Entrepreneurs
              </h3>
              <p className="text-gold-100/90 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
                The Founders Club is a private network for proven entrepreneurs looking for more than surface-level connection.
              </p>
              <p className="text-gold-100/80 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
                Inside, you&apos;ll find a space where collaboration replaces competition and relationships grow into opportunity.
              </p>
              <p className="text-gold-100/80 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
                This is a community of founders who care deeply about their craft, their health, and the people beside them. Here, personal growth fuels collective progress.
              </p>
              <div className="text-center mb-12">
                <Link href="/signup" className="btn-fc-primary">
                  Apply for Membership
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-forest-700/50 border border-forest-600 rounded-xl p-6 text-center">
                  <h4 className="font-subheading text-xl font-semibold text-gold-400 mb-3">Mind</h4>
                  <p className="text-gold-100/80 text-sm leading-relaxed">
                    A space for founders to think clearly, share openly, and learn the real lessons behind success—not just the wins, but the losses too. Growth here begins with the right perspective.
                  </p>
                </div>
                <div className="bg-forest-700/50 border border-forest-600 rounded-xl p-6 text-center">
                  <h4 className="font-subheading text-xl font-semibold text-gold-400 mb-3">Body</h4>
                  <p className="text-gold-100/80 text-sm leading-relaxed">
                    Health is the ultimate leverage. Members challenge one another to train, recover, and live with discipline because how you move through life reflects how you lead.
                  </p>
                </div>
                <div className="bg-forest-700/50 border border-forest-600 rounded-xl p-6 text-center">
                  <h4 className="font-subheading text-xl font-semibold text-gold-400 mb-3">Business</h4>
                  <p className="text-gold-100/80 text-sm leading-relaxed">
                    From scaling strategies to shared deal flow, members exchange playbooks, capital, and opportunities that drive momentum in real time.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="font-heading text-2xl font-semibold text-gold-400 text-center mb-8">
                Member Insights & Impact
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-sans text-3xl font-semibold text-gold-400">{s.value}</div>
                    <div className="text-gold-100/80 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>

              <h2 className="font-heading text-2xl font-semibold text-gold-400 text-center mb-6">
                Membership Overview
              </h2>
              <p className="text-gold-200/90 font-semibold text-center mb-4">Access to:</p>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-gold-100/80">
                {accessItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="text-center mb-16">
                <Link href="/signup" className="btn-fc-primary">
                  Apply for Membership
                </Link>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="font-heading text-2xl font-semibold text-gold-400 text-center mb-6">
                Am I a Fit?
              </h2>
              <p className="text-gold-100/90 text-center mb-6 max-w-2xl mx-auto">
                Members must meet one or more of the following:
              </p>
              <ul className="list-disc list-inside text-gold-100/80 max-w-xl mx-auto space-y-2 mb-8">
                {fitCriteria.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="text-gold-100/80 text-center max-w-2xl mx-auto mb-10">
                The Club is built for founders who are already operating at a high level and want to connect with others doing the same. If you&apos;ve built something you&apos;re proud of and you&apos;re looking for people who truly get it, you&apos;ll feel right at home.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="font-heading text-3xl font-semibold text-gold-500 text-center mb-8">
                Ready to Join The Founders Club?
              </h2>
            </section>
          </div>

          <section className="py-16 bg-forest-700/30">
            <TestimonialsSection />
          </section>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <Link href="/signup" className="btn-fc-primary">
              Apply for Membership
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
