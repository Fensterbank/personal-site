'use client'

import { FC } from 'react'

import { SectionProps } from '.'
import { VerticalGridLines } from '../VerticalGridLines'

const How: FC<SectionProps> = () => {
  return (
    <section
      data-anchor="how"
      className="section bg-gray-900 bg-no-repeat bg-cover bg-center section-how"
    >
      <VerticalGridLines />
      <div className="grid grid-cols-24 relative z-10">
        <div className="hidden md:block col-span-9" />
        <div className="col-span-24 px-4 md:col-span-11 lg:col-span-10 xl:col-span-9 md:px-0">
          <h2 className="text-green-fbit text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
            Technology matters.
          </h2>
          <p className="text-white text-xl md:text-2xl mb-6">
            Bei der Umsetzung von Projekten begleite ich Sie vom ersten Prototyp
            bis zur fertigen Lösung. Dabei lege ich Wert auf den Einsatz von
            erprobten state-of-the-art Technologien, um mit wenig Aufwand
            möglichst moderne und nachhaltige Lösungen zu entwickeln.
          </p>
          <p className="text-white text-xl md:text-2xl">
            Benötigen Sie Unterstützung in Ihrem Projekt? Gerne können Sie{' '}
            <a className="font-bold underline cursor-pointer" onClick={(e) => {
              e.preventDefault();
              document.querySelector('[data-anchor="contact"]')?.scrollIntoView({ behavior: 'smooth' });
            }} href="#contact">
              mich unverbindlich kontaktieren
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
export default How
