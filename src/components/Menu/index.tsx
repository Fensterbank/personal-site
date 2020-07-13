import cslx from 'clsx';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

interface LinkItem {
  anchor: string;
  title: string;
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
  { anchor: 'contact', title: 'let’s talk' },
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
  const [active, setActive] = useState(null);

  useEffect(() => {
    // set initial active after first render
    if (active == null) setActive(hash);
  }, [hash]);

  useEffect(() => {
    setActive(activeSection);
  }, [activeSection]);

  const renderLink = (link: LinkItem) => {
    if (!activeSection) {
      return (
        <Link key={link.anchor} href={`/#${link.anchor}`}>
          <a className="block menu-item w-full text-white text-right text-xl p-2 outline-none transition duration-500 ease-in-out">
            {link.title}
          </a>
        </Link>
      );
    }
    return (
      <a
        onClick={() => setActive(link.anchor)}
        key={link.anchor}
        href={`#${link.anchor}`}
        className={cslx(
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
