import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  height: 100%;
  border: 0.1rem solid #ebebeb;
  background-color: #e5ddd5;
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
    background: #bbbbbb;
  }
`;

export const TextLeft = styled.div`
  position: relative;
  align-self: flex-start;
  display: flex;
  flex-direction: column;

  max-width: 85%;
  margin: 0.3rem 2rem;
  padding: 1rem;

  background-color: #ffffff;
  border-radius: 1rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 1.5rem;
    height: 1rem;

    background-color: inherit;
    border-radius: 0.2rem;
    transform: translateX(-35%);

    clip-path: polygon(0 0, 100% 0, 100% 100%, 35% 100%);
  }

  .text {
    width: 100%;
    align-self: center;
    justify-self: flex-start;
    font-size: 1.6rem;
  }

  .hour-status {
    align-self: flex-end;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 1rem;
    color: #9b9b9b;

    .hour {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
`;

export const TextRight = styled(TextLeft)`
  align-self: flex-end;
  background-color: #dcf8c6;

  &::after {
    left: 100%;
    transform: translateX(-65%);
    clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%);
  }
`;
