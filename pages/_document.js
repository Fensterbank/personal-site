import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyCustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const trackingScript = this.props.__NEXT_DATA__.buildId === 'development' ? '' : `var _paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['enableLinkTracking']);
  (function() {
  var u="https://analytics.bol.vin/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
`;

    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          {this.props.styleTags}
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: trackingScript }} />
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
      </html>
    )
  }
}
