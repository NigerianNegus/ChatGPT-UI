import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react' ;
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyApp;
export default appWithTranslation(App);
