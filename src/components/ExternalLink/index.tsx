/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FunctionComponent } from 'react';

interface ExternalLinkProps {
  className?: string;
  children?: any;
  href: string;
}

export const ExternalLink: FunctionComponent<ExternalLinkProps> = (props) => (
  <a
    {...props}
    target="_blank"
    onClick={() =>
      (window as any)._paq
        ? (window as any).push(['trackLink', props.href, 'link'])
        : null
    }
  >
    {props.children || props.href}
  </a>
);
