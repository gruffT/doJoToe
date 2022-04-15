import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import { StatusContext } from '../../Status/StatusContext';
import { NEXT_PLAYER_X, NEXT_PLAYER_O } from '../../Status/Statuses';

export const VALUE_X = 'X';
export const VALUE_O = 'O';
export type SquareValue = 'X' | 'O' | undefined;

export type SquareParams = {
  value: SquareValue;
  setState: React.Dispatch<React.SetStateAction<SquareValue>>;
};

export const Square:FC<SquareParams> = ({ value, setState }) => {
  const status = useContext(StatusContext)![0];
  const processClick = () => {
    if (value) return;
    switch (status) {
      case NEXT_PLAYER_X:
        setState(VALUE_X);
        break;
      case NEXT_PLAYER_O:
        setState(VALUE_O);
        break;
      default:
        break;
    }
  };
  return <Button title="square" className="square" onClick={() => processClick()}>{value}</Button>;
};