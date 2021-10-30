import '../styles/style.scss';
import './tailwind.scss';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { Loader } from '@@/components/Loader';
import { PageContextProvider } from '@@/context/FilterProvider';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const stateChange = () => {
      if (document.readyState === 'complete') setLoading(false);
    };

    document.addEventListener('readystatechange', stateChange);

    return () => {
      document.removeEventListener('readystatechange', stateChange);
    };
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="description"
          content="Softwareentwickler im Bereich der modernen Webentwicklung. Ihr zuverlässiger Ansprechpartner für webbasierte Unternehmenslösungen mit Mehrwert."
        />
        <meta
          name="keywords"
          content="freelancer, entwickler, software, freiberufler"
        />
        <meta property="og:image" content="/img/f-bit_logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="f-bit software" />
        <meta
          property="og:description"
          content="Erfahrener Softwareentwickler im Bereich der modernen Webentwicklung. Ihr zuverlässiger Ansprechpartner für webbasierte Unternehmenslösungen mit Mehrwert."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="f-bit software | Frédéric Bolvin IT-Softwareentwicklung"
        />
        <meta
          name="twitter:description"
          content="Erfahrener Softwareentwickler im Bereich der modernen Webentwicklung. Ihr zuverlässiger Ansprechpartner für webbasierte Unternehmenslösungen mit Mehrwert."
        />
        <meta property="twitter:image" content="/img/f-bit_logo.png" />
      </Head>
      <PageContextProvider>
        <Loader visible={loading} />
        <Component {...pageProps} />
      </PageContextProvider>
    </>
  );
}

export default MyApp;
