import React, { ReactNode, useEffect, useState } from 'react';
import { NEXT_PLAYER_X } from './Statuses';

// eslint-disable-next-line max-len
export const StatusContext = React.createContext<[string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>] | null>(null);

const StatusContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [status, setStatus] = useState<string>();
  useEffect(() => {
    if (status === undefined) setStatus(NEXT_PLAYER_X);
  }, [status, setStatus]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StatusContext.Provider value={[status, setStatus]}>
      {children}
    </StatusContext.Provider>
  );
};
export default StatusContextProvider;
