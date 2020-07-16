import { FC, useState, useEffect } from 'react';

import { Links } from '@@/constants';

import { SectionProps } from '.';
import { ContactForm } from '../ContactForm';
import { Footer } from '../Footer';
import { HiddenLinkList } from '../HiddenLinkList';
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
      className="section bg-gray-900 bg-no-repeat bg-cover bg-center section-contact "
    >
      <VerticalGridLines />
      <div className="flex h-full w-full flex-col pb-16 md:pb-18 lg:pb-15 xxl:pb-15">
        <div className="grid grid-cols-24 relative z-10 flex-grow">
          <div className="hidden md:block col-span-7" />
          <div className="col-span-24 px-4 md:col-span-12 md:px-0 flex flex-col justify-center h-full">
            <h2 className="text-green-fbit text-4xl md:text-6xl mb-2 md:mb-6 font-bold">
              let’s talk
            </h2>
            <div className="text-white text-lg md:text-2xl lg:text-xl xxl:text-2xl mb-2 md:mb-6">
              Benötigen Sie Unterstützung? Gerne können Sie das Kontaktformular
              ausfüllen oder mich einfach auf einen der zahl&shy;reichen Wege
              un&shy;verbindlich kontaktieren.
            </div>
            {showSocialLinks ? <SocialLinks /> : <div className="h-8" />}
            <HiddenLinkList collection={Links} />
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer fixed />
    </section>
  );
};
export default Contact;
