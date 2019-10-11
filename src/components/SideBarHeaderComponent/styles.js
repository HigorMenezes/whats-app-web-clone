import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 6rem;
  padding: 0.5rem 2rem;

  background-color: #eeeeee;
  border-right: 0.1rem solid #dbdbdb;

  .actions {
    display: flex;
    align-items: center;

    .icon {
      width: 2.4rem;
      height: 2.4rem;
      color: #80868a;
      cursor: pointer;

      &:not(:first-child) {
        margin-left: 1.5rem;
      }
    }
  }
`;
