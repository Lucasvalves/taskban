import { TaskCard } from '../TaskCard';
import { useContext } from 'react';
import { TaskList } from '../TaskList';
import { TasksContext } from '../../context/TasksContext';
import {cardsTitle} from '../../utils/constants'
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useTasks } from '../../hook/useTasks';

export const TaskContainer = () => {
  const { tasks} = useContext(TasksContext);
  const taskEntries = Array.from(Object.entries(cardsTitle));
  const { replacePosition, replaceList} = useTasks()

  const onDragEnd = ({destination, source}) => {
    if (!destination) return;
    const  task = tasks[source.droppableId ][source.index]
    
    if (destination.droppableId === source.droppableId &&
        destination.index !== source.index ) {
      replacePosition(task, source.droppableId, destination.index)
      return
    }
    if (destination.droppableId !== source.droppableId) {
      replaceList(task, destination.index, source.droppableId, destination.droppableId)
      return
    }   
  };

  return (

      <div
        className="flex h-full flex-1 gap-x-9 gap-y-4 overflow-auto px-3 pb-9 pt-7 sm:gap-x-10 sm:pt-[121px] md:px-8 xl:px-[84px] drop-shadow-md "
      >
        <DragDropContext onDragEnd={onDragEnd}>
            {tasks &&
              taskEntries.map(([key, value], index) => (
                <Droppable key={key} droppableId={key}>
                {(provided, snapshot) => (
                  <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  >
                    <section className="mt-2 space-y-4 sm:mt-9">
                      <TaskList key={key} title={`${value} (${tasks[key].length})`} length={tasks[key].length}
                      >
                        {
                          tasks[key].map((task, index) => (                           
                            task && <TaskCard key={task.id} task={task} index={index} taskEntries={value} />
                         ))
                        }
                      {provided.placeholder} 
                      </TaskList>
                    </section>
                  </div>
                  
                  )}
                  </Droppable>                
              ))}
        </DragDropContext>
      </div>
  );
};
   
