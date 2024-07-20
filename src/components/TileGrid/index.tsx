import { randomIntArrayInRange, shuffleNumberArray } from '../../utils';
import Tile from './Tile';
import { TileGridContainer } from './TileGrid.styled';

const TileGrid = ({ gridSize = 4 }: { gridSize?: 4 | 6 }) => {
  const noOfTiles = gridSize * gridSize;

  const randomArray = randomIntArrayInRange(0, 99, noOfTiles / 2);
  const shuffledTilesArray = shuffleNumberArray([
    ...randomArray,
    ...randomArray,
  ]);

  const TileGridContainerStyle =
    gridSize === 4
      ? { fontSize: '56px', maxWidth: '532px', gap: '20px' }
      : { fontSize: '44px', maxWidth: '572px', gap: '16px' };

  const TileStyle =
    gridSize === 4
      ? { width: '118px', height: '118px' }
      : { width: '82px', height: '82px' };

  return (
    <TileGridContainer style={TileGridContainerStyle}>
      {shuffledTilesArray.map((number, index) => (
        <Tile key={index} style={TileStyle}>
          {number}
        </Tile>
      ))}
    </TileGridContainer>
  );
};

export default TileGrid;
