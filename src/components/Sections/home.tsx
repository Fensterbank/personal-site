'use client'

import { FC } from 'react'

import { SectionProps } from '.'
import { Fading } from '../Fading'
import { VerticalGridLines } from '../VerticalGridLines'
import { ExternalLink } from '../ExternalLink'

const Home: FC<SectionProps> = () => (
  <section
    data-anchor="home"
    className="bg-gray-900 bg-center bg-no-repeat bg-cover section section-home"
  >
    <VerticalGridLines />
    <div
      className="absolute top-0 left-0 px-28 pt-10 w-full md:hidden"
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
    <div className="grid relative z-10 grid-cols-24">
      <div className="hidden col-span-8 md:block lg:col-span-12" />
      <div className="px-4 col-span-24 md:col-span-12 lg:col-span-10 md:px-0 md:pl-2">
        <Fading delay={1600}>
          <>
            <h2 className="mb-6 text-6xl font-bold text-green-fbit">Hallo.</h2>
            <div className="text-2xl text-white md:text-3xl">
              Ich bin ein erfahrener Soft&shy;ware&shy;entwickler mit
              Schwer&shy;punkt im Bereich der mo&shy;der&shy;nen
              Web&shy;ent&shy;wicklung.
            </div>
            <div className="mt-6 md:hidden">
              <ExternalLink
                href="https://blog.f-bit.software"
                keepReferrer={true}
                className="inline-block px-4 py-2 text-lg text-white rounded-md transition duration-300 bg-fbit hover:bg-green-600"
              >
                Mein Blog
              </ExternalLink>
            </div>
          </>
        </Fading>
      </div>
    </div>
  </section>
)
export default Home
