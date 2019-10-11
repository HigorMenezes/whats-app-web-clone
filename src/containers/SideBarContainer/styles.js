import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 30%;
  min-width: ${props => props.theme.sideBar.width};
  height: 100%;

  font-size: 1.6rem;
`;
