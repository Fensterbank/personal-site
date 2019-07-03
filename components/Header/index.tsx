import styled from '../../theme';
import { Fading } from '../Fading';
import Link from 'next/link';

export const Root = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 14rem;
  flex-shrink: 0;

  & img {
    display: block;
    margin: 2em auto;
    width: 40em;
    max-width: 70%;
  }

  & p {
    color: rgba(255,255,255,0.6);
    font-size: 1.5em;
    margin: 0;
  }
`;

export const Header = () => {
  return <Root>
    <Fading delay={500}><Link href="/"><a><img src="/static/logo.png" alt="Logo Frédéric Bolvin IT &amp; Entwicklung" /></a></Link></Fading>
    <Fading delay={1000}><p>IT Freelancer ◈ Open Source Enthusiast ◈ Building web apps</p></Fading>
  </Root>
};