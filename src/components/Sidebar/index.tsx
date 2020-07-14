import { FC } from 'react';

import { Fading } from '../Fading';
import { Menu } from '../Menu';

interface SidebarProps {
  activeSection?: string;
}

export const Sidebar: FC<SidebarProps> = ({ activeSection }) => {
  return (
    <div className="hidden md:flex sidebar h-full fixed top-0 left-0 flex-col justify-center z-20">
      <div className="grid grid-cols-6 absolute top-0 left-0 w-full mt-12">
        <div className="col-span-1" />
        <div className="col-span-3">
          <Fading delay={800}>
            <img
              className="w-full"
              src="/img/f-bit_logo_white.svg"
              alt="Logo f-bit software"
            />
          </Fading>
        </div>
        <div className="col-span-2" />
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <Fading delay={2400}>
            <Menu activeSection={activeSection} />
          </Fading>
        </div>
      </div>
    </div>
  );
};
