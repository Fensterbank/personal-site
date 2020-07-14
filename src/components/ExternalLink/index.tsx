/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FunctionComponent } from 'react';

import { useMatomo } from '@@/hooks';

interface ExternalLinkProps {
  className?: string;
  children?: any;
  href: string;
  style?: any;
}

export const ExternalLink: FunctionComponent<ExternalLinkProps> = (props) => {
  const matomo = useMatomo();
  return (
    <a
      {...props}
      target="_blank"
      rel="noreferrer"
      onClick={() => matomo.trackLink(props.href)}
    >
      {props.children || props.href}
    </a>
  );
};
