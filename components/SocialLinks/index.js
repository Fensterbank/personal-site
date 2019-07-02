import styled from '../../theme';
import { Hidden } from '../Hidden';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXing, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { useTransition, animated, config } from 'react-spring';
import { useState, useEffect } from 'react';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 2em;
  width: 11em;

  & > div:nth-child(1) {
    left: 0;
  }

  & > div:nth-child(2) {
    left: 3em;
  }

  & > div:nth-child(3) {
    left: 6em;
  }

  & > div:nth-child(4) {
    left: 9em;
  }
`;

export const Link = styled.a`
  color: #fff;

  &:visited {
    color: #fff;
  }
`;

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
    title: 'XING'
  },
  {
    index: 2,
    href: 'https://github.com/Fensterbank',
    icon: faGithub,
    title: 'Github',
  },
  {
    index: 3,
    href: 'https://stackoverflow.com/users/story/1708477',
    icon: faStackOverflow,
    title: 'StackOverflow Developer Story',
  }
]

export const SocialLinks = () => {
  const [items, setItems] = useState([]);
  const transitions = useTransition(items, link => link.icon.iconName, {
    from: { transform: 'translate3d(0, 40px,0)', position: 'absolute' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0, 40px,0)' },
    config: config.wobbly,
  });

  useEffect(() => {
    if (items.length !== links.length)
      window.setTimeout(() => setItems([...items, links[items.length]]), 300);
    else
      console.log('finished');
  }, [items]);

  // TODO: These links are not rendered on page load, therefore will not be indexed by search engines. Should be fixed.
  return <Root>
    {transitions.map(({ item, props, key }) =>
      <animated.div key={key} style={props}>
        <Link key={item.icon.iconName} target="_blank" href={item.href} title={item.title}>
          <FontAwesomeIcon size="2x" icon={item.icon} alt={item.title} />
        </Link>
      </animated.div>
    )}
    <Hidden>
      {links.map(item => <Link key={item.icon.iconName} target="_blank" href={item.href} title={item.title}>{item.title}</Link>)}
    </Hidden>
  </Root>
}
