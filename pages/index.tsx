import { useEffect, Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Skillset } from '../components/Skillset';
import { SkillContainer } from '../components/SkillContainer';

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
    </Head>
    <p>
      Mein Name ist <strong>Frédéric Bolvin</strong> und ich bin Softwareentwickler mit Schwerpunkt im Bereich der modernen Webentwicklung.
    </p>
    <p>
      Ich lebe in Deutschland und arbeite als	<strong>IT Freelancer</strong> für Kunden in den verschiedensten Branchen.<br />
      Derzeit spezialisiere ich mich auf die Entwicklung modernster Webanwendungen auf Basis von React und NodeJS.
    </p>
    <p>
      Bei der Umsetzung von Projekten begleite ich meine Kunden vom ersten Prototyp bis zur fertigen Lösung.<br />
      Dabei lege ich Wert auf den Einsatz von erprobten state-of-the-art Technologien, um mit möglichst wenig Aufwand möglichst moderne und nachhaltige Lösungen zu entwickeln.<br />
      Benötigen Sie Unterstützung in Ihrem Projekt? Gerne können Sie mich <Link href="/impress"><a>unverbindlich kontaktieren</a></Link>.
    </p>
    <SkillContainer>
      {<Skillset direction="right" speed={4}>{[
        {
          title: 'C#',
          image: 'csharp.svg',
          href: 'https://de.wikipedia.org/wiki/C-Sharp',
        },
        {
          title: 'CSS3',
          href: 'https://de.wikipedia.org/wiki/Cascading_Style_Sheets#CSS3',
        },
        {
          title: 'HTML5',
          href: 'https://de.wikipedia.org/wiki/HTML5',
        },
        {
          title: 'JavaScript',
          href: 'https://developer.mozilla.org/de/docs/Web/JavaScript',
        },
        {
          title: 'NextJS',
          href: 'https://nextjs.org/',
        },
        {
          title: 'NodeJS',
          href: 'https://nodejs.org/',
        },
        {
          title: 'PHP',
          href: 'http://php.net/',
        },
        {
          title: 'Ruby on Rails',
          image: 'rails.svg',
          href: 'https://www.ruby-lang.org/de/',
        },
        {
          title: 'React',
          href: 'https://reactjs.org/',
        },
        {
          title: 'Redux',
          href: 'https://redux.js.org/',
        },
        {
          title: 'Ruby',
          href: 'https://www.ruby-lang.org/de/',
        },
        {
          title: 'TypeScript',
          href: 'https://www.typescriptlang.org/',
        },
      ]
      }</Skillset>}
      <Skillset direction="left" speed={6}>{[
        {
          title: 'Git',
          href: 'https://git-scm.com/',
        },
        {
          title: 'MySQL',
          href: 'https://www.mysql.com/',
        },
        {
          title: 'NPM',
          href: 'https://www.npmjs.com/',
        },
        {
          title: 'Microsoft SharePoint',
          image: 'sharepoint.png',
          href: 'http://office.microsoft.com/de-de/sharepoint/',
        },
        {
          title: 'Microsoft SQL Server',
          image: 'sql-server.png',
          href: 'https://www.microsoft.com/de-de/sql-server/',
        },
        {
          title: 'VS Code',
          image: 'visual-studio-code.svg',
          href: 'https://visualstudio.microsoft.com/',
        },
        {
          title: 'Webpack',
          href: 'https://webpack.js.org/',
        },
        {
          title: 'Linux',
          href: 'https://www.linuxfoundation.org/',
        },
        {
          title: 'Microsoft Windows',
          image: 'microsoft-windows.svg',
          href: 'https://www.microsoft.com/de-de/windows',
        },
      ]
      }</Skillset>
    </SkillContainer>
  </Fragment>
}

export default Index;