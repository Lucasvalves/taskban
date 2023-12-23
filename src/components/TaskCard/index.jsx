import { MdOutlineWatchLater } from 'react-icons/md';
import { handlePriorityColor } from '../../utils/functions';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const TaskCard = ({ task, index, taskEntries }) => {
  const priorityClassName = handlePriorityColor(task.priority);

  const textColor =
    new Date(task.date) < new Date() ? 'text-red-400' : 'text-stone-500 ';

  return (
    //<Draggable key={task.id} draggableId={task.id} index={index}>

    <div className=" h-1/6 bg-white  rounded-lg drop-shadow-md w-full">
      <h1 className="text-stone-500 font-semibold text-base mb-3 ml-4 mt-4  ">
        {task.title}
      </h1>
      <p className="text-stone-500 text-xs m-4 h-fit text-justify font-medium">
        {task.description}
      </p>

      {taskEntries === 'Done' ? (
        <div className=" flex gap-2 mx-4 mb-4 justify-start items-center">
          <CheckCircleOutlineIcon className="h-fit w-6 text-green-400" />

          <span className="text-green-400   text-sm ">
            Finalizado
          </span>
        </div>
      ) : (
        <div className=" w mx-4 mb-4 flex flex-row">
          <span className="w-2/4 text-stone-500  ">
            <span
              className={`${textColor} flex flex-row text-[0.70rem] ml-1 font-semibold whitespace-nowrap items-center gap-2 text-xs`}
              
            >
            <MdOutlineWatchLater className="h-fit w-6 " />

              {new Date(task.date).toLocaleDateString('pt-BR')}
            </span>
          </span>
          <span className="w-2/4 h-6 flex justify-end items-center">
            <span
              className={`${priorityClassName}  uppercase px-3 rounded-xl text-sm  `}
            >
              {task.priority}
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

//  <span className="w-2/4  flex items-center flex-row text-stone-500  ">
// <MdOutlineWatchLater className="h-fit w-6 " />
// <span
//   className={`${textColor} text-[0.70rem] ml-1 font-semibold whitespace-nowrap`}
// >
//   {new Date(task.date).toLocaleDateString('pt-BR')}
// </span>
// </span>
// <span className="w-2/4 h-6 flex justify-end items-center">
// <span
//   className={`${priorityClassName}  uppercase px-3 rounded-xl text-sm  `}
// >
//   {task.priority}
// </span>
// </span>
