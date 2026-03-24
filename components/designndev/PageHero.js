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
    <section
      className="relative min-h-[52vh] sm:min-h-[56vh] md:min-h-[62vh] lg:min-h-[min(70vh,720px)] flex items-end pt-28 pb-10 md:pb-16 overflow-hidden"
      aria-labelledby="page-hero-heading"
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
          className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent md:from-black/70 md:via-black/25"
          aria-hidden
        />
      </div>
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <h1
          id="page-hero-heading"
          className="section-heading font-heading text-4xl sm:text-5xl md:text-6xl font-medium text-gold-400 mb-3 md:mb-4 normal-case drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] max-w-4xl"
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="text-gold-100/95 text-lg md:text-xl max-w-2xl leading-relaxed font-subheading drop-shadow-md pb-1">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}
