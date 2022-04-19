import React, {
  Dispatch, FC, ReactNode, SetStateAction, useState,
} from 'react';
import { SquareValue } from './Square/Square';

export type Grid = SquareValue[];

export const emptyGridFactory = () => new Array<SquareValue>(9).fill(undefined);
const emptyGrid = emptyGridFactory();

// eslint-disable-next-line max-len
export const GridContext = React.createContext<[Grid | null, Dispatch<SetStateAction<Grid>>]>([null, () => {}]);

const GridContextProvider: FC<ReactNode> = ({ children }) => {
  const gridState = useState(emptyGrid);
  return (
    <GridContext.Provider value={gridState}>
      {children}
    </GridContext.Provider>
  );
};

export default GridContextProvider;
