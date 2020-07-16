import { FC } from 'react';

import { SectionProps } from '.';
import { Fading } from '../Fading';
import { VerticalGridLines } from '../VericalGridLines';

const Home: FC<SectionProps> = () => (
  <section
    data-anchor="home"
    className="section bg-gray-900 bg-no-repeat bg-cover bg-center section-home"
  >
    <VerticalGridLines />
    <div
      className="md:hidden absolute top-0 left-0 w-full px-28 pt-10"
      id="logo"
    >
      <Fading delay={1000}>
        <img
          className="w-full"
          src="/img/f-bit_logo_white.svg"
          alt="Logo f-bit software"
        />
      </Fading>
    </div>
    <div className="grid grid-cols-24 relative z-10">
      <div className="hidden md:block col-span-8 lg:col-span-12" />
      <div className="col-span-24 px-4 md:col-span-12 lg:col-span-10 md:px-0 md:pl-2">
        <Fading delay={1600}>
          <>
            <h2 className="text-green-fbit text-6xl mb-6 font-bold">Hallo.</h2>
            <div className="text-white text-2xl md:text-3xl">
              Ich bin ein erfahrener Soft&shy;ware&shy;entwickler mit
              Schwer&shy;punkt im Bereich der mo&shy;der&shy;nen
              Web&shy;ent&shy;wicklung.
            </div>
          </>
        </Fading>
      </div>
    </div>
  </section>
);
export default Home;
