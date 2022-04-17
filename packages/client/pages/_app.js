import React, { useState, useEffect } from 'react';
// import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Header from '../components/Header';
import { SWRConfig } from 'swr';
import { SnackbarProvider } from 'notistack';
import { ApolloProvider } from '@apollo/client';
import { createClient, Provider } from 'wagmi';
import client from '../apollo';
import { providers } from 'ethers';
import { INFURA_ID, POLYGON_MUMBAI, CHAIN_ID } from '../utils/constants';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { useMoralis, MoralisProvider } from 'react-moralis';
import { MoralisDappProvider } from '../context/MoralisDappProvider';

const supportedChains = [POLYGON_MUMBAI];
const defaultChain = POLYGON_MUMBAI;
const connectors = ({ chainId }) =>
  // const rpcUrl =
  //   supportedChains.find(x => x.id === chainId)?.rpcUrls?.default?.[0] ??
  //   defaultChain.rpcUrls.default[0];

  [
    new InjectedConnector({
      chains: supportedChains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId: INFURA_ID,
        chainId: CHAIN_ID,
      },
    }),
  ];
const wagmiClient = createClient({
  autoConnect: true,
  provider(config) {
    return new providers.InfuraProvider(config.chainId, INFURA_ID);
  },
  connectors,
});
const APP_ID =
  process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID ||
  'llczyR738C9TCizyDOI2cHZ0pbU6gC3FZvGfeqC9';
const SERVER_URL =
  process.env.NEXT_PUBLIC_MORALIS_SERVER_URL ||
  'https://o3jhkyqazhmm.usemoralis.com:2053/server';

function MyApp({ Component, pageProps }) {
  // const [queryClient] = useState(() => new QueryClient());

  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <MoralisDappProvider>
        <Provider client={wagmiClient}>
          <ApolloProvider client={client}>
            <SWRConfig
              value={{
                revalidateOnFocus: false,
                shouldRetryOnError: false,
                dedupingInterval: 0,
              }}
            >
              <SnackbarProvider>
                {/* <QueryClientProvider client={queryClient}> */}
                {/* <Hydrate state={pageProps.dehydratedState}> */}
                <Header />
                <Component {...pageProps} />
                <Footer />
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                {/* </Hydrate> */}
                {/* </QueryClientProvider> */}
              </SnackbarProvider>
            </SWRConfig>
          </ApolloProvider>
        </Provider>
      </MoralisDappProvider>
    </MoralisProvider>
  );
}

export default MyApp;
