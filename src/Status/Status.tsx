import React, { FC } from 'react';
import { StatusContext } from './StatusContext';

export type StatusParams = {};

export const Status:FC<StatusParams> = () => (
  <StatusContext.Consumer>
    {(statusContext) => (
      <div className="status">
        {statusContext![0]}
      </div>
    )}
  </StatusContext.Consumer>
);
