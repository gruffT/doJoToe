import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import { GridContext } from '../GameGrid/GridContext';
import { StatusContext } from '../Status/StatusContext';

export const Reset:FC = () => {
  const setStatus = useContext(StatusContext)![1];
  const grid = useContext(GridContext);
  const handleClick = () => {
    setStatus(undefined);
    grid?.forEach((square) => {
      const setSquareValue = square[1];
      setSquareValue(undefined);
    });
  };
  return (
    <Button size="large" data-testid="reset" variant="outlined" onClick={() => handleClick()}>Reset</Button>
  );
};
