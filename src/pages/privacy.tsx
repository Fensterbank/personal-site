import Head from 'next/head';
import { FunctionComponent } from 'react';

import Privacy from '@@/components/Sections/privacy';
import { Sidebar } from '@@/components/Sidebar';
import { useMatomo } from '@@/hooks';

const PrivacyPage: FunctionComponent = () => {
  useMatomo('f-bit software | datenschutzerklärung');

  return (
    <>
      <Head>
        <title>f-bit software | datenschutzerklärung</title>
      </Head>
      <Privacy />
      <Sidebar />
    </>
  );
};
export default PrivacyPage;
