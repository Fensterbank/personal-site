import { FC } from 'react';

import { ExternalLink } from '../ExternalLink';
import { Hidden } from '../Hidden';

interface HiddenLinkListProps {
  collection: any[];
}

/**
 * Creates a hidden unordered list of external links which is visible for text based browsers
 * and search engines but invisible in graphical UI, since it's rendered otherwise
 */
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
