import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export default function useModalContext() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('Não está dentro do contexto');
  }

  return context;
}
