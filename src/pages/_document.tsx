import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const trackingScript =
      this.props.__NEXT_DATA__.buildId === 'development'
        ? ''
        : `var _paq = window._paq = window._paq || [];
        _paq.push(['disableCookies']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="https://analytics.bol.vin/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '1']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();`;

    return (
      <Html lang="de">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta
            name="description"
            content="Softwareentwickler im Bereich der modernen Webentwicklung. Ihr zuverlässiger Ansprechpartner für webbasierte Unternehmenslösungen mit Mehrwert."
          />
          <meta
            name="keywords"
            content="freelancer, entwickler, software, freiberufler"
          />
          <meta property="og:image" content="/img/f-bit_logo.png" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="f-bit software" />
          <meta
            property="og:description"
            content="Erfahrener Softwareentwickler im Bereich der modernen Webentwicklung. Ihr zuverlässiger Ansprechpartner für webbasierte Unternehmenslösungen mit Mehrwert."
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="f-bit software | Frédéric Bolvin IT-Softwareentwicklung"
          />
          <meta
            name="twitter:description"
            content="Erfahrener Softwareentwickler im Bereich der modernen Webentwicklung. Ihr zuverlässiger Ansprechpartner für webbasierte Unternehmenslösungen mit Mehrwert."
          />
          <meta property="twitter:image" content="/img/f-bit_logo.png" />

          <link rel="icon" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: trackingScript }}
          />
          <noscript>
            <style type="text/css">
              {`.hidden-for-script { display: inherit !important; }`}
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
