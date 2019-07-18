import { FunctionComponent, Fragment, useEffect } from 'react';
import Head from 'next/head';
import { Box } from '../components/Box';
import { ExternalLink } from '../components/ExternalLink';

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
    <Box>
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
      <h3>Haftungshinweis:</h3>
      <p>
        Der Betreiber übernimmt keine Haftung für Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>

      <h3>Schriftart:</h3>
      <p>
      <ExternalLink href="https://github.com/weiweihuanghuang/Work-Sans"><b>Work Sans</b>, SIL Open Font License 1.1</ExternalLink><br />
        Copyright 2019 The Work Sans Project Authors
      </p>

      <h3>Hintergrundbild:</h3>
      <p>
        Foto von <ExternalLink href="https://unsplash.com/@lintroller">Adam Mescher auf Unsplash</ExternalLink>
      </p>
    </Box>
  </Fragment>
}

export default Impress;
