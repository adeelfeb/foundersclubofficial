import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import PartnershipFormSection from '../../components/designndev/PartnershipFormSection'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { foundersClubImages } from '../../lib/foundersClubImages'

const opportunities = [
  { title: 'Events, Retreats & Conferences', description: 'We will host 150+ events across our core markets in 2026. Get your brand involved with our masterminds, large style conferences, multi-day retreats, intimate curated dinners, and much more. Go the extra mile and create custom experiences such as VIP sporting event suites, private events, or fireside chats.' },
  { title: 'Weekly Speaker Series', description: 'The Founders Club hosts a weekly virtual speaker series featuring high-profile entrepreneurs, tactical conversations on business & personal life, and dedicated topic based workshops. Our live online hour sessions typically see an average of 350+ members attending and is a perfect opportunity for you to educate and get your offer in front of our members.' },
  { title: 'Preferred Partner Status', description: "Our members are loyal to the core. Becoming a Preferred Partner of The Founders Club means your company's services or products are officially recommended to our members. Preferred Partners receive continuous exposure through our community app placement, email/sms, private newsletter, in-person events, and our digital community." },
  { title: 'Media Sponsorship', description: "Before The Founders Club was a community, it was a digital media business connecting hundreds of thousands of founders from all different industries. With tens of millions of monthly impressions, get in front of decision making entrepreneurs through our newsletter, podcast, live webinars, social, and more." },
]

const philosophyPoints = [
  'Member value & alignment',
  'Long-term ecosystem impact',
  'Category leadership & reputation',
]

export const metadata = {
  title: 'Partnerships | Founders Club',
  description: 'Partner with The Founders Club for direct access to 1,200+ founders and over $20B in revenue. Events, retreats, preferred partner status, and media sponsorship.',
  keywords: 'Founders Club, partnerships, sponsorship, events, preferred partner',
}

export default function PartnershipsPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <section className="relative min-h-[55vh] flex items-center justify-center pt-20 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${foundersClubImages.heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-forest-950/65" aria-hidden />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6 normal-case">
            Our Founders Run The World&apos;s Best Brands
          </h1>
          <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed font-subheading">
            Partnering with The Founders Club gives your brand direct access to an exclusive network of 1,200+ founders and over $20B in revenue, who are building and scaling companies across tech, e-commerce, finance, and beyond.
          </p>
          <a href="#partnership-form" className="btn-fc-primary">
            Become a Partner
          </a>
        </div>
      </section>
      <div className="pb-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <h2 className="font-heading text-3xl font-semibold text-gold-500 text-center mb-12">
            Partnership Opportunities
          </h2>
          <div className="space-y-12 mb-20">
            {opportunities.map((opp) => (
              <div key={opp.title} className="bg-forest-700/50 border border-forest-600 rounded-xl p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-gold-300 mb-4">{opp.title}</h3>
                <p className="text-gold-100/80 leading-relaxed font-subheading">{opp.description}</p>
              </div>
            ))}
          </div>
          <section className="mb-20">
            <h2 className="font-heading text-3xl font-semibold text-gold-500 text-center mb-6">
              Partnership Philosophy
            </h2>
            <p className="text-gold-100/90 text-center max-w-3xl mx-auto mb-8 leading-relaxed font-subheading">
              The Founders Club is a members-only community, and we treat our partnerships with the same intention. We collaborate with a limited number of brands whose missions, products, and values align with what our founders genuinely care about: access, wellbeing, innovation, and growth.
            </p>
            <p className="text-gold-100/80 text-center max-w-2xl mx-auto mb-10 font-subheading">
              We are building the world&apos;s fastest growing entrepreneurship community and partner only with brands meant to stand the test of time.
            </p>
            <p className="text-gold-200/90 font-semibold text-center mb-6 font-subheading">Every potential partner is evaluated for:</p>
            <ul className="flex flex-wrap justify-center gap-4 font-subheading">
              {philosophyPoints.map((point) => (
                <li key={point} className="text-gold-100/80">{point}</li>
              ))}
            </ul>
          </section>
        </div>
        <div id="partnership-form">
          <PartnershipFormSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}
