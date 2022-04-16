import React from 'react';
import { render, screen } from '@testing-library/react';
import { Status } from './Status';
import { NEXT_PLAYER_X, NEXT_PLAYER_O } from './Statuses';
import { StatusContext } from './StatusContext';

describe('Status', () => {
  it('should render status message based status provider value', () => {
    render(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <StatusContext.Provider value={[NEXT_PLAYER_O, jest.fn()]}>
        <Status />
      </StatusContext.Provider>,
    );
    expect(screen.queryByText(NEXT_PLAYER_X)).not.toBeInTheDocument();
    expect(screen.getByText(NEXT_PLAYER_O)).toBeInTheDocument();
  });
});
