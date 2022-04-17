import Head from 'next/head';
import HomePage from '../components/HomePage';
import { useMoralis } from 'react-moralis';
import { useEffect } from 'react';

export default function Home() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
  }, [isAuthenticated, isWeb3Enabled]);
  return (
    <div>
      <Head>
        <title>Aakriti Home Page</title>
        <meta name="description" content="E commerce platform for artisans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
