import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import { emptyGridFactory, GridContext } from '../GameGrid/GridContext';
import { StatusContext } from '../Status/StatusContext';

export const Reset:FC = () => {
  const setStatus = useContext(StatusContext)![1];
  const setGrid = useContext(GridContext)![1];
  const handleClick = () => {
    setStatus(undefined);
    setGrid(emptyGridFactory());
  };
  return (
    <Button size="large" data-testid="reset" variant="outlined" onClick={() => handleClick()}>Reset</Button>
  );
};
