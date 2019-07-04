import styled from '../../theme';

export const SkillContainer = styled.div`
  flex-grow: 0;
  width: 100%;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) { 
    flex-flow: column;
  }
`;
