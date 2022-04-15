import React, { FC } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { StatusContext } from '../../Status/StatusContext';
import { Square, VALUE_O, VALUE_X } from './Square';
import { NEXT_PLAYER_X } from '../../Status/Statuses';

describe('Square', () => {
  const setState = jest.fn();
  const setStatus = jest.fn();
  const TestComponent: FC<{ value: 'X' | 'O' | undefined }> = ({ value }) => (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StatusContext.Provider value={[NEXT_PLAYER_X, setStatus]}>
      <Square value={value} setState={setState} />
    </StatusContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display a value X based on the params', () => {
    render(<TestComponent value={VALUE_X} />);
    expect(screen.getByText(VALUE_X)).toBeInTheDocument();
  });

  it('should display a value O based on the params', () => {
    render(<TestComponent value={VALUE_O} />);
    expect(screen.getByText(VALUE_O)).toBeInTheDocument();
  });

  it('should display no value based on the params', () => {
    render(<TestComponent value={undefined} />);
    expect(screen.queryByText(VALUE_O)).not.toBeInTheDocument();
    expect(screen.queryByText(VALUE_X)).not.toBeInTheDocument();
  });

  it('should be able to set state provided if value is undefined on click with value based on context', () => {
    render(<TestComponent value={undefined} />);
    fireEvent.click(screen.getByTitle('square'));
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith(VALUE_X);
  });

  it('should not set state on click if value is defined', () => {
    render(<TestComponent value={VALUE_X} />);
    fireEvent.click(screen.getByTitle('square'));
    expect(setState).toHaveBeenCalledTimes(0);
    expect(setStatus).toHaveBeenCalledTimes(0);
  });
});
