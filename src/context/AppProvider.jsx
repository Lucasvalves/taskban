import { useState } from 'react';
import { AppContext } from './AppContext';

export default function AppProvider({ children }) {
  const [isModalVisible, setIsModalVisible ] = useState(false);

  return (
    <AppContext.Provider value={{ isModalVisible , setIsModalVisible  }}>
      {children}
    </AppContext.Provider>
  );
}
