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
      'grid z-30 h-16 text-lg text-white bg-gray-800 bg-opacity-50 grid-cols-24 md:h-18 lg:h-15 xxl:h-20',
      {
        'absolute bottom-0 left-0 w-full': fixed,
      },
    )}
  >
    <div className="flex justify-center items-center col-span-24 md:col-span-6">
        <ExternalLink href="https://blog.f-bit.software" keepReferrer>blog</ExternalLink>
    </div>
    <div className="flex justify-center items-center col-span-24 md:col-span-6">
      <Link href="/impress">
        <a>impressum</a>
      </Link>
    </div>
    <div className="flex justify-center items-center col-span-24 md:col-span-6">
      <Link href="/privacy">
        <a>datenschutz</a>
      </Link>
    </div>
    <div className="hidden justify-center items-center md:flex col-span-24 md:col-span-6">
      <ExternalLink href="https://github.com/Fensterbank/personal-site">
        source code
      </ExternalLink>
    </div>
  </div>
);
