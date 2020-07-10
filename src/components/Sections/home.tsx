import { FC } from 'react';

import { SectionProps } from '.';
import { VerticalGridLines } from '../VericalGridLines';

const Home: FC<SectionProps> = () => (
  <section
    data-anchor="home"
    className="section bg-no-repeat bg-cover bg-center section-home"
  >
    <VerticalGridLines />
    <div className="grid grid-cols-24 relative z-10">
      <div className="col-span-12" />
      <div className="col-span-7 pl-2">
        <h2 className="text-green-fbit">Hallo.</h2>
        <div className="text-white text-3xl text-justify">
          Ich bin ein erfahrener Software&shy;entwickler mit Schwer&shy;punkt im
          Bereich der modernen Webe&shy;ntwicklung.
        </div>
      </div>
    </div>
  </section>
);
export default Home;
