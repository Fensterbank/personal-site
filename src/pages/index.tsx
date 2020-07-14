import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import { useState } from 'react';

import { Home, What, How } from '@@/components/Sections';
import Contact from '@@/components/Sections/contact';
import { Sidebar } from '@@/components/Sidebar';
import { useMatomo } from '@@/hooks';
import { isClient } from '@@/lib';

declare global {
  interface Window {
    _paq: any;
  }
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const matomo = useMatomo(
    isClient() &&
      window.location.hash.length > 0 &&
      window.location.hash !== '#home'
      ? undefined
      : 'f-bit software | home',
  );

  const onSectionLeave = (origin, destination) => {
    setActiveSection(destination.anchor);
    let title;
    switch (destination.anchor) {
      case 'home':
        title = 'f-bit software | home';
        break;
      case 'what':
        title = 'f-bit software | what I do';
        break;
      case 'how':
        title = 'f-bit software | how I do it';
        break;
      case 'contact':
        title = 'f-bit software | let’s talk';
        break;
      default:
        title = 'f-bit software';
    }
    matomo.trackPage(title);
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
