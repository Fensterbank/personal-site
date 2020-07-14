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
  const paq = isClient() ? window._paq : undefined;

  const trackPage = (title: string) => {
    if (title) console.log('[useMatomo] WOULD TRACK', title);
    if (paq && title) {
      paq.push(['setDocumentTitle', title]);
      paq.push(['trackPageView']);
    }
  };

  const trackLink = (href: string) => {
    if (paq) paq.push(['trackLink', href, 'link']);
    else console.log('[useMatomo] WOULD TRACK LINK TO', href);
  };

  const trackEvent = (category: string, action: string) => {
    if (paq) paq.push(['trackEvent', category, action]);
    else console.log('[useMatomo] WOULD TRACK EVENT', category, action);
  };

  useEffect(() => {
    if (title) trackPage(title);
  }, []);

  return {
    trackPage,
    trackLink,
    trackEvent,
  };
};
