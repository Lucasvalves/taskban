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
  // flex flex-col items-center gap-5     flex-auto

  if (openToDo) { 
    return (
        <div className="bg-violet-100 rounded-md h-fit  drop-shadow-md">
          <h1 className="text-stone-500 font-semibold text-xs mb-3 ml-3 mt-2 ">{taskName} (0)</h1>       
          <div className= "h-5/6 flex my-5  w-full flex-col items-center ">
            <div className=" bg-white h-1/6  rounded-md drop-shadow-md w-6/6 mx-3">
              <h1 className="text-stone-500 font-semibold text-base mb-3 ml-4 mt-4 ">Testar Navegadores</h1>
              <p className="text-stone-500 text-xs m-4 h-fit  text-justify ">
                Verificar e garantir a compatibilidade da
                aplicação em diferentes navegadoresss.
              </p>
              <div className=" flex flex-row mx-4 mb-4">
                <span className="w-2/4  flex items-center flex-row text-stone-500 ">
                  <MdOutlineWatchLater className="h-fit w-6 "/>
                  <span className=" text-stone-500 text-[0.70rem] ml-1 font-semibold whitespace-nowrap" >
                    25 /12/2023
                  </span>
                </span>
                <span className="w-2/4 h-6 flex justify-end ">
                  <span className="border border-green-400 text-green-400 bg-white
                    py-1 px-2.5 rounded-xl text-justify text-[0.70rem]" >LOW</span>
                </span>
              </div>
            </div>
        </div>
      </div>
    )
  }

}