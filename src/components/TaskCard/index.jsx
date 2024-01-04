import { MdOutlineWatchLater } from 'react-icons/md';
import { handlePriorityColor } from '../../utils/constants';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Draggable } from "@hello-pangea/dnd";
import { FaRegTrashCan as Delete} from "react-icons/fa6";
import { FaRegEdit as  Edit} from "react-icons/fa";
import useModalContext from '../../hook/useModalContext';
import { useTasks } from '../../hook/useTasks';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'



export const TaskCard = ({ task, index, taskEntries, indexTaskEntries }) => {

  const {setIsPoupUpVisible,isPoupUpVisible, confirmedDeletion} = useModalContext();
  const { removeTask } = useTasks();


  const priorityClassName = handlePriorityColor(task.priority);

  const textColor = new Date(task.date) <= new Date() ? 'text-red-400' : 'text-stone-500 ';

  const handleDeleteTask = () =>{
    console.log(confirmedDeletion);
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você não podera reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF7979",
      cancelButtonColor: "#48409E",
      confirmButtonText: "Comfirmar"
    }).then((result) => {
      if (result.isConfirmed) {
        removeTask(task.id, indexTaskEntries)
        console.log(indexTaskEntries);
        toast.success("Task excluida!")
      }
    });
  };
  return (
    <>
      <Draggable key={task.id} draggableId={task.id} index={index}>
        {(provided) => (    
        <div className="  bg-white  min-h-[155px] w-full rounded-xl p-3 shadow sm:p-5 text-stone-500 "
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}    
        >
          <span className='flex justify-between'>
            <h1 className="break-words font-semibold sm:text-xl ">
              {task.title}
            </h1>
            <span className=' flex items-center'>
              <Edit className='text-orange-300 cursor-pointer' size={15} />
              <Delete className='text-red-350 ml-1 cursor-pointer' size={15} onClick={handleDeleteTask}/> 
            </span>
          </span>
          <p className=" text-sm break-words mt-4  font-medium sm:text-sm">
            {task.description}
          </p>
          <div className="flex w-full items-center text-[12px] sm:text-sm  mt-4">
            {taskEntries === 'Done' ? (
              <>
                <CheckCircleOutlineIcon className="w-4 text-green-400  sm:w-6" />                          
                <span className='text-green-400  text-base ml-2.5 font-semibold'>Finalizado</span>  
              </>        
            ) : (
                <>
                  <span
                    className={`${textColor} flex flex-row text-[0.70rem] font-semibold  items-center text-xs w-2/4`}              
                  >
                    <MdOutlineWatchLater className="h-fit w-6 mr-2"  />
                    {new Date(task.date).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="h-6 flex justify-end items-center ml-2 w-2/4">
                    <span
                      className={`${priorityClassName}  uppercase px-3 rounded-xl text-sm  `}
                    >
                      {task.priority}
                    </span>
                  </span>
                </>
            )}
            </div>
          </div>
        )}
        </Draggable>

      </>
  );
};


