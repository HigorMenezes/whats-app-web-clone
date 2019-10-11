import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #cccccc;
  }
`;
