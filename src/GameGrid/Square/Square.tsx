import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import { StatusContext } from '../../Status/StatusContext';
import {
  NEXT_PLAYER_X, NEXT_PLAYER_O, TIE, WINNER_X, WINNER_O,
} from '../../Status/Statuses';

export const VALUE_X = 'X';
export const VALUE_O = 'O';
export type SquareValue = 'X' | 'O' | undefined;

export type SquareParams = {
  grid: SquareValue[];
  setGrid: React.Dispatch<React.SetStateAction<SquareValue[]>>;
  gridIndex: number;
};

export const Square:FC<SquareParams> = ({ grid, setGrid, gridIndex }) => {
  const status = useContext(StatusContext)![0];
  const processClick = () => {
    if (grid[gridIndex]) return;
    const newGrid = grid.slice();
    switch (status) {
      case NEXT_PLAYER_X:
        newGrid[gridIndex] = VALUE_X;
        setGrid(newGrid);
        break;
      case NEXT_PLAYER_O:
        newGrid[gridIndex] = VALUE_O;
        setGrid(newGrid);
        break;
      default:
        break;
    }
  };
  const variant = !(status === WINNER_X || status === WINNER_O || status === TIE) ? 'outlined' : 'contained';
  let color: 'success' | 'error' | 'primary';
  switch (grid[gridIndex]) {
    case VALUE_X:
      color = 'success';
      break;
    case VALUE_O:
      color = 'error';
      break;
    default:
      color = 'primary';
  }
  return (
    <Button
      title="square"
      variant={variant}
      color={color}
      size="large"
      sx={{ width: '100%', fontSize: 30 }}
      onClick={() => processClick()}
    >
      {grid[gridIndex] || '-'}
    </Button>
  );
};
