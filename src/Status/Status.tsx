import React, { FC } from 'react';
import { Chip } from '@mui/material';
import { StatusContext } from './StatusContext';

export type StatusParams = {};

export const Status:FC<StatusParams> = () => (
  <StatusContext.Consumer>
    {(statusContext) => (
      <Chip size="medium" label={statusContext![0]} color="primary" />
    )}
  </StatusContext.Consumer>
);
