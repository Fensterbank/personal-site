import { FC, useState, useEffect } from 'react';

import { SectionProps } from '.';
import { ContactForm } from '../ContactForm';
import { SocialLinks } from '../SocialLinks';
import { VerticalGridLines } from '../VericalGridLines';

const Contact: FC<SectionProps> = ({ active }) => {
  const [showSocialLinks, setShowSocialLinks] = useState(active);

  useEffect(() => {
    if (active) {
      setShowSocialLinks(true);
    } else if (!active && showSocialLinks) {
      window.setTimeout(() => setShowSocialLinks(false), 500);
    }
  }, [active]);

  return (
    <section
      data-anchor="contact"
      className="section bg-no-repeat bg-cover bg-center section-contact"
    >
      <VerticalGridLines />
      <div className="grid grid-cols-24 relative z-10">
        <div className="col-span-7" />
        <div className="col-span-10">
          <h2 className="text-green-fbit">let’s talk</h2>
          <div className="text-white text-3xl mb-6">
            Benötigen Sie Unterstützung? Gerne können Sie das Kontaktformular
            ausfüllen oder mich einfach auf einen der zahl&shy;reichen Wege
            un&shy;verbindlich kon&shy;tak&shy;tieren.
          </div>
          {showSocialLinks ? <SocialLinks /> : <div className="h-8" />}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;
