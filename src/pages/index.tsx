import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
// import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Home, What, How } from '@@/components/Sections';
import Contact from '@@/components/Sections/contact';
import { Sidebar } from '@@/components/Sidebar';

// import { SkillContainer } from '../components/SkillContainer';
// import { Skillset } from '../components/Skillset';

declare global {
  interface Window {
    _paq: any;
  }
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    if (window._paq) {
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['trackPageView']);
    }
  });

  const onSectionLeave = (origin, destination, direction) => {
    console.log('onLeave', { origin, destination, direction });
    setActiveSection(destination.anchor);
  };

  return (
    <>
      <Head>
        <title>f-bit software</title>
      </Head>
      <ReactFullpage
        onLeave={onSectionLeave}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Home active={activeSection === 'home'} />
              <What active={activeSection === 'what'} />
              <How active={activeSection === 'how'} />
              <Contact active={activeSection === 'contact'} />
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Sidebar activeSection={activeSection} />
      {/* <div className="grid grid-cols-24 relative z-10">
        <div className="col-span-4">
          <Menu active="Hello" />
        </div>
      </div> */}
      {/* <div>
        <p>
          Hallo!
          <br />
          Ich bin Softwareentwickler mit Schwerpunkt im Bereich der modernen
          Webentwicklung.
        </p>
        <p>
          Ich lebe in Deutschland und arbeite als <strong>IT Freelancer</strong>{' '}
          für Kunden in den verschiedensten Branchen.
          <br />
          Derzeit bevorzuge ich die Entwicklung modernster Webanwendungen auf
          Basis von React und NodeJS.
        </p>
        <p>
          Bei der Umsetzung von Projekten begleite ich Sie vom ersten Prototyp
          bis zur fertigen Lösung.
          <br />
          Dabei lege ich Wert auf den Einsatz von erprobten state-of-the-art
          Technologien, um mit möglichst wenig Aufwand möglichst moderne und
          nachhaltige Lösungen zu entwickeln.
          <br />
          Benötigen Sie Unterstützung in Ihrem Projekt? Gerne können Sie mich{' '}
          <Link href="/impress">
            <a>unverbindlich kontaktieren</a>
          </Link>
          .
        </p>
      </div>
      <SkillContainer>
        <Skillset direction="right" speed={3}>
          {[
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
          ]}
        </Skillset>
        <Skillset direction="left" speed={4}>
          {[
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
          ]}
        </Skillset>
      </SkillContainer> */}
    </>
  );
};

export default Index;
