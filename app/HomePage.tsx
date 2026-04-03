'use client';

import { useEffect, useRef, useState } from 'react';

import { Home, What, How } from '@@/components/Sections';
import Contact from '@@/components/Sections/contact';
import { Sidebar } from '@@/components/Sidebar';

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

const SECTION_ANCHORS = ['home', 'what', 'how', 'contact'];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const anchor = (entry.target as HTMLElement).dataset.anchor;
            if (anchor) {
              setActiveSection(anchor);
              history.replaceState(null, '', `#${anchor}`);
            }
          }
        }
      },
      { root: container, threshold: 0.5 },
    );

    const sections = container.querySelectorAll<HTMLElement>('[data-anchor]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Scroll to section matching initial hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && SECTION_ANCHORS.includes(hash)) {
      const target = containerRef.current?.querySelector(`[data-anchor="${hash}"]`);
      target?.scrollIntoView();
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className="fullpage-container">
        <Home active={activeSection === 'home'} />
        <What active={activeSection === 'what'} />
        <How active={activeSection === 'how'} />
        <Contact active={activeSection === 'contact'} />
      </div>
      <Sidebar activeSection={activeSection} />
    </>
  );
}
