import { Menu } from '../Menu';

export const Sidebar = () => {
  return (
    <div className="sidebar h-full fixed top-0 left-0 flex flex-col justify-center">
      <div className="grid grid-cols-6 absolute top-0 left-0 w-full mt-12">
        <div className="col-span-1" />
        <div className="col-span-3">
          <img
            className="w-full"
            src="/img/f-bit_logo_white.svg"
            alt="Logo f-bit software"
          />
        </div>
        <div className="col-span-2" />
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <Menu active="Hello" />
        </div>
      </div>
    </div>
  );
};
