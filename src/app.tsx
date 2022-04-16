import React from 'react';
import { Status } from './Status/Status';
import GridContextProvider from './GameGrid/GridContext';
import StatusContextProvider from './Status/StatusContext';
import { GameGrid } from './GameGrid/GameGrid';
import { Reset } from './Reset/Reset';

export const App: React.FC = () => (
  <StatusContextProvider>
    <GridContextProvider>
      <div className="gameContainer">
        <Status />
        <GameGrid />
        <Reset />
      </div>
    </GridContextProvider>
  </StatusContextProvider>
);
