import '../styles/globals.css';
import 'ag-grid-community/styles/ag-grid.min.css';
import 'ag-grid-community/styles/ag-theme-quartz.min.css';
import Head from 'next/head';
import { ToastProvider } from '../components/ToastProvider';
import ErrorBoundary from '../components/ErrorBoundary';
import RecaptchaPreloader from '../components/RecaptchaPreloader';

const FAVICON_PNG = '/images/logo/FNL%20LOGO.png';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Head>
          <title>Design n Dev</title>
          <link rel="icon" href={FAVICON_PNG} type="image/png" />
          <link rel="alternate icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href={FAVICON_PNG} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://www.google.com" />
          <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
        </Head>
        <RecaptchaPreloader />
        <div className="antialiased" style={{ minHeight: '100vh' }}>
          <Component {...pageProps} />
        </div>
      </ToastProvider>
    </ErrorBoundary>
  );
}
