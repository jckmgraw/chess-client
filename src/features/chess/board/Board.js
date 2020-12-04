import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RowVariation1, RowVariation2 } from './Rows';
import {
  setMouseDown,
  selectBoard,
  selectIsMouseDown,
  selectMovingPiece,
  selectMovingPieceStartingPos,
} from './boardSlice';
import {
  useWindowSize,
  useMousePosition,
} from '../../../utilGeneral/utilGeneral';
import styles from './Board.module.scss';
import PieceDraggable from '../piece/PieceDraggable';

// TODO: have board CSS use ENV vars
const Board = () => {
  const dispatch = useDispatch();
  const [windowWidth, windowHeight] = useWindowSize();
  const [mouseX, mouseY] = useMousePosition();
  const isMouseDown = useSelector(selectIsMouseDown);
  const movingPiece = useSelector(selectMovingPiece);
  const movingPieceStartingPos = useSelector(selectMovingPieceStartingPos);
  const board = useSelector(selectBoard);
  if (isMouseDown && movingPiece !== 0) {
  }
  return (
    <div
      className={styles.mainContainer}
      onMouseDown={() => dispatch(setMouseDown(true))}
      onMouseUp={() => dispatch(setMouseDown(false))}
      onMouseLeave={() => dispatch(setMouseDown(false))}
    >
      <div className={styles.board}>
        <PieceDraggable
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          posX={mouseX}
          posY={mouseY}
          board={board}
          isMouseDown={isMouseDown}
          movingPiece={movingPiece}
          movingPieceStartingPos={movingPieceStartingPos}
        />
        <RowVariation2 row={'8'} />
        <RowVariation1 row={'7'} />
        <RowVariation2 row={'6'} />
        <RowVariation1 row={'5'} />
        <RowVariation2 row={'4'} />
        <RowVariation1 row={'3'} />
        <RowVariation2 row={'2'} />
        <RowVariation1 row={'1'} />
      </div>
      <div>
        mouseX: {mouseX}, mouseY: {mouseY}
      </div>
    </div>
  );
};

export default Board;
