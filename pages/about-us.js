import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'
import { foundersClubImages } from '../lib/foundersClubImages'

const sections = [
  {
    id: '01',
    title: 'Our Story',
    image: foundersClubImages.aboutStory,
    body: `When you've built something from scratch, you learn to live with chaos. You build, you sell, you hire, you fire, and somehow you keep moving.

A few years ago, my buddy Aaron and I were in the middle of that storm. He had just exited Hush Blankets for $48 million. I was still deep in the trenches scaling CROSSNET.

On paper, we were both "living the dream." But behind the scenes, something didn't feel right. We'd go to conferences and masterminds hoping to find rooms full of people who got it: founders who were actually "in the arena." But every room felt the same.

Too many people selling something, inflated egos, and worst of all, little to no real connection.

It gives you that feeling like you're surrounded by hundreds of people but still building alone.

That's where we were.`,
  },
  {
    id: '02',
    title: 'The Problem',
    image: foundersClubImages.aboutProblem,
    body: `The truth is entrepreneurship is lonely.

Once you pass $1M, $5M, $10M in revenue, you outgrow most "groups" out there. You stop getting advice that's useful and the truth that matters most comes few and far between.

You start making big decisions that cost you time, money, and sometimes your sanity.

We realized there wasn't a real home for people like us. Aaron and I wanted no part of another "network" or pay-to-pitch event.

We decided it was time to build exactly what we were looking for: a place where founders could show up as themselves, raw and uncut.`,
  },
  {
    id: '03',
    title: 'The Spark',
    image: foundersClubImages.aboutSpark,
    body: `So one night over dinner, we decided to build the thing we always wished existed.

Our vision was the best, highest-quality founders in the world gathered together helping each other build better companies and more fulfilled lives.

True alignment in the areas of mind, body, and business. We started small with a few dinners between friends.

There was no real marketing plan or agenda.

But we achieved what we set out to do: bringing founders together to swap stories, trade ideas, and call each other higher.

Those dinners changed everything. They reminded us that business is supposed to feel like this: alive, collaborative, fun.

The Club was not and will never be about competing for attention. It's about connecting with people who actually understand the journey.

And from there, The Founders Club was born.`,
  },
  {
    id: '04',
    title: 'The Growth',
    image: foundersClubImages.aboutGrowth,
    body: `What began as a handful of dinners has grown into a nationwide ecosystem: more than 1,000 founders across the country and even some around the world.

Today, The Founders Club hosts over 150 curated experiences every year, including private dinners, local masterminds, weekend getaways, wellness activations, and our signature retreats.

Twice a year, members gather at Founders Forum, our flagship summit that brings together some of the brightest minds in entrepreneurship.

Each winter, we host our Annual Retreat in Mexico: a week designed for strategy, connection, and renewal. But without the quality of the people inside, there would be no events to talk about in the first place.

Our members include founders who've built $100M brands, first-time entrepreneurs making their first $50K months, and everyone in between.

Different industries, same values: integrity, curiosity, and an obsession with growth.

And somehow, that mix works.

Connections are made, and lifelong friendships form.

It's everything we hoped for and more.`,
  },
  {
    id: '05',
    title: 'The Mission',
    image: foundersClubImages.aboutMission,
    body: `We built The Club because, like so many others, we were tired of doing it alone.

This community exists to help founders win in mind, body, and business.

This is a place where you can ask hard questions, get honest answers, and sit at the table with people who've walked the same path.

We've seen what happens when founders are surrounded by the right people:

They grow faster. They lead better. They find peace in the process.

The Founders Club is built on one simple belief: when founders grow, everything around them grows too.

A rising tide lifts all boats.`,
  },
]

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>About Us | Founders Club</title>
        <meta name="description" content="Our vision is to connect 2,500+ members across every major city in North America and Canada: a trusted circle of builders who share resources, open doors, and raise the bar for entrepreneurship." />
        <meta name="keywords" content="Founders Club, about us, founders, entrepreneurship, community" />
      </Head>
      <div className="min-h-screen bg-forest-800">
        <Navbar />
        {/* Hero with full-bleed background */}
        <section className="relative min-h-[45vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
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
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6">
              About Us
            </h1>
            <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Our vision is to connect 2,500+ members across every major city in North America and Canada: a trusted circle of builders who share resources, open doors, and raise the bar for what entrepreneurship can look like.
            </p>
            <Link href="/become-a-member" className="btn-fc-primary">
              Become a Member
            </Link>
          </div>
        </section>
        <main className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
              {sections.map((section, index) => (
                <section key={section.id} className="border-t border-forest-600/50 pt-12">
                  <div className={`grid grid-cols-1 gap-8 ${index % 2 === 1 ? 'md:grid-cols-2' : 'md:grid-cols-2'} md:gap-10 items-center`}>
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <span className="text-gold-500/80 font-subheading text-lg">{section.id}</span>
                      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gold-300 mt-2 mb-6">
                        {section.title}
                      </h2>
                      <div className="text-gold-100/90 leading-relaxed whitespace-pre-line">
                        {section.body}
                      </div>
                    </div>
                    {section.image && (
                      <div className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-forest-700 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
                </section>
              ))}
            <section className="mt-20 pt-12 border-t border-forest-600/50">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gold-500 mb-4">
                Where We&apos;re Headed
              </h2>
              <p className="text-gold-100/90 text-lg leading-relaxed mb-8">
                Our vision is to connect 2,500+ members across every major city in North America: a trusted circle of builders who share resources, open doors, and raise the bar for what entrepreneurship can look like.
              </p>
              <p className="text-gold-100/80 leading-relaxed mb-10">
                From startup to exit, from solo founder to seasoned operator, this is where you belong. You&apos;ve done the work. Now it&apos;s time to grow with people who get it.
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gold-500 mb-4">
                Apply to Join The Club
              </h2>
              <p className="text-gold-100/90 mb-6">
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
