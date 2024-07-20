import styled from '@emotion/styled';

export const TileGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .tile {
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #bcced9;
    color: #fcfcfc;
    font-family: 'Atkinson Hyperlegible';
    font-weight: bold;

    transform-style: preserve-3d;
    transition: 0.6s 0.1s;

    &.show {
      transform: rotateY(180deg);
      background: #304859;
      color: #304859;
    }
  }
`;
