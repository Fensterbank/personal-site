import { FunctionComponent, CSSProperties } from 'react';
import { animated } from 'react-spring';

import { ExternalLink } from '../ExternalLink';

interface iProps {
  image?: string;
  title: string;
  href: string;
  style: CSSProperties;
}

export const Skill: FunctionComponent<iProps> = ({
  image,
  title,
  style,
  href,
}) => {
  // const Link = animated(ExternalLink);

  return (
    <animated.div className="absolute" style={style}>
      <ExternalLink className="flex justify-center items-center" href={href}>
        <img
          alt={title}
          className="skill"
          src={
            image ? `/skills/${image}` : `/skills/${title.toLowerCase()}.svg`
          }
          title={title}
        />
      </ExternalLink>
    </animated.div>
  );
};
