import { FC } from 'react';

import { SectionProps } from '.';
import { VerticalGridLines } from '../VericalGridLines';

const Home: FC<SectionProps> = () => (
  <section
    data-anchor="home"
    className="section bg-no-repeat bg-cover bg-center section-home"
  >
    <VerticalGridLines />
    <div className="md:hidden absolute top-0 left-0 w-full px-28 pt-10">
      <img
        className="w-full"
        src="/img/f-bit_logo_white.svg"
        alt="Logo f-bit software"
      />
    </div>
    <div className="grid grid-cols-24 relative z-10">
      <div className="hidden md:block col-span-8 lg:col-span-12" />
      <div className="col-span-24 px-4 md:col-span-12 lg:col-span-8 md:px-0 md:pl-2">
        <h2 className="text-green-fbit text-6xl mb-6 font-bold">Hallo.</h2>
        <div className="text-white text-2xl md:text-3xl">
          Ich bin ein erfahrener Soft&shy;ware&shy;entwickler mit
          Schwer&shy;punkt im Bereich der mo&shy;der&shy;nen
          Web&shy;ent&shy;wicklung.
        </div>
      </div>
    </div>
  </section>
);
export default Home;
