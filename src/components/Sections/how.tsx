import { FC, useState, useEffect } from 'react';

import { TechSkills, CodeSkills } from '@@/constants';

import { SectionProps } from '.';
import { HiddenLinkList } from '../HiddenLinkList';
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
      className="section bg-gray-900 bg-no-repeat bg-cover bg-center section-how"
    >
      <VerticalGridLines />
      <div className="grid grid-cols-24 relative z-10 mb-10">
        <div className="hidden md:block col-span-6" />
        <div className="col-span-24 px-4 md:col-span-12 lg:px-0">
          <h2 className="text-green-fbit lg:text-center text-4xl md:text-6xl mb-6 font-bold">
            Technology matters.
          </h2>
        </div>
        <div className="hidden md:block col-span-6" />
        <div className="hidden md:block md:col-span-6 lg:col-span-7" />
        <div className="col-span-24 px-4 md:col-span-12 lg:col-span-10 lg:px-0">
          <p className="text-white text-lg md:text-2xl lg:text-xl lg:text-center xxl:text-2xl mb-4 md:mb-8">
            Bei der Umsetzung von Projekten begleite ich Sie vom ersten Prototyp
            bis zur fertigen Lösung. Dabei lege ich Wert auf den Einsatz von
            erprobten state-of-the-art Technologien, um mit wenig Aufwand
            möglichst moderne und nachhaltige Lösungen zu entwickeln.
          </p>
          <p className="text-white text-lg md:text-2xl lg:text-xl lg:text-center xxl:text-2xl mb-4 md:mb-8">
            Benötigen Sie Unterstützung in Ihrem Projekt? Gerne können Sie{' '}
            <a className="font-bold underline" href="#contact">
              mich unverbindlich kontaktieren
            </a>
            .
          </p>
        </div>
        <div className="hidden md:block md:col-span-6 lg:col-span-7" />
        <div className="hidden md:block col-span-6 lg:col-span-8" />
        <div className="hidden xs:flex col-span-24 md:col-span-12 lg:col-span-8 justify-between">
          {showSkills && (
            <>
              <Skillset direction="right" speed={3}>
                {TechSkills}
              </Skillset>
              <Skillset direction="left" speed={4}>
                {CodeSkills}
              </Skillset>
            </>
          )}
          <HiddenLinkList collection={TechSkills} />
          <HiddenLinkList collection={CodeSkills} />
        </div>
        <div className="hidden md:block md:col-span-6 lg:col-span-8" />
      </div>
    </section>
  );
};
export default How;
