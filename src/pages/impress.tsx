import Head from 'next/head';
import { FunctionComponent, useEffect } from 'react';

import Impress from '@@/components/Sections/impress';
import { Sidebar } from '@@/components/Sidebar';

const ImpressPage: FunctionComponent = () => {
  useEffect(() => {
    if (window._paq) {
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['trackPageView']);
    }
  });

  return (
    <>
      <Head>
        <title>f-bit software | Impressum</title>
      </Head>
      <Impress />
      <Sidebar />
    </>
  );
};

export default ImpressPage;
