import { useEffect, Fragment } from 'react';
import Head from 'next/head';
import { Skillset } from '../components/Skillset';
import styled from '../theme';
import { SkillContainer } from '../components/SkillContainer';

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
      Mein Name ist <strong>Frédéric Bolvin</strong> und ich bin Softwareentwickler mit Schwerpunkt im Bereich der modernen Webentwicklung.
    </AboutMe>
    <AboutMe>
      Ich lebe in Deutschland und arbeite als	<strong>Expert Software Engineer</strong> in einem großen Unternehmen.<br />
      Ich schätze die Freiheit des Internets und liebe es, großartige Dinge darin zu erschaffen.
    </AboutMe>
    <SkillContainer>
      {<Skillset direction="right">{[
        {
          title: 'C#',
          image: 'csharp.svg',
        },
        {
          title: 'CSS3',
        },
        {
          title: 'HTML5',
        },
        {
          title: 'Java',
        },
        {
          title: 'JavaScript',
        },
        {
          title: 'NextJS',
        },
        {
          title: 'NodeJS',
        },
        {
          title: 'PHP',
        },
        {
          title: 'Ruby on Rails',
          image: 'rails.svg',
        },
        {
          title: 'React',
        },
        {
          title: 'Redux',
        },
        {
          title: 'Ruby',
        },
        {
          title: 'Sass',
        },
        {
          title: 'TypeScript',
        },
      ]
      }</Skillset>}
      <Skillset direction="left">{[
        {
          title: 'Git',
        },
        {
          title: 'MySQL',
        },
        {
          title: 'NPM',
        },
        {
          title: 'Microsoft SharePoint',
          image: 'sharepoint.png',
        },
        {
          title: 'Microsoft SQL Server',
          image: 'sql-server.png',
        },
        {
          title: 'VS Code',
          image: 'visual-studio-code.svg',
        },
        {
          title: 'Microsoft Visual Studio',
          image: 'visualstudio.svg',
        },
        {
          title: 'Webpack',
        },
      ]
      }</Skillset>
    </SkillContainer>
  </Fragment>
}

export default Index;