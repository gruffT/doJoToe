import React, { FC } from 'react';
import { StatusContext } from './StatusContext';

export type StatusParams = {};

export const Status:FC<StatusParams> = () => (
  <StatusContext.Consumer>
    {([status]) => (
      <div className="status">
        {status}
      </div>
    )}
  </StatusContext.Consumer>
);
