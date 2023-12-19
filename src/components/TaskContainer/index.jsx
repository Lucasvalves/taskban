import { useState } from 'react';
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
};
