import { emptyTasks, initialTaksValues } from '../utils/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import { TasksContext } from './TasksContext';

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(emptyTasks);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storage = JSON.parse(localStorage.getItem('tasks') || 'null');
    if (storage) {
      return setTasks(storage);
    } else {
      localStorage.setItem('tasks', JSON.stringify(initialTaksValues));
      setTasks(initialTaksValues);
    }
    console.log("Storage", storage);
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
