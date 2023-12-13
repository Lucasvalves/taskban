import { useState } from 'react';
import { AppContext } from './AppContext';

export default function AppProvider({ children }) {
  const [isModalVisible, setIsModalVisible ] = useState(false);
	const [openToDo, setOpenToDo] = useState(false)


  return (
    <AppContext.Provider value={{ isModalVisible , setIsModalVisible,openToDo, setOpenToDo  }}>
      {children}
    </AppContext.Provider>
  );
}
