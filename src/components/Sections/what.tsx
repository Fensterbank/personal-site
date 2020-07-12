import { FC } from 'react';

import { SectionProps } from '.';
import { VerticalGridLines } from '../VericalGridLines';

const What: FC<SectionProps> = () => (
  <section
    data-anchor="what"
    className="section bg-no-repeat bg-cover bg-center section-what"
  >
    <VerticalGridLines />
    <div className="grid grid-cols-24 relative z-10">
      <div className="hidden md:block col-span-9" />
      <div className="col-span-24 px-4 md:col-span-11 lg:col-span-8 md:px-0">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
          Digitale Transformation
        </h2>
        <div className="text-white text-xl md:text-2xl">
          Ich schaffe webbasierte Unternehmens&shy;lösungen mit Mehwert. Von
          Individual&shy;entwick&shy;lungen über
          Prozess&shy;automa&shy;tisierungen bis hin zu komplexen Plattformen -
          ich bin Ihr zuverlässiger Ansprech&shy;partner.
        </div>
      </div>
    </div>
  </section>
);
export default What;
