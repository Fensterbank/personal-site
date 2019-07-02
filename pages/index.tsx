import { useEffect, Fragment } from 'react';
import Head from 'next/head';
import { Skillset } from '../components/Skillset';
import styled from '../theme';

const AboutMe = styled.p`
  text-align: center;
`

declare global {
  interface Window { _paq: any; }
}

const Index = () => {
  useEffect(() => {
    if (window._paq) {
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['trackPageView']);
    }
  });

  return <Fragment>
    <Head>
      <title>Frédéric Bolvin - IT & Entwicklung</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <AboutMe>
      Mein Name ist <strong>Frédéric Bolvin</strong> und ich bin Softwareentwickler mit Schwerpunkt im Bereich der modernen Webentwicklung.<br />
      Ich lebe in Deutschland und arbeite als	<strong>Expert Software Engineer</strong> in einem großen Unternehmen.<br />
      Ich schätze die Freiheit des Internets und liebe es, großartige Dinge darin zu erschaffen.
    </AboutMe>
    <Skillset />
  </Fragment>
}

export default Index;