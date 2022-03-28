import React from 'react';
import { render, screen } from '../utils/test-utils';

import { App } from './app';

describe('App', () => {
  it('should contain a button', () => {
    render(<App />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
