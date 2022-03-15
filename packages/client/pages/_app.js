import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
