import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 6rem;
  padding: 0.5rem 2rem;

  background-color: #eeeeee;
  border: 0.1rem solid #ebebeb;

  .description {
    display: flex;
    align-items: center;

    .avatar {
      padding-right: 2rem;
    }

    .contact-description {
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      .name {
        font-size: 1.6rem;
        font-weight: 400;
      }

      .last-seen {
        font-size: 1.2rem;
        font-weight: 500;
        color: #9b9b9b;
      }
    }
  }

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
