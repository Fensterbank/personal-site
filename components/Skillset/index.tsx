import styled from '../../theme';
import { Skill } from '../Skill';
import { useTransition, animated, config } from 'react-spring';
import { useState, useEffect, FunctionComponent, Fragment } from 'react';

export const Root = styled(animated.div)`
  background-color: rgba(255,255,255,0.1);
  border-radius: 0.5em;
  flex-grow: 1;
  width: 40em;
  max-width: 70%;
  margin: 0 auto;
  padding: 1em;
`;

const skills = [
  {
    title: 'C#',
    image: 'csharp.svg',
  },
  {
    title: 'CSS3',
  },
  {
    title: 'Docker',
  },
  {
    title: 'Microsoft .NET',
    image: 'dotnet.svg',
  },
  {
    title: 'Git',
  },
  {
    title: 'HTML5',
  },
  {
    title: 'Java',
  },
  {
    title: 'JavaScript',
  },
  {
    title: 'Linux',
  },
  {
    title: 'Microsoft Windows',
    image: 'microsoft-windows.svg',
  },
  {
    title: 'MySQL',
  },
  {
    title: 'NextJS',
  },
  {
    title: 'NodeJS',
  },
  {
    title: 'NPM',
  },
  {
    title: 'PHP',
  },
  {
    title: 'Ruby on Rails',
    image: 'rails.svg',
  },
  {
    title: 'React',
  },
  {
    title: 'Redux',
  },
  {
    title: 'Ruby',
  },
  {
    title: 'Sass',
  },
  {
    title: 'Microsoft SharePoint',
    image: 'sharepoint.png',
  },
  {
    title: 'Microsoft SQL Server',
    image: 'sql-server.png',
  },
  {
    title: 'TypeScript',
  },
  {
    title: 'VS Code',
    image: 'visual-studio-code.svg',
  },
  {
    title: 'Microsoft Visual Studio',
    image: 'visualstudio.svg',
  },
  {
    title: 'Webpack',
  },
]

export const Skillset: FunctionComponent = () => {
  const [visible, setVisible] = useState(false)
  const transitions = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  });

  useEffect(() => {
    window.setTimeout(() => setVisible(true), 2000);
  }, []);

  return <Fragment>{transitions.map(({ item, key, props }) =>
    item && <Root key={key} style={props}>
      {skills.map(skill =>
        <Skill key={skill.title} title={skill.title} image={skill.image} />)}
    </Root>
  )}</Fragment>
};
