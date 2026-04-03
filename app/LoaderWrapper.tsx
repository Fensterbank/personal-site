'use client';

import { useEffect, useState } from 'react';
import { Loader } from '@@/components/Loader';

export function LoaderWrapper() {
  const [loading, setLoading] = useState(() => {
    if (typeof document === 'undefined') return true;
    return document.readyState !== 'complete';
  });

  useEffect(() => {
    const finishLoading = () => {
      setLoading(false);
    };

    const stateChange = () => {
      if (document.readyState === 'complete') finishLoading();
    };

    window.addEventListener('load', finishLoading);
    document.addEventListener('readystatechange', stateChange);

    if (document.readyState === 'complete') {
      window.setTimeout(finishLoading, 0);
    }

    return () => {
      window.removeEventListener('load', finishLoading);
      document.removeEventListener('readystatechange', stateChange);
    };
  }, []);

  return <Loader visible={loading} />;
}
