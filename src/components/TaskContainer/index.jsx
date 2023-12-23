<<<<<<< HEAD
=======
import { useState } from 'react';
>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab
import { TaskCard } from '../TaskCard';
import { useContext } from 'react';
import { TaskList } from '../TaskList';
import useModalContext from '../../hook/useModalContext';
import { TasksContext } from '../../context/TasksContext';
const cardsTitle = {
  todo: 'To do',
  doing: 'Doing',
  qa: 'QA',
  done: 'Done',
};
export const TaskContainer = () => {
  const { tasks } = useContext(TasksContext);
  const { openToDo } = useModalContext();
  const taskEntries = Array.from(Object.entries(cardsTitle));

<<<<<<< HEAD
  // if (openToDo) {
  return (
    <div
      className="
    6  h-full flex w-full justify-center overflow-y-scroll bg-green-400 "
    >
      <div className="flex  justify-center gap-6 bg-red-400   ">
        {tasks &&
          taskEntries.map(([key, value]) => (
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
              {/* {provided.placeholder} */}
            </TaskList>
          ))}
      </div>
    </div>
  );
  // }
=======
  console.log('TaskContainer tasks: ', tasks);
  if (openToDo) {
    return (
      <div
        className="flex items-center mx-12 gap-6
    6 w-full h-screen"
      >
        {tasks &&
          taskEntries.map(([key, value]) => (
            //taskEntries.map((key, value)=>(
            <TaskList
              className="flex-auto"
              key={key}
              title={`${value} (${tasks[key].length})`}
            >
              {/* {tasks.map((task, index) => (
                  <TaskCard className="flex-auto" />
                ))}   */}
            </TaskList>
          ))}
      </div>
    );
  }
>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab
};
