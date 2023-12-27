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
        className="6  h-full flex w-full justify-center overflow-y-scroll "
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex  justify-center gap-">
            {tasks &&
              taskEntries.map(([key, value], index) => (
                <Droppable key={key} droppableId={key}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                {/* {console.log("Key: ",key,"Value: " ,value, "Index: ", index)} */}
                
                    <TaskList key={key} title={`${value} (${tasks[key].length})`}>
                      {
                        // tasks[key].length > 0 ? (
                        tasks[key].map((task, index) => (
                          <TaskCard key={task.id} task={task} index={index} taskEntries={value} />
                        ))
                        // ) : (
                        //   <p>Sem tarefas</p>
                        // )
                      }
                    </TaskList>
                    {provided.placeholder} 
                  </div>
                  
                  )}
                  </Droppable>                
              ))}
          </div>
        </DragDropContext>
      </div>
  );
};
   
