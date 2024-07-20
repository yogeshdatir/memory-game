import { CSSProperties } from 'react';

const Tile = ({ style }: { style?: CSSProperties | undefined }) => {
  return (
    <span style={style} className="tile">
      24
    </span>
  );
};

export default Tile;
