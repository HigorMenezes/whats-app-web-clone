import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 7.2rem;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #e9ebeb;
  }

  .contact-avatar {
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0.5rem 2rem;
    .avatar {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;

      background-color: #666;
    }
  }

  .contact-information {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .name-last-message {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      .name {
        font-size: 1.6rem;
        font-weight: 500;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .last-message {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #9b9b9b;

        .icon {
          width: 2rem;
          height: 2rem;
        }

        .message {
          font-size: 1.4rem;
          font-weight: 400;
          display: inline-block;
          overflow: hidden;
        }
      }
    }
  }
  .last-hour {
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: #9b9b9b;
  }
`;
