import { useState } from 'react';
import { ModalContext } from './ModalContext';
export default function AppProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPoupUpVisible, setIsPoupUpVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false)
  const [expanded, setExpanded] = useState(true)
  const [confirmedDeletion, setConfirmedDeletion] = useState(false);


  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        isPoupUpVisible, 
        setIsPoupUpVisible,
        isSubmit, 
        setIsSubmit,
        expanded, 
        setExpanded,
        confirmedDeletion, 
        setConfirmedDeletion
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
