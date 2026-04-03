/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { ExternalLink } from '../ExternalLink';

interface LinkItem {
  href?: string;
  anchor?: string;
  title: string;
  keepReferrer?: boolean;
}

const items: LinkItem[] = [
  {
    anchor: 'home',
    title: 'home',
  },
  {
    anchor: 'what',
    title: 'what I do',
  },
  {
    anchor: 'how',
    title: 'how I do it',
  },
  { anchor: 'contact', title: "let's talk" },
  { href: 'https://blog.f-bit.software', title: 'blog', keepReferrer: true }
];

interface MenuProps {
  activeSection?: string;
}

const getHash = () =>
  typeof window !== 'undefined' && window.location.hash
    ? window.location.hash.replace('#', '')
    : 'home';

export const Menu: FC<MenuProps> = ({ activeSection }) => {
  const hash = getHash();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (active == null) setActive(hash);
  }, [hash, active]);

  useEffect(() => {
    if (activeSection) setActive(activeSection);
  }, [activeSection]);

  const renderLink = (link: LinkItem) => {
    if (!activeSection) {
      return (
        <Link 
          key={link.anchor} 
          href={`/#${link.anchor}`}
          className="block p-2 w-full text-xl text-right text-white transition duration-500 ease-in-out outline-none menu-item"
          data-umami-event={link.title}
        >
          {link.title}
        </Link>
      );
    }
    if (link.href) {
      return (
        <ExternalLink
          key={link.href}
          href={link.href}
          keepReferrer={link.keepReferrer}
          className="block p-2 w-full text-xl text-right text-white transition duration-500 ease-in-out outline-none menu-item"
          data-umami-event={link.title}
        >
          {link.title}
        </ExternalLink>
      );
    }
    return (
      <a
        onClick={(e) => {
          e.preventDefault();
          setActive(link.anchor || null);
          const target = document.querySelector(`[data-anchor="${link.anchor}"]`);
          target?.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', `#${link.anchor}`);
        }}
        key={link.anchor}
        href={`#${link.anchor}`}
        data-umami-event={link.title}
        className={clsx(
          {
            'menu-item-active font-bold': active === link.anchor,
          },
          'block menu-item w-full text-white text-right text-xl p-2 outline-none transition duration-500 ease-in-out',
        )}
      >
        {link.title}
      </a>
    );
  };

  return <div className="w-full">{items.map((i) => renderLink(i))}</div>;
};
