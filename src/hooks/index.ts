import { useEffect } from 'react';

import { isClient } from '@@/lib';

export const useMatomo = (title?: string) => {
  const paq = isClient() ? window._paq : undefined;

  const trackPage = (title: string) => {
    if (paq && title) {
      paq.push(['setDocumentTitle', title]);
      paq.push(['trackPageView']);
    } else if (title) {
      console.log('[useMatomo] WOULD TRACK', title);
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
