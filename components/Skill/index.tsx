import styled from '../../theme';
import { FunctionComponent } from 'react';
import { useSpring, animated, config } from 'react-spring';

export const Root = styled(animated.img)`
  height: 90%;
  max-width: 90%;
`;

interface iProps {
  image?: string;
  title: string;
};

export const Skill: FunctionComponent<iProps> = ({image, title}) => {
  const props = {} //useSpring({ left: `${(index * 2 + (tick / 5))}em`, config: config.slow });

  return <Root style={props} src={image ? `/static/skills/${image}` : `/static/skills/${title.toLowerCase()}.svg` } title={title} />
}