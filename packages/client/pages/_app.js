import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Header from '../components/Header';
import { SWRConfig } from 'swr';
import { HMSRoomProvider } from '@100mslive/react-sdk';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <HMSRoomProvider>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false,
          dedupingInterval: 0,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </SWRConfig>
    </HMSRoomProvider>
  );
}

export default MyApp;
