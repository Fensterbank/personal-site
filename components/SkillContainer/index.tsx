import styled from '../../theme';

export const SkillContainer = styled.div`
  background-color: rgba(153, 153, 153, 0.35);
  border-radius: 0.5em;
  flex-grow: 0;
  width: 100%;
  margin-top: 2em;
  border: 1px solid rgba(255, 255, 255, 0.29);
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) { 
    flex-flow: column;
  }
`;
