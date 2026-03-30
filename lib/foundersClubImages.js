/**
 * Image URLs from Founders Club official site (cdn.prod.website-files.com).
 * Used with next/image via remotePatterns in next.config.js.
 */
const CDN = 'https://cdn.prod.website-files.com/691b85f2af2475f19556950e'
const CDN2 = 'https://cdn.prod.website-files.com/692c618aa1d50d5458c72e8c'

/** Local backgrounds — public/images/background (names describe use) */
const BG = '/images/background'

export const foundersClubImages = {
  /** Full-page background (layout + pages/_app) */
  pageBackground: `${BG}/background%20color.png`,
  /** Cards, panels, form boxes */
  boxBackgroundLighter: `${BG}/lighter%20tone%20use%20for%20boxes%20if%20needed.png`,
  /** Nav boundary strip / accent (see Navbar + globals .nav-gold-line) */
  boundaryAndIcons: `${BG}/boundary%20and%20icons%20color.png`,
  // Logo - Navbar & Footer (legacy single asset; prefer logoHeader / logoFooter)
  logo: '/images/logo/FNL%20LOGO.png',
  logoHeader: '/images/hero/SAHAI%20LOGO%20HEADER.png',
  logoFooter: '/images/hero/SAHAI%20LOGO%20FOOTER.png',
  /** Section directly under hero (home) */
  sectionBelowHeroBg: '/images/hero/FRONT%20IMAGE.png',
  /** Footer decorative strip / panel */
  footerDecorBg: '/images/hero/FOOTER%20IMAGE.png',
  logoCdn: `${CDN}/695eb4be6e3ae7a67151e6d7_Logo-side-badge.avif`,
  // Hero / backgrounds
  heroBg: `${CDN}/698a14074726ecbc1808ce1c_bg_navbar.avif`,
  ctaBg: `${CDN}/697cf56a03c4ffaf1c5b9ae6_855e9270c3252899ed9fd4b388d90742_cta-bg.avif`,
  /** @deprecated Prefer pageBackground / boxBackgroundLighter; kept for any legacy references */
  texture: `${CDN}/6931c4a7a949032f48fa0f9f_texture-founders.avif`,
  texture1: `${CDN}/692da8f5cc315641d020a8e0_Texture%201.avif`,
  // About Us section images (story, problem, spark, growth, mission)
  aboutStory: `${CDN}/697bcc4cfcb106fb7a80a346_Frame%202147234382.avif`,
  aboutProblem: `${CDN}/6980b156c43c77820bf4481e_12161761.avif`,
  aboutSpark: `${CDN}/6980b6925558795ae1d7a579_Frame%202147234392.avif`,
  aboutGrowth: `${CDN}/6987e29fb1ac0ee1e1483cbe_Frame%202147234398.avif`,
  aboutMission: `${CDN}/6994afd9e7b4e1ef899b5a14_32156161.webp`,
  aboutCta: `${CDN}/697cf56a03c4ffaf1c5b9ae6_855e9270c3252899ed9fd4b388d90742_cta-bg.avif`,
  // Vetted for Impact / community group photo
  community: `${CDN}/6987e8d4c589808c2249467a_5161761.avif`,
  // Become a member / events
  membersGroup: `${CDN}/697d144685e5ac141dd4635b_Frame%202147234387.avif`,
  eventForum: `${CDN}/69260e0c1a70f01c73520705_cdfeb67a301ac710890168e6cca488b5_event-founders-forum.avif.webp`,
  // Practice Areas – content cards (intro, title, description); optional image for legacy use
  practiceAreas: [
    {
      image: '/images/family-law.jpg',
      title: 'Family law guidance',
      intro: 'Protecting families through transition',
      description: 'We support families through separation, parenting issues, agreements, and conflict resolution.',
    },
    {
      image: '/images/immigration.avif',
      title: 'Immigration',
      intro: 'Guidance through every step',
      description: 'We help with work permits, permanent residence, citizenship, and family sponsorship matters.',
    },
    {
      image: '/images/real-estate.avif',
      title: 'Real estate counsel',
      intro: 'Clarity in every transaction',
      description: 'We assist clients with purchases, sales, refinancing, disputes, and smooth closing processes.',
      highlight: true,
    },
    {
      image: '/images/corporate-law.avif',
      title: 'Corporate Law',
      intro: 'Strategic legal counsel for growth',
      description: 'We advise companies on contracts, governance, compliance, and strategic commercial decisions.',
    },
    {
      image: '/images/wills-and-estates.jpg',
      title: 'Wills and Estates',
      intro: 'Planning that protects what matters',
      description: 'We help with wills, powers of attorney, estate administration, and succession planning.',
    },
    {
      image: '/images/practice-r4.avif',
      title: 'Dispute Resolution',
      intro: 'Resolving conflict with clarity',
      description: 'We support clients through negotiation, mediation, and litigation when necessary.',
    },
  ],
  // Local images (temp folder → public/images)
  aboutImage: '/images/about-1.jpg',
  testimonialsBg: '/images/testimonials.avif',
}

export default foundersClubImages
