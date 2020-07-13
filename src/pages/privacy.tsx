import Head from 'next/head';
import { FunctionComponent, useEffect } from 'react';

import Privacy from '@@/components/Sections/privacy';
import { Sidebar } from '@@/components/Sidebar';

const PrivacyPage: FunctionComponent = () => {
  useEffect(() => {
    if (window._paq) {
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['trackPageView']);
    }
  });

  return (
    <>
      <Head>
        <title>Datenschutzerklärung | Frédéric Bolvin - IT & Entwicklung</title>
      </Head>
      <Privacy />
      <Sidebar />
    </>
  );
};
export default PrivacyPage;
