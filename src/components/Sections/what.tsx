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
      <div className="col-span-9" />
      <div className="col-span-8">
        <h2 className="text-white">Digitale Transformation</h2>
        <div className="text-white text-2xl text-justify">
          Wir schaffen webbasierte Unternehmens&shy;lösungen mit Mehwert. Von
          Individual&shy;entwick&shy;lungen über
          Prozess&shy;automa&shy;tisierungen bis hin zu komplexen Plattformen -
          wir sind Ihr zuverlässiger Ansprech&shy;partner.
        </div>
      </div>
    </div>
  </section>
);
export default What;
