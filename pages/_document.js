import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preload" href="/fonts/juana-regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/juana-semibold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body {
              font-family: Arial, Helvetica, 'Helvetica Neue', sans-serif !important;
            }
          `
        }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// Ensure this file is only used by Pages Router
// This prevents conflicts with App Router's layout.js
