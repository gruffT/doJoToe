import { WINNER_X, WINNER_O, TIE } from '../Status/Statuses';
import { SquareValue, VALUE_O, VALUE_X } from './Square/Square';
// import { SquareValue } from './Square/Square';

export const createMaskForValue = (board: SquareValue[], value: string) =>
  // eslint-disable-next-line no-bitwise,implicit-arrow-linebreak
  board.reduce((prev, cur, idx) => prev | (cur === value ? 2 ** idx : 0), 0b0);

// eslint-disable-next-line no-bitwise,max-len
const checkMasksAgainstBoard = (masks: number[], board: number) => masks.some((mask) => (mask & board) === mask);
// eslint-disable-next-line max-len
const checkBoardForIncompleteSquare = (board: SquareValue[]) => board.some((square) => square === undefined);

// eslint-disable-next-line @typescript-eslint/no-unused-vars,max-len
// export const checkForWinner = (board: SquareValue[]): 'Winner X' | 'Winner O' | 'Tie' | undefined => undefined;
export const checkForWinner = (board: SquareValue[]): string | undefined => {
  const winningMasks = [
    0b111000000, 0b000111000, 0b000000111,
    0b100100100, 0b010010010, 0b001001001,
    0b100010001, 0b001010100,
  ];
  const xBoard = createMaskForValue(board, VALUE_X);
  const oBoard = createMaskForValue(board, VALUE_O);
  if (checkMasksAgainstBoard(winningMasks, xBoard)) {
    return WINNER_X;
  } if (checkMasksAgainstBoard(winningMasks, oBoard)) {
    return WINNER_O;
  } if (checkBoardForIncompleteSquare(board)) {
    return undefined;
  }
  return TIE;
};
