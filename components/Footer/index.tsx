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
`;

export const LinkSection = styled.div`
  a {
    margin: 0 0.2em;
  }
`;

export const Footer = () => (
  <Root>
    <span>© Frédéric Bolvin</span>
    <SocialLinks />
    <LinkSection>
      <Link href="/impress"><a>Impressum</a></Link>
      <Link href="/privacy"><a>Datenschutz</a></Link>
    </LinkSection>
  </Root>
)