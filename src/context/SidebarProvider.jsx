import { useState } from 'react';
import { SidebarContext  } from './SidebarContext';

export default function AppProvider({ children }) {
  const [expanded, setExpanded] = useState(true)

  return (
    <SidebarContext.Provider
      value={{
        expanded, 
        setExpanded
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
