import '../styles/style.scss';
import './tailwind.scss';
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
    <PageContextProvider>
      <Loader visible={loading} />
      <Component {...pageProps} />
    </PageContextProvider>
  );
}

export default MyApp;
