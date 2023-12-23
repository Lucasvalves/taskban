import { useState } from 'react';
import { ModalContext } from './ModalContext';
export default function AppProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openToDo, setOpenToDo] = useState(true);

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        openToDo,
        setOpenToDo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
