import { createContext } from 'react';

export const DropdownContext = createContext({
  close: () => {},
  isOpen: false,
});
