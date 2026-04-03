import { FC } from 'react';

import { ExternalLink } from '../ExternalLink';
import { Hidden } from '../Hidden';

interface HiddenLinkListProps {
  collection: Array<{ title: string; href: string }>;
}

export const HiddenLinkList: FC<HiddenLinkListProps> = ({ collection }) => (
  <Hidden>
    <ul>
      {collection.map((item) => (
        <li key={item.title}>
          <ExternalLink href={item.href}>{item.title}</ExternalLink>
        </li>
      ))}
    </ul>
  </Hidden>
);
