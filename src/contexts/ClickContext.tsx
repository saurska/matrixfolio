import React, { createContext, useState, ReactNode } from 'react';

interface ClickContextType {
  clicked:boolean;
  setClick: (hidden: boolean) => void;
}

const initialButtonContext: ClickContextType = {
  clicked: false,
  setClick: () => {},
};

export const ClickContext = createContext<ClickContextType>(initialButtonContext);

export function ClickProvider({ children }: { children: ReactNode }) {
  const [clicked, setClick] = useState<boolean>(false);

  return (
    <ClickContext.Provider value={{ clicked, setClick }}>
      {children}
    </ClickContext.Provider>
  );
}
