import styled from '../../theme';
import { FunctionComponent, CSSProperties } from 'react';
import { animated } from 'react-spring';

const Root = styled(animated.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Icon = styled.img`
  height: 90%;
  max-width: 90%;
`;

interface iProps {
  image?: string;
  title: string;
  href: string;
  style: CSSProperties;
};

export const Skill: FunctionComponent<iProps> = ({ image, title, style, href }) =>
  <Root style={style} target="_blank" href={href} onClick={() => window._paq ? window._paq.push(['trackLink', href, 'link']) : null}><Icon src={image ? `/static/skills/${image}` : `/static/skills/${title.toLowerCase()}.svg`} title={title} /></Root>
  