import styled from '../../theme';
import { Skill } from '../Skill';

export const Root = styled.div`
  background-color: rgba(255,255,255,0.1);
  border-radius: 0.5em;
  flex-grow: 1;
  width: 40em;
  max-width: 70%;
  margin: 2em auto;
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

export const Skillset = () => (
  <Root>
    {skills.map(skill =>
      <Skill key={skill.title} title={skill.title} image={skill.image} />)}
  </Root>
)