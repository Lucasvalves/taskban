import { createContext } from 'react';
import { emptyTasks, initialTaksValues } from '../hook/useTasks';
import { useState } from 'react';
import { useEffect } from 'react';
import { TasksContext } from './TasksContext';

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(emptyTasks);
<<<<<<< HEAD
=======

>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storage = JSON.parse(localStorage.getItem('tasks') || 'null');
    if (storage) {
      return setTasks(storage);
    } else {
      localStorage.setItem('tasks', JSON.stringify(initialTaksValues));
      setTasks(initialTaksValues);
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
