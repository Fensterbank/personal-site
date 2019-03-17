import styled from '../../theme';
import { FunctionComponent } from 'react';

export const Root = styled.img`
  height: 2.5em;
  max-width: 2.5em;
`;

interface iProps {
  image?: string;
  title: string;
};

export const Skill: FunctionComponent<iProps> = ({image, title}) => (
  <Root src={image ? `/static/skills/${image}` : `/static/skills/${title.toLowerCase()}.svg` } title={title} />
)