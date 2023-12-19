import useModalContext from '../../hook/useModalContext';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';


export const TaskList = ({ title, children }) => {
  const { openToDo } = useModalContext();

  // const reorder = (list, startIndex, endIndex) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);
  //   return result;
  // };

  // const onDragEnd = (result) => {
  //   if (!result.destination) {
  //     result;
  //   }

  //   const items = reorder(tasks, result.source.index, result.destination.index);
  //   setTasks(items);

  // };

  // if (openToDo) {
    return (
      <div className="bg-violet-100 rounded-md h-fit  drop-shadow-md">
        <h1 className="text-stone-500 font-semibold text-xs mb-3 ml-3 mt-2">
          {title}
        </h1>
        {/* <DragDropContext onDragEnd={onDragEnd}>
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
        </DragDropContext> */}
        {children}
      </div>
    );
  // }
};
