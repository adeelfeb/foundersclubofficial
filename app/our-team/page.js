import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import PageHero, { PAGE_HERO_IMAGES } from '../../components/designndev/PageHero'

const team = [
  { name: 'Sahail', role: 'Founder & Lead Counsel', bio: 'Focused on making legal services clear and accessible. Experienced in corporate, real estate, and estate planning.' },
  { name: 'Sarah Chen', role: 'Associate Lawyer', bio: 'Practises in family law and immigration. Committed to guiding clients through complex processes with clarity and care.' },
  { name: 'Michael Torres', role: 'Associate Lawyer', bio: 'Specializes in corporate and commercial matters. Helps businesses and founders with structure, contracts, and compliance.' },
  { name: 'Emily Park', role: 'Legal Assistant', bio: 'Supports the team with client intake, document preparation, and scheduling so your matter runs smoothly from start to finish.' },
]

export const metadata = {
  title: 'Our Team | Founders Club',
  description: 'Meet the team. Experienced lawyers and support staff dedicated to clear, practical legal solutions in Ontario.',
  keywords: 'Founders Club, team, lawyers, Ontario, legal',
}

export default function OurTeamPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        title="Our team"
        subtitle="The people behind Sahail Law — dedicated to clear, practical legal solutions."
        imageFilename={PAGE_HERO_IMAGES.ourTeam}
        imageAlt="Our team at Sahai Law"
        priority
      />
      <div className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <p className="text-gold-100/80 text-lg mb-4 max-w-2xl font-subheading">
            We are a small team of lawyers and support staff who believe in clear communication, integrity, and practical solutions. Get to know the people behind Sahail Law.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-12">
            {team.map((member, index) => (
              <div key={index} className="py-0">
                <h2 className="font-subheading text-xl md:text-2xl font-medium text-gold-200 mb-2">
                  {member.name}
                </h2>
                <p className="text-gold-400/90 text-sm font-medium mb-3 font-subheading">
                  {member.role}
                </p>
                <p className="text-gold-100/90 leading-relaxed font-subheading">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8">
            <p className="text-gold-100/80 mb-6 font-subheading">
              We work together to deliver consistent, reliable advice across our practice areas. If you would like to discuss your matter with our team, we are happy to arrange a consultation.
            </p>
            <Link href="/contact" className="btn-fc-primary inline-block">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
