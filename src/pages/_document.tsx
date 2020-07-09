import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('Build ID:', this.props.__NEXT_DATA__.buildId);
    const trackingScript = '';
    //     this.props.__NEXT_DATA__.buildId === 'development'
    //       ? 'console.log("nixScript");'
    //       : `console.log("${this.props.__NEXT_DATA__.buildId}");
    //       var _paq = window._paq || [];
    //   /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    //   _paq.push(['enableLinkTracking']);
    //   (function() {
    //   var u="https://analytics.bol.vin/";
    //   _paq.push(['setTrackerUrl', u+'matomo.php']);
    //   _paq.push(['setSiteId', '1']);
    //   var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    //   g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    // })();
    // `;

    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="icon" href="/favicon.ico" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: trackingScript }}
          />
          <noscript>
            <style type="text/css">
              {`.hidden { display: inherit !important; }`}
            </style>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
