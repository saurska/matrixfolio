import React, { createContext, useState, ReactNode } from 'react';

interface ButtonContextType {
  hidden:boolean;
  setButton: (hidden: boolean) => void;
}

const initialButtonContext: ButtonContextType = {
  hidden: false,
  setButton: () => {},
};

export const ButtonContext = createContext<ButtonContextType>(initialButtonContext);

export function ButtonProvider({ children }: { children: ReactNode }) {
  const [hidden, setButton] = useState<boolean>(false);

  return (
    <ButtonContext.Provider value={{ hidden, setButton }}>
      {children}
    </ButtonContext.Provider>
  );
}
