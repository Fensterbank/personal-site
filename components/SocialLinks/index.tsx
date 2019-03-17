import styled from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXing, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export const Root = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255,255,255,0.2);
  border-radius: 0.3em;
  padding: 0 2em;
`

export const Link = styled.a`
  margin: 1rem;
  color: #fff;

  &:visited {
    color: #fff;
  }
`;

const links = [
  {
    href: 'https://www.linkedin.com/in/fre-bo',
    icon: faLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://www.xing.com/profile/Frederic_Bolvin',
    icon: faXing,
    title: 'XING'
  },
  {
    href: 'https://github.com/Fensterbank',
    icon: faGithub,
    title: 'Github',
  },
  {
    href: 'https://stackoverflow.com/users/story/1708477',
    icon: faStackOverflow,
    title: 'StackOverflow Developer Story',
  }
]

export const SocialLinks = () => (
  <Root>
    {links.map(link =>
      <Link key={link.icon.iconName} target="_blank" href={link.href} title={link.title}>
        <FontAwesomeIcon size="2x" icon={link.icon} />
      </Link>
    )}
  </Root>
)