import { useState, useEffect } from 'react';

import { isClient } from '@@/lib';

const getSize = () => ({
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
  outerHeight: window.outerHeight,
  outerWidth: window.outerWidth,
});

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => setWindowSize(getSize());

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const useMatomo = (title?: string) => {
  const trackPage = (title: string) => {
    if (isClient() && window._paq && title) {
      window._paq.push(['setDocumentTitle', title]);
      window._paq.push(['trackPageView']);
    }
  };

  useEffect(() => {
    if (title) trackPage(title);
  }, []);

  return {
    trackPage,
  };
};
