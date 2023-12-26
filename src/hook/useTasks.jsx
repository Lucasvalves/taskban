import { TasksContext } from '../context/TasksContext';
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';


export function useTasks() {
  const { tasks, setTasks } = useContext(TasksContext);
  const addTask = (task) => {
    const { todo } = tasks;
    const newTask = {
      ...task,
      id: uuid(),
    };
    const newTasks = {
      ...tasks,
      todo: [...todo, newTask],
    };
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return { addTask };
}
