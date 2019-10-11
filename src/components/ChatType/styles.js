import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 6.2rem;
  width: 100%;
  background-color: #efefef;

  .box-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    cursor: pointer;

    [class$='-icon'] {
      width: 2.6rem;
      height: 2.6rem;
      color: #949a9c;
    }
  }

  .type-input {
    width: 100%;
    min-height: 4.2rem;

    background-color: #fff;

    outline: none;
    border: none;
    border-radius: 2.1rem;
    margin: 0.4rem 1rem;
    padding: 0 2rem;
  }
`;
