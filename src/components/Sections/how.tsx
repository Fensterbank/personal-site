import { FC } from 'react';

import { SectionProps } from '.';
import { Skillset } from '../Skillset';
import { VerticalGridLines } from '../VericalGridLines';

const How: FC<SectionProps> = () => (
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
      <div className="col-span-8" />
      <div className="col-span-8">
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
      <div className="col-span-8" />
      <div className="col-span-6" />
      <div className="col-span-12 flex justify-between">
        <Skillset direction="right" speed={3}>
          {[
            {
              title: 'C#',
              image: 'csharp.svg',
              href: 'https://de.wikipedia.org/wiki/C-Sharp',
            },
            {
              title: 'CSS3',
              href: 'https://de.wikipedia.org/wiki/Cascading_Style_Sheets#CSS3',
            },
            {
              title: 'HTML5',
              href: 'https://de.wikipedia.org/wiki/HTML5',
            },
            {
              title: 'JavaScript',
              href: 'https://developer.mozilla.org/de/docs/Web/JavaScript',
            },
            {
              title: 'NextJS',
              href: 'https://nextjs.org/',
            },
            {
              title: 'NodeJS',
              href: 'https://nodejs.org/',
            },
            {
              title: 'PHP',
              href: 'http://php.net/',
            },
            {
              title: 'Ruby on Rails',
              image: 'rails.svg',
              href: 'https://www.ruby-lang.org/de/',
            },
            {
              title: 'React',
              href: 'https://reactjs.org/',
            },
            {
              title: 'Redux',
              href: 'https://redux.js.org/',
            },
            {
              title: 'Ruby',
              href: 'https://www.ruby-lang.org/de/',
            },
            {
              title: 'TypeScript',
              href: 'https://www.typescriptlang.org/',
            },
          ]}
        </Skillset>
        <Skillset direction="left" speed={4}>
          {[
            {
              title: 'Git',
              href: 'https://git-scm.com/',
            },
            {
              title: 'MySQL',
              href: 'https://www.mysql.com/',
            },
            {
              title: 'NPM',
              href: 'https://www.npmjs.com/',
            },
            {
              title: 'Microsoft SharePoint',
              image: 'sharepoint.png',
              href: 'http://office.microsoft.com/de-de/sharepoint/',
            },
            {
              title: 'Microsoft SQL Server',
              image: 'sql-server.png',
              href: 'https://www.microsoft.com/de-de/sql-server/',
            },
            {
              title: 'VS Code',
              image: 'visual-studio-code.svg',
              href: 'https://visualstudio.microsoft.com/',
            },
            {
              title: 'Webpack',
              href: 'https://webpack.js.org/',
            },
            {
              title: 'Linux',
              href: 'https://www.linuxfoundation.org/',
            },
            {
              title: 'Microsoft Windows',
              image: 'microsoft-windows.svg',
              href: 'https://www.microsoft.com/de-de/windows',
            },
          ]}
        </Skillset>
      </div>
      <div className="col-span-6" />
    </div>
  </section>
);
export default How;
