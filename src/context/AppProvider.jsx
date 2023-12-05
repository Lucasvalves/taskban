import { useState } from 'react';
import { AppContext } from './AppContext';

export default function AppProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <AppContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </AppContext.Provider>
  );
}
