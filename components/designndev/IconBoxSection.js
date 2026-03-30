'use client'

import { motion } from 'framer-motion'

const iconClientCentric = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-full h-full" fill="currentColor" aria-hidden>
    <path d="M306.4,357.6c-37.2,7-75.8,7-113,0-.3-22-3.3-41.8,14.8-57.7,18.4-16.1,63-16.5,81.9-1.1,19.4,15.7,16.6,36.2,16.2,58.9Z" />
    <path d="M174.8,347.7l-.8,3.7c-11.3,2.9-12.9,10.3-1.6,15.5,27.2,12.6,132.7,14.6,157.4-1.6s7.6-5.8,1.7-10.8-8.3-2.6-5.6-6.8c20.8,3.9,52.4,20.1,19.3,36.7-40.1,20.1-154.5,20.8-193.5-1.7-29-16.7,5.6-32.4,23.2-35Z" />
    <path d="M244,215.1c47.6-7.4,52.9,65.2,6.8,66.5-41.6,1.1-45.8-60.4-6.8-66.5Z" />
    <path d="M388.5,299.3c-.5.5.3,11.8,0,14.3s.7,2.2-1.8,1.8l-39.2-23.6,39.2-26.1c2.5-.3,1.6.1,1.8,1.8.6,4.4-.4,9.8,0,14.3h50.3c3,3.8,3,13.7,0,17.4h-50.3Z" />
    <path d="M111.4,281.9c.5-.5-.3-11.8,0-14.3s-.7-2.2,1.8-1.8l39.2,26.1-39.2,23.6c-2.5.3-1.6-.1-1.8-1.8-.6-4.4.4-9.8,0-14.3h-50.9c-1.2-5.2-3.1-13,.6-17.4h50.3Z" />
    <path d="M124.3,153.4c11.5,10.7,22.3,22,33.8,32.7l12.9-11.1,9.9,47.2-46-11.2,11.2-11.8-35.9-36.2,11.7-12.9c1.1.8,1.4,2.3,2.4,3.2Z" />
    <path d="M364.9,211c-14.7,2.9-29.7,8.1-44.3,11-2.1.4-1.7.3-1.6-1.6.5-13.3,9.8-31.3,9.9-45.4l11.2,10.6c.9.8,1.6.2,2.4,0,6.2-1.8,28.3-30.5,35.5-35.4l11.7,12.9-35.9,36.2,11.2,11.8Z" />
    <polygon points="258 100.5 258 152.6 275.4 152.6 250 192.4 224.5 152.6 241.9 152.6 241.9 100.5 258 100.5" />
  </svg>
)

/**
 * Trusted Advocacy — double-outline shield + check.
 * Geometry from Lucide `shield-check` (ISC); inner shield is a scaled copy for the nested border look.
 * @see https://lucide.dev/icons/shield-check
 */
const SHIELD_PATH =
  'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'

const iconTrustedAdvocacy = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-full h-full overflow-visible"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.85}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d={SHIELD_PATH} vectorEffect="non-scaling-stroke" />
    <g transform="translate(12 12) scale(0.74) translate(-12 -12)">
      <path d={SHIELD_PATH} vectorEffect="non-scaling-stroke" />
    </g>
    <g transform="translate(12 12) scale(0.9) translate(-12 -12)">
      <path d="m9 12 2 2 4-4" vectorEffect="non-scaling-stroke" />
    </g>
  </svg>
)

