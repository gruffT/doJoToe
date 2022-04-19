import React, { Dispatch, FC, SetStateAction } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { StatusContext } from '../../Status/StatusContext';
import { Square, VALUE_O, VALUE_X } from './Square';
import { NEXT_PLAYER_X } from '../../Status/Statuses';
import { Grid } from '../GridContext';

describe('Square', () => {
  const setGrid = jest.fn();
  // eslint-disable-next-line max-len
  const statusContextValue = [NEXT_PLAYER_X, setGrid] as [string | undefined, Dispatch<SetStateAction<string | undefined>>];
  const TestComponent: FC<{ value: Grid, gridIndex: number }> = ({ value, gridIndex }) => (
    <StatusContext.Provider value={statusContextValue}>
      <Square grid={value} gridIndex={gridIndex} setGrid={setGrid} />
    </StatusContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display a value X based on the params', () => {
    render(<TestComponent value={[undefined, undefined, undefined, VALUE_X]} gridIndex={3} />);
    expect(screen.getByText(VALUE_X)).toBeInTheDocument();
  });

  it('should display a value O based on the params', () => {
    render(<TestComponent value={[undefined, VALUE_O, undefined, VALUE_X]} gridIndex={1} />);
    expect(screen.getByText(VALUE_O)).toBeInTheDocument();
  });

  it('should display no value based on the params', () => {
    render(<TestComponent value={[undefined, VALUE_O, VALUE_X]} gridIndex={0} />);
    expect(screen.queryByText(VALUE_O)).not.toBeInTheDocument();
    expect(screen.queryByText(VALUE_X)).not.toBeInTheDocument();
  });

  it('should be able to set state provided if value is undefined on click with value based on context', () => {
    render(<TestComponent value={[undefined]} gridIndex={0} />);
    fireEvent.click(screen.getByTitle('square'));
    expect(setGrid).toHaveBeenCalledTimes(1);
    expect(setGrid).toHaveBeenCalledWith([VALUE_X]);
  });

  it('should not set state on click if value is defined', () => {
    render(<TestComponent value={[VALUE_X]} gridIndex={0} />);
    fireEvent.click(screen.getByTitle('square'));
    expect(setGrid).toHaveBeenCalledTimes(0);
    expect(setGrid).toHaveBeenCalledTimes(0);
  });
});
