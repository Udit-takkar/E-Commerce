import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Header from '../components/Header';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
