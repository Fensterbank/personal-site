import { FC, ReactNode } from 'react';

interface HiddenProps {
  children: ReactNode;
}

export const Hidden: FC<HiddenProps> = ({ children }) => (
  <div className="hidden-for-script" style={{ display: 'none' }}>
    {children}
  </div>
);
