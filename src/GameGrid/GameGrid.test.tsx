import React from 'react';
import { render, screen } from '@testing-library/react';
import { GameGrid } from './GameGrid';
import { Grid, GridContext } from './GridContext';
import { StatusContext } from '../Status/StatusContext';
import {
  NEXT_PLAYER_O, NEXT_PLAYER_X, WINNER_O, WINNER_X, TIE,
} from '../Status/Statuses';
import { checkForWinner } from './WinnerCheck';

jest.mock('./WinnerCheck');

describe('GameGrid', () => {
  const mockCheckForWinner = jest.mocked(checkForWinner);
  const setStatus = jest.fn();
  const renderGrid = async (status: string) => {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const grid: Grid = [];
    for (let i = 0; i < 9; i++) {
      grid[i] = [undefined, jest.fn()];
    }
    render(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <StatusContext.Provider value={[status, setStatus]}>
        <GridContext.Provider value={grid}>
          <GameGrid />
        </GridContext.Provider>
      </StatusContext.Provider>,
    );
    return screen.findAllByTitle('square');
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockCheckForWinner.mockImplementation(() => undefined);
  });

  it('should contain 9 squares', async () => {
    const squares = await renderGrid(NEXT_PLAYER_O);
    expect(squares.length).toEqual(9);
  });

  it('should update game status to next O if grid updated and no winner is found for X turn', async () => {
    const squares = await renderGrid(NEXT_PLAYER_X);
    squares[2].click();
    expect(setStatus).toHaveBeenCalledTimes(1);
    const callback = setStatus.mock.calls[0][0];
    const result = callback(NEXT_PLAYER_X);
    expect(result).toEqual(NEXT_PLAYER_O);
  });

  it('should update game status to next X if grid updated and no winner is found for O turn', async () => {
    const squares = await renderGrid(NEXT_PLAYER_O);
    squares[2].click();
    expect(setStatus).toHaveBeenCalledTimes(1);
    const callback = setStatus.mock.calls[0][0];
    const result = callback(NEXT_PLAYER_O);
    expect(result).toEqual(NEXT_PLAYER_X);
  });

  it('should update game status for Winner O if grid updated and winner is found', async () => {
    mockCheckForWinner.mockImplementationOnce(() => WINNER_O);
    const squares = await renderGrid(NEXT_PLAYER_O);
    squares[2].click();
    expect(setStatus).toHaveBeenCalledTimes(1);
    expect(setStatus).toHaveBeenCalledWith(WINNER_O);
  });

  it('should update game status for Winner X if grid updated and winner is found', async () => {
    mockCheckForWinner.mockImplementationOnce(() => WINNER_X);
    const squares = await renderGrid(NEXT_PLAYER_X);
    squares[2].click();
    expect(setStatus).toHaveBeenCalledTimes(1);
    expect(setStatus).toHaveBeenCalledWith(WINNER_X);
  });

  it('should update game status for TIE if grid updated and tie is found', async () => {
    mockCheckForWinner.mockImplementationOnce(() => TIE);
    const squares = await renderGrid(NEXT_PLAYER_X);
    squares[2].click();
    expect(setStatus).toHaveBeenCalledTimes(1);
    expect(setStatus).toHaveBeenCalledWith(TIE);
  });
});