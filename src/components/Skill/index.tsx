import { FunctionComponent, CSSProperties } from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';

const Root = styled(animated.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  @media (max-width: 750px) {
    cursor: default;
  }
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
}

export const Skill: FunctionComponent<iProps> = ({
  image,
  title,
  style,
  href,
}) => {
  let url;
  let onClick;
  let target;
  if (window && window.innerWidth <= 750) {
    url = '#';
    onClick = undefined;
    target = undefined;
  } else {
    url = href;
    onClick = (window as any)._paq
      ? () => (window as any)._paq.push(['trackLink', href, 'link'])
      : undefined;
    target = '_blank';
  }

  return (
    <Root style={style} target={target} href={url} onClick={onClick}>
      <Icon
        src={image ? `/skills/${image}` : `/skills/${title.toLowerCase()}.svg`}
        title={title}
      />
    </Root>
  );
};
