import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';

export default function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error('Não está dentro do contexto');
  }

  return context;
}
