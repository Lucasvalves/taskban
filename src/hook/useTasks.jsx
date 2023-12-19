import { v4 as uuid } from 'uuid';
import { useContext } from 'react';

import { TasksContext } from '../context/TasksContext';

export const initialTaksValues = {
  todo: [
    {
      id: uuid(),
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadoresss.',
      date: new Date('2023-12-10T00:00:00.000Z'),
      priority: 'LOW',
    },
    {
      id: uuid(),
      title: 'Lavar Roupa',
      description: 'Verificar se as roupas estão separadas de forma correta.',
      date: new Date('2023-12-11T00:00:00.000Z'),
      priority: 'HIGH',
    },
    {
      id: uuid(),
      title: 'Churrasco',
      description: 'Verificar se já tem tudo comprado.',
      date: new Date('2023-12-05T00:00:00.000Z'),
      priority: 'MIDUM',
    },
  ],
  doing: [
    {
      id: uuid(),
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadoresss.',
      date: new Date('2023-12-15T00:00:00.000Z'),
      priority: 'LOW',
    },
    {
      id: uuid(),
      title: 'Lavar Roupa',
      description: 'Verificar se as roupas estão separadas de forma correta.',
      date: new Date('2023-12-16T00:00:00.000Z'),
      priority: 'HIGH',
    },
    {
      id: uuid(),
      title: 'Churrasco',
      description: 'Verificar se já tem tudo comprado.',
      date: new Date('2023-12-17T00:00:00.000Z'),
      priority: 'MIDUM',
    },
  ],
  qa: [
    {
      id: uuid(),
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadoresss.',
      date: new Date('2023-12-15T00:00:00.000Z'),
      priority: 'LOW',
    },
    {
      id: uuid(),
      title: 'Lavar Roupa',
      description: 'Verificar se as roupas estão separadas de forma correta.',
      date: new Date('2023-12-20T00:00:00.000Z'),
      priority: 'HIGH',
    },
    {
      id: uuid(),
      title: 'Churrasco',
      description: 'Verificar se já tem tudo comprado.',
      date: new Date('2023-12-17T00:00:00.000Z'),
      priority: 'MIDUM',
    },
  ],
  done: [
    {
      id: uuid(),
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadoresss.',
      date: new Date('2023-12-15T00:00:00.000Z'),
      priority: 'LOW',
    },
    {
      id: uuid(),
      title: 'Lavar Roupa',
      description: 'Verificar se as roupas estão separadas de forma correta.',
      date: new Date('2023-12-12T00:00:00.000Z'),
      priority: 'HIGH',
    },
    {
      id: uuid(),
      title: 'Churrasco',
      description: 'Verificar se já tem tudo comprado.',
      date: new Date('2023-12-25T00:00:00.000Z'),
      priority: 'MIDUM',
    },
  ],
};
export const emptyTasks = {
  todo: [],
  doing: [],
  qa: [],
  done: [],
};

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
    // console.log(newTask);
    //console.log(tasks);
  };

  return { addTask };
}
