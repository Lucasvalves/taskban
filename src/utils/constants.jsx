import { v4 as uuid } from 'uuid';

export const initialTaksValues = {
  todo: [
    {
      id: uuid(),
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadores.',
      date: new Date('2023-12-10T00:00:00.000Z'),
      priority: 'low',
    },
    {
      id: uuid(),
      title: 'Atualizar Bibliotecas',
      description: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos',
      date: new Date('2023-12-11T00:00:00.000Z'),
      priority: 'high',
    },
    {
      id: uuid(),
      title: 'Implementar',
      description: 'Adicionar efeitos visuais e transições para melhorar a experiência do usuário.',
      date: new Date('2023-12-05T00:00:00.000Z'),
      priority: 'medium',
    },
  ],
  doing: [
  
  ],
  qa: [

  ],
  done: [

  ],
};

export const emptyTasks = {
  todo: [],
  doing: [],
  qa: [],
  done: [],
};

export const cardsTitle = {
  todo: 'To do',
  doing: 'Doing',
  qa: 'QA',
  done: 'Done',
};

export const handlePriorityColor = (priorityType) => {
  switch (priorityType) {
    case 'high':
      return 'bg-red-400 text-white';
    case 'medium':
      return 'border border-orange-100 text-orange-100 bg-white ';
    case 'low':
      return 'border border-green-400 text-green-400 bg-white';
  }
};


