import React, { FC, ReactNode, useState } from 'react';
import { SquareValue } from './Square/Square';

export type Grid = [SquareValue, React.Dispatch<React.SetStateAction<SquareValue>>][];

export const GridContext = React.createContext<Grid | null>([]);

const GridContextProvider: FC<ReactNode> = ({ children }) => {
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const grid = new Array(9);
  grid.fill(useState<SquareValue>());
  return (
    <GridContext.Provider value={grid}>
      {children}
    </GridContext.Provider>
  );
};

export default GridContextProvider;
