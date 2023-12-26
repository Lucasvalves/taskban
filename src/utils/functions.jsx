import { v4 as uuid } from 'uuid';

export const initialTaksValues = {
  todo: [
    {
      id: uuid(),
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadoresss.',
      date: new Date('2023-12-10T00:00:00.000Z'),
      priority: 'low',
    },
    {
      id: uuid(),
      title: 'Lavar Roupa',
      description: 'Verificar se as roupas estão separadas de forma correta.',
      date: new Date('2023-12-11T00:00:00.000Z'),
      priority: 'high',
    },
    {
      id: uuid(),
      title: 'Churrasco',
      description: 'Verificar se já tem tudo comprado.',
      date: new Date('2023-12-05T00:00:00.000Z'),
      priority: 'medium',
    },
  ],
  doing: [
    {
      id: uuid(),
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadoresss.',
      date: new Date('2023-12-15T00:00:00.000Z'),
      priority: 'low',
    },
    {
      id: uuid(),
      title: 'Lavar Roupa',
      description: 'Verificar se as roupas estão separadas de forma correta.',
      date: new Date('2023-12-16T00:00:00.000Z'),
      priority: 'high',
    },
    {
      id: uuid(),
      title: 'Churrasco',
      description: 'Verificar se já tem tudo comprado.',
      date: new Date('2023-12-17T00:00:00.000Z'),
      priority: 'medium',
    },
  ],
  qa: [
    {
      id: uuid(),
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadoresss.',
      date: new Date('2023-12-15T00:00:00.000Z'),
      priority: 'low',
    },
    {
      id: uuid(),
      title: 'Lavar Roupa',
      description: 'Verificar se as roupas estão separadas de forma correta.',
      date: new Date('2023-12-20T00:00:00.000Z'),
      priority: 'high',
    },
    {
      id: uuid(),
      title: 'Churrasco',
      description: 'Verificar se já tem tudo comprado.',
      date: new Date('2023-12-17T00:00:00.000Z'),
      priority: 'medium',
    },
  ],
  done: [
    {
      id: uuid(),
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadoresss.',
      date: new Date('2023-12-15T00:00:00.000Z'),
      priority: 'low',
    },
    {
      id: uuid(),
      title: 'Lavar Roupa',
      description: 'Verificar se as roupas estão separadas de forma correta.',
      date: new Date('2023-12-12T00:00:00.000Z'),
      priority: 'high',
    },
    {
      id: uuid(),
      title: 'Churrasco',
      description: 'Verificar se já tem tudo comprado.',
      date: new Date('2023-12-25T00:00:00.000Z'),
      priority: 'medium',
    },
  ],
};
export const emptyTasks = {
  todo: [],
  doing: [],
  qa: [],
  done: [],
};

export const handlePriorityColor = (typePriority) => {
  switch (typePriority) {
    case 'high':
      return 'bg-red-400 text-white  ';
    case 'medium':
      return 'border border-orange-100 text-orange-100 bg-white ';
    case 'low':
      return 'border border-green-400 text-green-400 bg-white';
  }
};