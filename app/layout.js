import '../styles/globals.css'

const FAVICON_PNG = '/images/logo/FNL%20LOGO.png'

export const metadata = {
  title: 'Founders Club | Private Network for 7-9 Figure Entrepreneurs',
  description: 'The Modern Day Members Only Community. For Founders and Entrepreneurs focused on Mind, Body, and Business.',
  keywords: 'founders club, entrepreneurs, private network, membership, mastermind',
  icons: {
    icon: [{ url: FAVICON_PNG, type: 'image/png' }],
    apple: FAVICON_PNG,
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
          style={{ backgroundImage: 'url(/images/bg.png)' }}
          aria-hidden
        />
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
