import useAppContext from '../../hook/useAppContext';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { Task } from '../Task';
import { useState } from 'react';

export const TaskCard = ({ taskName }) => {
  const { openToDo } = useAppContext();

  const [tasks, setTasks] = useState([
    {
      id: '0',
      title: 'Testar Navegadores',
      description:
        'Verificar e garantir a compatibilidade da aplicação em diferentes navegadoresss.',
      date: '28/12/23',
      priority: 'LOW',
    },
    {
      id: '1',
      title: 'Lavar Roupa',
      description: 'Verificar se as roupas estão separadas de forma correta.',
      date: '21/12/23',
      priority: 'HIGH',
    },
    {
      id: '2',
      title: 'Churrasco',
      description: 'Verificar se já tem tudo comprado.',
      date: '29/12/23',
      priority: 'MIDUM',
    },
  ]);
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      result;
    }

    const items = reorder(tasks, result.source.index, result.destination.index);
    setTasks(items);

  };

  if (openToDo) {
    return (
      <div className="bg-violet-100 rounded-md h-fit  drop-shadow-md">
        <h1 className="text-stone-500 font-semibold text-xs mb-3 ml-3 mt-2">
          {taskName} ({tasks.length})
        </h1>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tasks" type="list" direction="vertical">
            {(provided) => (
              <div
                className="h-5/6 flex my-5 flex-col gap-3 items-center mx-3 w-5/5 "
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
};
