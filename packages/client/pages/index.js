import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Artify Home Page</title>
        <meta name="description" content="E commerce platform for artisans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
