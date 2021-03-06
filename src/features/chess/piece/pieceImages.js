import bishopBlack from './images/bishop_black.png';
import bishopWhite from './images/bishop_white.png';
import horseBlack from './images/horse_black.png';
import horseWhite from './images/horse_white.png';
import kingBlack from './images/king_black.png';
import kingWhite from './images/king_white.png';
import pawnWhite from './images/pawn_white.png';
import pawnBlack from './images/pawn_black.png';
import queenBlack from './images/queen_black.png';
import queenWhite from './images/queen_white.png';
import rookBlack from './images/rook_black.png';
import rookWhite from './images/rook_white.png';
import ENV from '../../../env';

export const getPieceImage = (piece) => {
  if (piece === ENV.WHITE_PAWN) {
    return pawnWhite;
  } else if (piece === ENV.BLACK_PAWN) {
    return pawnBlack;
  } else if (piece === ENV.WHITE_ROOK) {
    return rookWhite;
  } else if (piece === ENV.BLACK_ROOK) {
    return rookBlack;
  } else if (piece === ENV.WHITE_KNIGHT) {
    return horseWhite;
  } else if (piece === ENV.BLACK_KNIGHT) {
    return horseBlack;
  } else if (piece === ENV.WHITE_BISHOP) {
    return bishopWhite;
  } else if (piece === ENV.BLACK_BISHOP) {
    return bishopBlack;
  } else if (piece === ENV.WHITE_QUEEN) {
    return queenWhite;
  } else if (piece === ENV.BLACK_QUEEN) {
    return queenBlack;
  } else if (piece === ENV.WHITE_KING) {
    return kingWhite;
  } else if (piece === ENV.BLACK_KING) {
    return kingBlack;
  }
};

export const getStringFromPiece = (piece) => {
  if (piece === ENV.WHITE_PAWN) {
    return 'white pawn';
  } else if (piece === ENV.BLACK_PAWN) {
    return 'black pawn';
  } else if (piece === ENV.WHITE_ROOK) {
    return 'white rook';
  } else if (piece === ENV.BLACK_ROOK) {
    return 'black rook';
  } else if (piece === ENV.WHITE_KNIGHT) {
    return 'white knight';
  } else if (piece === ENV.BLACK_KNIGHT) {
    return 'black knight';
  } else if (piece === ENV.WHITE_BISHOP) {
    return 'white bishop';
  } else if (piece === ENV.BLACK_BISHOP) {
    return 'black bishop';
  } else if (piece === ENV.WHITE_QUEEN) {
    return 'white queen';
  } else if (piece === ENV.BLACK_QUEEN) {
    return 'black queen';
  } else if (piece === ENV.WHITE_KING) {
    return 'white king';
  } else if (piece === ENV.BLACK_KING) {
    return 'black king';
  }
};
