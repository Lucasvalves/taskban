import useAppContext from '../../hook/useAppContext'
import { MdOutlineWatchLater } from "react-icons/md";

// const TaskProps = {
//   title,
//   description,
//   date,
//   priority
// }

export const TaskCard = ({taskName}) =>{

	const {openToDo} = useAppContext()


  if (openToDo) { 
    return (
      <div className="flex flex-row items-center gap-5 w-full left-0 top-0 h-screen">
        <div className="bg-violet-100 rounded-md h-fit w-[300px] drop-shadow-md ">
          <h1 className="text-stone-500 font-semibold text-xs mb-3 ml-3 mt-2 ">{taskName} (0)</h1>       
          <div className= "h-5/6 flex my-5  w-full flex-col items-center ">
            <div className=" bg-white h-1/6  rounded-md drop-shadow-md w-6/6 mx-3">
              <h1 className="text-stone-500 font-semibold text-base mb-3 ml-4 mt-4 ">Testar Navegadores</h1>
              <p className="text-stone-500 text-sm m-4">
                Verificar e garantir a compatibilidade da
                aplicação em diferentes navegadores.
              </p>
              <div className=" flex flex-row m-4">
                <span className="w-2/4  flex items-center flex-row gap-1 text-stone-500 ">
                  <MdOutlineWatchLater />
                  <span className=" text-stone-500 text-xs font-semibold" >
                    25 /12/2023
                  </span>
                </span>
                <span className="w-2/4 h-fit  flex justify-end">
                  <span className="border border-green-400 text-green-400 bg-white
                  text-xs pb-0.5 py-1 px-4 rounded-xl text-justify" >LOW</span>
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }

}