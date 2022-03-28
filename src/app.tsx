import { Button } from '@mui/material';
import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const App: React.FC<{}> = () => (
  <div>
    <Button variant="contained" color="primary">
      <AccountCircleIcon />
      {' '}
      Hello World
    </Button>
  </div>
);
