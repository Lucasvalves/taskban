import { useState } from 'react';
import { ModalContext } from './ModalContext';
export default function AppProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
<<<<<<< HEAD
  const [openToDo, setOpenToDo] = useState(true);
=======
  const [openToDo, setOpenToDo] = useState(false);
>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab

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
