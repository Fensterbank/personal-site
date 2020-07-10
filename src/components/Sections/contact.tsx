import { FC } from 'react';

import { SectionProps } from '.';
import { SocialLinks } from '../SocialLinks';
import { VerticalGridLines } from '../VericalGridLines';

const Contact: FC<SectionProps> = () => (
  <section
    data-anchor="contact"
    className="section bg-no-repeat bg-cover bg-center section-contact"
  >
    <VerticalGridLines />
    <div className="grid grid-cols-24 relative z-10">
      <div className="col-span-7" />
      <div className="col-span-10">
        <h2 className="text-green-fbit">let’s talk</h2>
        <div className="text-white text-3xl text-justify mb-6">
          Benötigen Sie Unterstützung? Gerne können Sie das Kontaktformular
          ausfüllen oder mich einfach auf einen der zahlreichen Wege
          unverbindlich kontaktieren.
        </div>
        <SocialLinks />
      </div>
    </div>
  </section>
);
export default Contact;
