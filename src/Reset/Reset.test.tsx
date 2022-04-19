import React, { Dispatch, SetStateAction } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Reset } from './Reset';
import { StatusContext } from '../Status/StatusContext';
import {emptyGridFactory, Grid, GridContext} from '../GameGrid/GridContext';
import { INIT, VALUE_X } from '../Status/Statuses';

describe('Reset', () => {
  it('should reset Grid state and game status to initial state on click', () => {
    const setStatus = jest.fn();
    const setGridValue = jest.fn();
    const gridContextValue = [[
      VALUE_X, undefined, VALUE_X,
      undefined, VALUE_X, undefined,
      VALUE_X, undefined, VALUE_X,
    ], setGridValue] as [Grid, Dispatch<SetStateAction<Grid>>];
    const statusContextValue = ['Winner X', setStatus] as [string | undefined, Dispatch<SetStateAction<string | undefined>>];
    render(
      <GridContext.Provider value={gridContextValue}>
        <StatusContext.Provider value={statusContextValue}>
          <Reset />
        </StatusContext.Provider>
      </GridContext.Provider>,
    );
    fireEvent.click(screen.getByText('Reset'));
    expect(setStatus).toHaveBeenCalledTimes(1);
    expect(setStatus).toHaveBeenCalledWith(INIT);
    expect(setGridValue).toHaveBeenCalledTimes(1);
    expect(setGridValue).toHaveBeenCalledWith(emptyGridFactory());
  });
});
