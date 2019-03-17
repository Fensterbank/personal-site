import Link from 'next/link';
import Head from 'next/head';
import { SocialLinks } from '../components/SocialLinks';
import { Skillset } from '../components/Skillset';
import { useEffect } from 'react';
import styled from '../theme';

const AboutMe = styled.p`
  text-align: center;
`

const Index = () => {
  useEffect(() => {
    console.log('IndexPage did mount');

    return () => {
      console.log('IndexPage will unmount');
    }
  }, []);

  return <React.Fragment>
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
  </React.Fragment>
}

export default Index;