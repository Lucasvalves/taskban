import { TaskCard } from '../TaskCard';
import { useContext } from 'react';
import { TaskList } from '../TaskList';
import { TasksContext } from '../../context/TasksContext';
import {cardsTitle} from '../../utils/constants'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const TaskContainer = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const taskEntries = Array.from(Object.entries(cardsTitle));

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = tasks;
   console.table(newBoardData)
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
      newBoardData[parseInt(re.source.droppableId)].items.splice(re.source.index,1);
      newBoardData[parseInt(re.destination.droppableId)].items.splice(re.destination.index,0,dragItem);
      setTasks(newBoardData.todo);
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
                      <TaskList key={key} title={`${value} (${tasks[key].length})`}>
                        {
                          tasks[key].map((task, index) => (
                            <TaskCard key={task.id} task={task} index={index} taskEntries={value} />
                          ))
                        }
                      </TaskList>
                      {provided.placeholder} 
                    </section>
                  </div>
                  
                  )}
                  </Droppable>                
              ))}
        </DragDropContext>
      </div>
  );
};
   
