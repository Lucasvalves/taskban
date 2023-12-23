import { MdOutlineWatchLater } from 'react-icons/md';
import { Draggable } from '@hello-pangea/dnd';

export const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className=" bg-white h-1/6  rounded-md drop-shadow-md w-full"
        >
          <h1 className="text-stone-500 font-semibold text-base mb-3 ml-4 mt-4  ">
            {task.title}
          </h1>
          <p className="text-stone-500 text-xs m-4 h-fit text-justify ">
            {task.description}
          </p>
          <div className=" flex flex-row mx-4 mb-4">
            <span className="w-2/4  flex items-center flex-row text-stone-500 ">
              <MdOutlineWatchLater className="h-fit w-6 " />
              <span className=" text-stone-500 text-[0.70rem] ml-1 font-semibold whitespace-nowrap">
                {task.date}
              </span>
            </span>
            <span className="w-2/4 h-6 flex justify-end ">
              <span
                className="border border-green-400 text-green-400 bg-white
      py-1 px-2.5 rounded-xl text-justify text-[0.70rem]"
              >
                {task.priority}
              </span>
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};
