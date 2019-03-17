import styled from '../../theme';

export const Root = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  & > img {
    display: block;
    margin: 2em;
    width: 40em;
    max-width: 70%;
  }

  & > p {
    color: rgba(255,255,255,0.6);
    font-size: 1em;
    margin: 0;
  }
`;

export const Header = () => (
  <Root>
    <img src="/static/logo.png" />
    <p>Expert Software Engineer ◈ Open Source Enthusiast ◈ Freelancer</p>
  </Root>
)