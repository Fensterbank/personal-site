import {
  faLinkedin,
  faGithub,
  faXing,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

import { ExternalLink } from '../ExternalLink';
import { Hidden } from '../Hidden';

const links = [
  {
    index: 0,
    href: 'https://www.linkedin.com/in/fre-bo',
    icon: faLinkedin,
    title: 'LinkedIn',
  },
  {
    index: 1,
    href: 'https://www.xing.com/profile/Frederic_Bolvin',
    icon: faXing,
    title: 'XING',
  },
  {
    index: 2,
    href: 'https://github.com/Fensterbank',
    icon: faGithub,
    title: 'Github',
  },
  {
    index: 3,
    href: 'https://stackoverflow.com/story/frebo',
    icon: faStackOverflow,
    title: 'StackOverflow Developer Story',
  },
];

export const SocialLinks = () => {
  const [items, setItems] = useState([]);
  const transitions = useTransition(items, (link) => link.icon.iconName, {
    from: { transform: 'translate3d(0, 40px,0)', position: 'absolute' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0, 40px,0)' },
    config: config.wobbly,
  });

  useEffect(() => {
    if (items.length !== links.length)
      window.setTimeout(() => setItems([...items, links[items.length]]), 300);
  }, [items]);

  return (
    <div className="social-links flex justify-center relative h-8 w-48 text-white">
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <ExternalLink key={item.icon.iconName} href={item.href}>
            <FontAwesomeIcon size="2x" icon={item.icon} />
          </ExternalLink>
        </animated.div>
      ))}
      <Hidden>
        {links.map((item) => (
          <ExternalLink key={item.icon.iconName} href={item.href}>
            <FontAwesomeIcon size="2x" icon={item.icon} />
          </ExternalLink>
        ))}
      </Hidden>
    </div>
  );
};
