import Link from 'next/link';
import styled from '../../theme';
import { SocialLinks } from '../SocialLinks';

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255,255,255,0.2);
  height: 2em;
  color: #fff;
  font-size: 0.8em;
  height: 3em;
  padding: 0 1em;
  flex-shrink: 0;

  @media (max-width: 500px) { 
    font-size: 0.6em;
  }
`;

export const LinkSection = styled.div`
  a, span {
    margin: 0 0.5em;
  }
`;

export const Footer = () => {
  return <Root>
    <SocialLinks />
    <LinkSection>
      <span>© Frédéric Bolvin</span>
      <Link href="/impress"><a>Impressum</a></Link>
      <Link href="/privacy"><a>Datenschutz</a></Link>
    </LinkSection>
  </Root>
}