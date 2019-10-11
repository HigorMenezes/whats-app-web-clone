import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  min-width: 700px;
  height: 100vh;
  position: relative;

  background-color: #d7dbd6;

  .wrapper {
    width: 100%;
    height: 13rem;
    background-color: #369588;
    z-index: 0;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }

  ${media.greaterThan('large')`
  .content {
    display: flex;
    width: 80%;
    height: 95%;}`}
`;
