import '../styles/globals.css'
import { foundersClubImages } from '../lib/foundersClubImages'

export const metadata = {
  title: 'Founders Club | Private Network for 7-9 Figure Entrepreneurs',
  description: 'The Modern Day Members Only Community. For Founders and Entrepreneurs focused on Mind, Body, and Business.',
  keywords: 'founders club, entrepreneurs, private network, membership, mastermind',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Founders Club | Private Network for 7-9 Figure Entrepreneurs',
    description: 'The Modern Day Members Only Community. For Founders and Entrepreneurs focused on Mind, Body, and Business.',
    siteName: 'Founders Club',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased relative min-h-screen" suppressHydrationWarning>
        {/* Static full-viewport background – all pages share this */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${foundersClubImages.pageBackground})` }}
          aria-hidden
        />
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
