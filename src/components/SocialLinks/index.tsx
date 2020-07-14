import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

import { Links } from '@@/constants';

import { ExternalLink } from '../ExternalLink';

export const SocialLinks = () => {
  const [items, setItems] = useState([]);
  const transitions = useTransition(items, (link) => link.icon.iconName, {
    from: { transform: 'translate3d(0, 40px,0)', position: 'absolute' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0, 40px,0)' },
    config: config.wobbly,
  });

  useEffect(() => {
    if (items.length !== Links.length)
      window.setTimeout(() => setItems([...items, Links[items.length]]), 300);
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
    </div>
  );
};
