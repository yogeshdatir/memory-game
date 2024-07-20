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
    font-size: 44px;
    font-weight: bold;
  }
`;
