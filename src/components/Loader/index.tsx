import { useEffect, useState } from 'react';

export const Loader = ({ visible }) => {
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (visible === false) {
      window.setTimeout(() => setRemoved(true), 600);
    }
  }, [visible]);

  if (removed) return null;

  return (
    <div
      id="loader"
      className={`absolute w-full h-full bg-gray-900 z-50 transition-all ease-in-out duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col w-full h-full justify-center items-center">
        <img
          className="w-48 mx-auto"
          src="/img/f-bit_logo_white.svg"
          alt="Logo f-bit software"
        />
        <p className="text-lg text-white mt-15">Lade…</p>
      </div>
    </div>
  );
};
