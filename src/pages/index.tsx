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

  const onSectionLeave = (origin, destination) => {
    setActiveSection(destination.anchor);
  };

  return (
    <>
      <Head>
        <title>f-bit software</title>
      </Head>
      <ReactFullpage
        licenseKey="82B0922C-E2FF42E3-A770BCEC-A53EA21A"
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
    </>
  );
};

export default Index;
