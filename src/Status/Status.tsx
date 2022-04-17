import React, { FC } from 'react';
import { Chip } from '@mui/material';
import { StatusContext } from './StatusContext';

export type StatusParams = {};

export const Status:FC<StatusParams> = () => {
  const color = (status: string | undefined): 'success' | 'error' | 'primary' => {
    if (status === undefined) return 'primary';
    if (status.endsWith('X')) return 'success';
    if (status.endsWith('O')) return 'error';
    return 'primary';
  };
  return (
    <StatusContext.Consumer>
      {(statusContext) => (
        <Chip size="medium" label={statusContext ? statusContext[0] : ''} color={color(statusContext ? statusContext[0] : '')} />
      )}
    </StatusContext.Consumer>
  );
};
