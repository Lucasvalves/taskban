import { useState } from 'react';
import { ModalContext } from './ModalContext';
export default function AppProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalEditVisible , setIsModalEditVisible] = useState(false);
  const [isPoupUpVisible, setIsPoupUpVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false)
  const [expanded, setExpanded] = useState(true)
  const [idEdit, setIdEdit] = useState("")


  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        isModalEditVisible, 
        setIsModalEditVisible,
        isPoupUpVisible, 
        setIsPoupUpVisible,
        isSubmit, 
        setIsSubmit,
        expanded, 
        setExpanded,
        idEdit, 
        setIdEdit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
