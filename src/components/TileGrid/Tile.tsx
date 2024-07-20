import { CSSProperties, ReactNode } from 'react';

const Tile = ({
  style,
  children,
}: {
  style?: CSSProperties | undefined;
  children: ReactNode;
}) => {
  return (
    <span style={style} className="tile">
      {children}
    </span>
  );
};

export default Tile;
