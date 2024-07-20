import { CSSProperties, ReactNode, useState } from 'react';

const Tile = ({
  style,
  children,
}: {
  style?: CSSProperties | undefined;
  children: ReactNode;
}) => {
  const [showTile, setShowTile] = useState(true);
  let tileClasses = 'tile';

  if (showTile) {
    tileClasses += ' show';
  }

  return (
    <span
      style={style}
      className={tileClasses}
      onClick={() => setShowTile((prev: boolean) => !prev)}
    >
      {children}
    </span>
  );
};

export default Tile;
