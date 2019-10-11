import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #f8f8f8;
  border-right: 0.1rem solid #ebebeb;

  .search-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;

    .search-input {
      height: 3.2rem;
      width: 90%;

      color: #a0a0a0;
      background-color: #ffffff;
      border: none;
      border-radius: 1.8rem;
      outline: none;
      padding: 0 3rem 0rem 15%;

      &:enabled {
        color: black;
      }
    }

    .search-icon {
      width: 2.4rem;
      height: 2.4rem;
      color: #c5c9ca;
      position: absolute;
      top: 50%;
      left: 13%;
      transform: translate(-50%, -50%);
    }
  }
`;
