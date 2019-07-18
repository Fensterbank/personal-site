import { FunctionComponent } from "react";

interface ExternalLinkProps {
    className?: string;
    children?: any;
    href: string;
}

export const ExternalLink: FunctionComponent<ExternalLinkProps> = (props) =>
  <a {...props} target="_blank" onClick={() => window._paq ? window._paq.push(['trackLink', props.href, 'link']) : null}>{props.children || props.href}</a>