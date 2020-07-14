import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import { ExternalLink } from '../ExternalLink';

interface FooterProps {
  fixed?: boolean;
}

export const Footer: FC<FooterProps> = ({ fixed }) => (
  <div
    className={clsx(
      'grid grid-cols-24 z-30 bg-gray-800 bg-opacity-50 text-white h-16 md:h-18 lg:h-20 text-lg',
      {
        'absolute w-full bottom-0 left-0': fixed,
      },
    )}
  >
    <div className="hidden md:block md:col-span-6" />
    <div className="col-span-24 md:col-span-6 flex justify-center items-center">
      <Link href="/impress">
        <a>impressum</a>
      </Link>
    </div>
    <div className="col-span-24 md:col-span-6 flex justify-center items-center">
      <Link href="/privacy">
        <a>datenschutz</a>
      </Link>
    </div>
    <div className="hidden md:flex col-span-24 md:col-span-6 justify-center items-center">
      <ExternalLink href="https://github.com/Fensterbank/personal-site">
        source code
      </ExternalLink>
    </div>
  </div>
);
