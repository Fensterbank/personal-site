import cslx from 'clsx';
import { FC, useEffect, useState } from 'react';

const items = [
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
  activeSection: string;
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

  return (
    <div className="w-full">
      {items.map((i) => (
        <a
          onClick={() => setActive(i.anchor)}
          key={i.anchor}
          href={`#${i.anchor}`}
          className={cslx(
            {
              'menu-item-active font-bold': active === i.anchor,
            },
            'block menu-item w-full text-white text-right text-xl p-2 outline-none',
          )}
        >
          {i.title}
        </a>
      ))}
    </div>
  );
};
