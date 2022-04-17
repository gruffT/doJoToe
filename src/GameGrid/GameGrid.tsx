import React, { useEffect, useContext, FC } from 'react';
import { Grid } from '@mui/material';
import { Square } from './Square/Square';
import { StatusContext } from '../Status/StatusContext';
import { GridContext } from './GridContext';
import { checkForWinner } from './WinnerCheck';
import {
  WINNER_X, WINNER_O, TIE, NEXT_PLAYER_X, NEXT_PLAYER_O,
} from '../Status/Statuses';

export type GameGridParams = {};

export const GameGrid:FC<GameGridParams> = () => {
  const setStatus = useContext(StatusContext)![1];
  const grid = useContext(GridContext);
  useEffect(() => {
    const result = checkForWinner(grid!.map(([value]) => value));
    switch (result) {
      case WINNER_X:
      case WINNER_O:
      case TIE:
        setStatus(result);
        break;
      default:
        setStatus((status) => (status === NEXT_PLAYER_X ? NEXT_PLAYER_O : NEXT_PLAYER_X));
        break;
    }
  }, [grid, setStatus]);
  let squareCount = 0;
  return (
    <Grid container spacing={2} justifyContent="center" alignContent="center" sx={{ padding: 10 }} data-testid="gameGrid">
      {grid!.map(([squareValue, setSquareValue]) => (
        <Grid item xs={4} key={squareCount++}>
          <Square value={squareValue} setState={setSquareValue} />
        </Grid>
      ))}
    </Grid>
  );
};