const iconTailored = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-full h-full" fill="currentColor" aria-hidden>
    <path d="M154.9,316.2c.3-1.1,3.1-2.2,4.3-2.6,6.2-1.8,37.1-6.8,42.4-6,4.6.7,42.5,18.4,47.7,21.7,8.4,5.3,10.7,15.4,4.4,23.3-10.2,12.8-32.8-4.6-44.1-9.1s-8.2-.7-3.2,3.2c4.8,3.7,30,15.3,35.7,15.3s12-2.8,16.1-8.3c1.6-2.1,2-5.4,3.8-6.9,4.9-4.3,53-31.8,59.3-34,16.1-5.6,30.1,4.9,19.6,19.6s-41.2,33.5-52.2,41.6c-8.6,6.3-17.2,13.2-26.1,19-9.7,6.2-10,8.5-21.8,4.9-9.3-2.9-51.2-22-55.5-22h-28.9c-.1,0-1.7-1.6-1.7-1.7v-57.8Z" />
    <path d="M189.1,149.1c-.3,0-2.2,1.7-1.2,2.4l38.3,68.2c1.8,4.3-2.8,6.7-5.1,2.8-5.2-7.6-36.1-68.8-40.1-68.8s-7.4,9.5-8.9,12c-11.4,19.1-21.5,39.2-32.3,58.6-4.2.8-5.7-2.3-3.9-5.7l37.4-65.7c1-4.2-3.8-5.9-3.3-11.2s5.6-9.1,8.9-9.8c6.7-1.2,8.5,5,13.5,5.7s40.3.8,43.8-.3,7.6-5.9,7.7-6.4c2.2-7-1.9-11.4-.9-18s4.6-13,7.2-12.4,6.1,11.1,6.3,13.4c.6,6-3.2,10.1-1.1,17s6.5,5.8,6.9,6c2.1,1,41.9,1.3,45.7.6s7.5-10.2,16.9-2.9c8.5,6.6,2.6,10.9,1.3,18.3l37.4,65.7c1.4,7-1.5,7.3-5.4,1.9-13.5-18-22.8-45.2-35.8-63.7-1-1.5-1.8-3-3.9-3.1l-42.8,70.7c-1.1.2-2.6-1-2.9-1.9-1-3.7,32-57.9,36.4-66.4s4.3-7,1.1-7h-48.6c-.6,0-7.4,6.7-6.4,8.6v122.6c3.6,1.4,6.3,2,9.7,4.4s5.8,6.7,6.2,6.8c2.4.6,6.1-.4,9,0,6.2.9,12.9,11.5,8.2,11.5h-77.5c-4.7,0,2-10.6,8.2-11.5s6.5.5,9,0,3.9-5.2,6.2-6.8c3.4-2.4,6.1-2.9,9.7-4.4v-122.6c.9-1.9-5.9-8.6-6.4-8.6h-48.6ZM247.1,137.7c-5.5,1.9-2.4,12.6,3.9,10.9s4.8-13.9-3.9-10.9Z" />
    <path d="M367.5,229.2c4.8,4.7-5.2,24.3-9,29.2-21.5,27.6-64.2,25.7-82.3-4.4-3.4-5.7-12.8-24.8-1.6-26.3,28.1,1.9,59.1-2.4,86.9,0,1.8.2,4.7.2,6,1.5Z" />
    <path d="M134.9,227.9l91.1-.2c9.9,1.9.2,21.7-3.1,26.9-18.6,29.3-60.6,30.9-81.9,3.7-4-5.1-15.8-27.5-6.2-30.4Z" />
    <path d="M312.3,311c1.7,1.8-3.9,4.1-5,4.8-10.8,6.6-30.8,19.9-41.6,24.4-1.4.6-2.7,1.2-4.3.9.4-4.3-4.6-8.3-.5-11.4,9.8-7.4,29.1-11.6,39.7-19.2,2.1-1.1,10.5-.6,11.6.6Z" />
  </svg>
)

const items = [
  {
    icon: iconClientCentric,
    title: 'Client First Approach',
    description:
      'Your goals are our priority. We take the time to understand your situation and provide personalized legal solutions designed around your needs.',
  },
  {
    icon: iconTrustedAdvocacy,
    title: 'Trusted Advocacy',
    description:
      'We stand firmly by our clients, offering reliable and ethical representation every step of the way.',
  },
  {
    icon: iconTailored,
    title: 'Strategic Excellence',
    description:
      'Every case is handled with a focused strategy, ensuring strong representation and attention to detail.',
  },
]

export default function IconBoxSection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-forest-900/70 via-forest-950/90 to-black/90">
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-gold-400/25 bg-forest-950/40 p-5 md:p-6 hover:border-gold-400/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <div
                  className={`flex-shrink-0 text-gold-400 ${
                    item.title === 'Trusted Advocacy'
                      ? 'w-[4.5rem] h-[4.5rem] md:w-[5.75rem] md:h-[5.75rem]'
                      : 'w-16 h-16 md:w-20 md:h-20'
                  }`}
                  aria-hidden
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-gold-200 leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-gold-100/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
