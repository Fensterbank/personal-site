import Link from 'next/link';
import styled from '../../theme';
import { SocialLinks } from '../SocialLinks';
import { useEffect } from 'react';

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
  a, span {
    margin: 0 0.5em;
  }
`;

export const Footer = () => {
  useEffect(() => {
    console.log('Footer did mount');

    return () => {
      console.log('Footer will unmount');
    }
  }, []);

  return <Root>
    <SocialLinks />
    <LinkSection>
      <span>© Frédéric Bolvin</span>
      <Link href="/impress"><a>Impressum</a></Link>
      <Link href="/privacy"><a>Datenschutz</a></Link>
    </LinkSection>
  </Root>
}