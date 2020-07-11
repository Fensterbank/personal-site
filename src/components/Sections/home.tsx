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
      <div className="col-span-8 pl-2">
        <h2 className="text-green-fbit">Hallo.</h2>
        <div className="text-white text-3xl">
          Ich bin ein erfahrener Soft&shy;ware&shy;entwickler mit
          Schwer&shy;punkt im Bereich der mo&shy;der&shy;nen
          Webe&shy;ntwicklung.
        </div>
      </div>
    </div>
  </section>
);
export default Home;
