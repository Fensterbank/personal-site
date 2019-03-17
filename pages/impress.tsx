import { FunctionComponent, Fragment } from 'react';
import Head from 'next/head';

const Impress: FunctionComponent = () => (
  <Fragment>
    <Head>
      <title>Impressum | Frédéric Bolvin - IT & Entwicklung</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <h1>Impressum</h1>
    <p>
      Frédéric Bolvin<br />
      Öschweg 15<br />
      72555 Metzingen<br />
    </p>

    <p>
      <b>Haftungshinweis:</b><br />
      Der Betreiber übernimmt keine Haftung für Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
    </p>
  </Fragment>
      );
      export default Impress;
