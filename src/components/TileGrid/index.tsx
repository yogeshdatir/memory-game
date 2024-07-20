import Tile from './Tile';
import { TileGridContainer } from './TileGrid.styled';

const TileGrid = () => {
  const gridSize = 4;
  return (
    <TileGridContainer style={{ maxWidth: '532px', gap: '20px' }}>
      {[...Array(gridSize * gridSize).keys()].map((_, index) => (
        <Tile key={index} style={{ width: '118px', height: '118px' }} />
      ))}
    </TileGridContainer>
  );
};

export default TileGrid;
