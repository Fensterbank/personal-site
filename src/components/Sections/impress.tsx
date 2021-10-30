import { FC } from 'react';

import { SectionProps } from '.';
import { ExternalLink } from '../ExternalLink';
import { Footer } from '../Footer';
import { VerticalGridLines } from '../VericalGridLines';

const Impress: FC<SectionProps> = () => (
  <section
    data-anchor="home"
    className="section bg-no-repeat bg-cover bg-center section-impress-privacy h-full w-full"
  >
    <VerticalGridLines />
    <div className="flex h-full w-full flex-col">
      <div className="grid grid-cols-24 relative z-10 flex-grow">
        <div className="hidden md:block col-span-8" />
        <div className="col-span-24 px-4 md:col-span-12 lg:col-span-8 md:px-0 md:pl-2 flex flex-col justify-center">
          <h2 className="text-green-fbit text-5xl md:text-6xl mb-6 font-bold">
            Impressum
          </h2>
          <div className="text-white text-md md:text-lg">
            <p className="mb-6">
              <strong>f-bit software</strong>
              <br />
              Frédéric Bolvin IT Softwareentwicklung
              <br />
              Öschweg 15
              <br />
              72555 Metzingen
              <br />
            </p>
            <p className="mb-6">
              <b>Mail:</b>{' '}
              <a href="mailto:fred@f-bit.software">fred@f-bit.software</a>
              <br />
              <b>Mobil:</b> 0176-24472011
            </p>
            <p className="mb-6">
              <b>USt-IdNr:</b> DE293604965
            </p>
            <h3 className="font-bold">Haftungshinweis:</h3>
            <p className="mb-6">
              Der Betreiber übernimmt keine Haftung für Inhalte externer Links.
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren
              Betreiber verantwortlich.
            </p>
            <h3 className="font-bold">Bildnachweise:</h3>
            <p className="pl-2">
              <span className="font-bold">what I do:</span> Foto von{' '}
              <ExternalLink
                className="underline"
                href="https://unsplash.com/photos/_UeY8aTI6d0"
              >
                Sergey Zolkin
              </ExternalLink>
            </p>
            <p className="pl-2">
              <span className="font-bold">how I do it:</span> Foto von{' '}
              <ExternalLink
                className="underline"
                href="https://unsplash.com/photos/QQ9LainS6tI"
              >
                Nate Grant
              </ExternalLink>
            </p>
            <p className="pl-2">
              <span className="font-bold">let’s talk:</span> Foto von{' '}
              <ExternalLink
                className="underline"
                href="https://unsplash.com/photos/_S6eV1Uz5A8"
              >
                John-Mark Smith
              </ExternalLink>
            </p>
            <p className="pl-2">
              <span className="font-bold">impressum / datenschutz:</span> Foto
              von{' '}
              <ExternalLink
                className="underline"
                href="https://unsplash.com/photos/Q1p7bh3SHj8"
              >
                NASA
              </ExternalLink>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </section>
);
export default Impress;
