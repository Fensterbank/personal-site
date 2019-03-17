import styled from '../../theme';

export const Root = styled.h1`
  color: ${props => props.theme.secondary};
`;

export const Header = () => (
  <Root>Frédéric Bolvin</Root>
)