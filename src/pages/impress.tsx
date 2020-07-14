import Head from 'next/head';
import { FunctionComponent } from 'react';

import Impress from '@@/components/Sections/impress';
import { Sidebar } from '@@/components/Sidebar';
import { useMatomo } from '@@/hooks';

const ImpressPage: FunctionComponent = () => {
  useMatomo('f-bit software | impressum');

  return (
    <>
      <Head>
        <title>f-bit software | impressum</title>
      </Head>
      <Impress />
      <Sidebar />
    </>
  );
};

export default ImpressPage;
