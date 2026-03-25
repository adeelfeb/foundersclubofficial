import Image from 'next/image'

/** Filenames in `public/images/hero/` — paths are URL-encoded for Next/Image. */
export const PAGE_HERO_IMAGES = {
  aboutUs: 'About us image.png',
  contact: 'contact us image.png',
  faq: 'Faqs image.png',
  services: 'our services.png',
  ourTeam: 'our team image.png',
}

/**
 * Full-bleed interior page hero with background image and gradient overlay.
 * Title and optional subtitle render centered below the image strip.
 * @param {{ title: string, subtitle?: string, imageFilename: string, imageAlt: string, priority?: boolean }} props
 */
export default function PageHero({
  title,
  subtitle,
  imageFilename,
  imageAlt,
  priority = false,
}) {
  const src = `/images/hero/${encodeURIComponent(imageFilename)}`

  return (
    <>
      <section
        className="relative min-h-[52vh] sm:min-h-[56vh] md:min-h-[62vh] lg:min-h-[min(70vh,720px)] pt-28 pb-0 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={priority}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/14 to-black/8"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/12 to-transparent md:from-black/28 md:via-black/8"
            aria-hidden
          />
        </div>
      </section>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 pb-6 md:pt-12 md:pb-8 text-center">
        <h1
          id="page-hero-heading"
          className="section-heading font-heading text-4xl sm:text-5xl md:text-6xl font-medium text-gold-400 mb-3 md:mb-4 normal-case max-w-4xl mx-auto"
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="text-gold-100/95 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-subheading">
            {subtitle}
          </p>
        ) : null}
      </div>
    </>
  )
}
