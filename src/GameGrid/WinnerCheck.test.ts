import { checkForWinner } from './WinnerCheck';
import { TIE, WINNER_X, WINNER_O } from '../Status/Statuses';

describe.skip('WinnerCheck', () => {
  it('should return WINNER_X for X in any row', () => {
    expect(checkForWinner([])).toEqual(WINNER_X);
  });

  it('should return WINNER_X for X in any column', () => {
    expect(checkForWinner([])).toEqual(WINNER_X);
  });

  it('should return WINNER_X for X in any diagonal', () => {
    expect(checkForWinner([])).toEqual(WINNER_X);
  });

  it('should return WINNER_O for O in any row', () => {
    expect(checkForWinner([])).toEqual(WINNER_O);
  });

  it('should return WINNER_O for O in any column', () => {
    expect(checkForWinner([])).toEqual(WINNER_O);
  });

  it('should return WINNER_O for O in any diagonal', () => {
    expect(checkForWinner([])).toEqual(WINNER_O);
  });

  it('should return TIE for a tie', () => {
    expect(checkForWinner([])).toEqual(TIE);
  });

  it('should return undefined for no result', () => {
    expect(checkForWinner([])).toEqual(undefined);
  });
});
