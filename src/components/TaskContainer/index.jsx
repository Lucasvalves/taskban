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
};