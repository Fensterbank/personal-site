import { FC, ReactNode } from 'react';

interface ExternalLinkProps {
  className?: string;
  children?: ReactNode;
  href: string;
  style?: React.CSSProperties;
  keepReferrer?: boolean;
}

export const ExternalLink: FC<ExternalLinkProps> = (props) => {
  const { keepReferrer = false, children, ...restProps } = props;
  return (
    <a
      {...restProps}
      target="_blank"
      rel={keepReferrer ? "noopener" : "noopener noreferrer"}
    >
      {children || props.href}
    </a>
  );
};
