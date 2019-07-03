import { FunctionComponent, Fragment, useEffect } from 'react';
import Head from 'next/head';

const Impress: FunctionComponent = () => {
  useEffect(() => {
    if (window._paq) {
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['trackPageView']);
    }
  });

  return <Fragment>
    <Head>
      <title>Impressum | Frédéric Bolvin - IT & Entwicklung</title>
    </Head>
    <h1>Impressum</h1>
    <p>
      Frédéric Bolvin<br />
      Öschweg 15<br />
      72555 Metzingen<br />
    </p>

    <p>
      <b>Mail:</b> <a href="mailto:frederic@bol.vin">frederic@bol.vin</a><br />
      <b>Mobil:</b> 0176-24472011
    </p>

    <p>
      <b>Haftungshinweis:</b><br />
      Der Betreiber übernimmt keine Haftung für Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
  </p>
  </Fragment>
}

export default Impress;
