import { FC, useState, useEffect } from 'react';

import { TechSkills, CodeSkills } from '@@/constants';

import { SectionProps } from '.';
import { Skillset } from '../Skillset';
import { VerticalGridLines } from '../VericalGridLines';

const How: FC<SectionProps> = ({ active }) => {
  const [showSkills, setShowSkills] = useState(active);

  useEffect(() => {
    if (active) {
      setShowSkills(true);
    } else if (!active && showSkills) {
      window.setTimeout(() => setShowSkills(false), 500);
    }
  }, [active]);

  return (
    <section
      data-anchor="how"
      className="section bg-no-repeat bg-cover bg-center section-how"
    >
      <VerticalGridLines />
      <div className="grid grid-cols-24 relative z-10 mb-10">
        <div className="col-span-6" />
        <div className="col-span-12">
          <h2 className="text-white text-green-fbit text-center smaller">
            Technology matters.
          </h2>
        </div>
        <div className="col-span-6" />
        <div className="col-span-7" />
        <div className="col-span-10">
          <p className="text-white text-2xl text-center mb-8">
            Bei der Umsetzung von Projekten begleite ich Sie vom ersten Prototyp
            bis zur fertigen Lösung. Dabei lege ich Wert auf den Einsatz von
            erprobten state-of-the-art Technologien, um mit wenig Aufwand
            möglichst moderne und nachhaltige Lösungen zu entwickeln.
          </p>
          <p className="text-white text-2xl text-center mb-8">
            Benötigen Sie Unterstützung in Ihrem Projekt? Gerne können Sie{' '}
            <a className="font-bold underline" href="#contact">
              mich unverbindlich kontaktieren
            </a>
            .
          </p>
        </div>
        <div className="col-span-7" />
        <div className="col-span-7" />
        {showSkills && (
          <div className="col-span-10 flex justify-between">
            <Skillset direction="right" speed={3}>
              {TechSkills}
            </Skillset>
            <Skillset direction="left" speed={4}>
              {CodeSkills}
            </Skillset>
          </div>
        )}
        <div className="col-span-7" />
      </div>
    </section>
  );
};
export default How;
