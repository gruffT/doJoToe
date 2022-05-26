import { checkForWinner } from './WinnerCheck';
import {
  TIE, VALUE_X, WINNER_O, WINNER_X,
} from '../Status/Statuses';
import { VALUE_O } from './Square/Square';

describe('WinnerCheck', () => {
  it('should return WINNER_X for X in any row', () => {
    expect(checkForWinner([
      VALUE_X, VALUE_X, VALUE_X,
      undefined, undefined, undefined,
      undefined, undefined, undefined,
    ])).toEqual(WINNER_X);
    expect(checkForWinner([
      undefined, undefined, undefined,
      VALUE_X, VALUE_X, VALUE_X,
      undefined, undefined, undefined,
    ])).toEqual(WINNER_X);
    expect(checkForWinner([
      undefined, undefined, undefined,
      undefined, undefined, undefined,
      VALUE_X, VALUE_X, VALUE_X,
    ])).toEqual(WINNER_X);
  });

  it('should return WINNER_X for X in any column', () => {
    expect(checkForWinner([
      VALUE_X, undefined, undefined,
      VALUE_X, undefined, undefined,
      VALUE_X, undefined, undefined,
    ])).toEqual(WINNER_X);

    expect(checkForWinner([
      undefined, VALUE_X, undefined,
      undefined, VALUE_X, undefined,
      undefined, VALUE_X, undefined,
    ])).toEqual(WINNER_X);

    expect(checkForWinner([
      undefined, undefined, VALUE_X,
      undefined, undefined, VALUE_X,
      undefined, undefined, VALUE_X,
    ])).toEqual(WINNER_X);
  });

  it('should return WINNER_X for X in any diagonal', () => {
    expect(checkForWinner([
      VALUE_X, undefined, undefined,
      undefined, VALUE_X, undefined,
      undefined, undefined, VALUE_X,
    ])).toEqual(WINNER_X);

    expect(checkForWinner([
      undefined, undefined, VALUE_X,
      undefined, VALUE_X, undefined,
      VALUE_X, undefined, undefined,
    ])).toEqual(WINNER_X);
  });

  it('should return WINNER_O for O in any row', () => {
    expect(checkForWinner([
      VALUE_O, VALUE_O, VALUE_O,
      undefined, undefined, undefined,
      undefined, undefined, undefined,
    ])).toEqual(WINNER_O);
    expect(checkForWinner([
      undefined, undefined, undefined,
      VALUE_O, VALUE_O, VALUE_O,
      undefined, undefined, undefined,
    ])).toEqual(WINNER_O);
    expect(checkForWinner([
      undefined, undefined, undefined,
      undefined, undefined, undefined,
      VALUE_O, VALUE_O, VALUE_O,
    ])).toEqual(WINNER_O);
  });

  it('should return WINNER_O for O in any column', () => {
    expect(checkForWinner([
      VALUE_O, undefined, undefined,
      VALUE_O, undefined, undefined,
      VALUE_O, undefined, undefined,
    ])).toEqual(WINNER_O);

    expect(checkForWinner([
      undefined, VALUE_O, undefined,
      undefined, VALUE_O, undefined,
      undefined, VALUE_O, undefined,
    ])).toEqual(WINNER_O);

    expect(checkForWinner([
      undefined, undefined, VALUE_O,
      undefined, undefined, VALUE_O,
      undefined, undefined, VALUE_O,
    ])).toEqual(WINNER_O);
  });

  it('should return WINNER_O for O in any diagonal', () => {
    expect(checkForWinner([
      VALUE_O, undefined, undefined,
      undefined, VALUE_O, undefined,
      undefined, undefined, VALUE_O,
    ])).toEqual(WINNER_O);

    expect(checkForWinner([
      undefined, undefined, VALUE_O,
      undefined, VALUE_O, undefined,
      VALUE_O, undefined, undefined,
    ])).toEqual(WINNER_O);
  });

  it('should return TIE for a tie', () => {
    expect(checkForWinner([
      VALUE_O, VALUE_X, VALUE_O,
      VALUE_X, VALUE_X, VALUE_O,
      VALUE_X, VALUE_O, VALUE_X,
    ])).toEqual(TIE);
  });

  it('should return undefined for no result', () => {
    expect(checkForWinner([
      VALUE_O, VALUE_X, VALUE_O,
      VALUE_X, undefined, VALUE_O,
      VALUE_X, VALUE_O, VALUE_X,
    ])).toEqual(undefined);
  });
});
