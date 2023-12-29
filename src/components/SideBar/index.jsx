import { ListSideBar } from '../ListSideBar';
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";

import useSidebarContext from '../../hook/useSidebarContext'


export const SideBar = () => {

  const { expanded, setExpanded  } = useSidebarContext()

  return (
    <aside className='h-screen z-50 '>
      <nav className="h-full bg-white shadow-sm flex flex-col relative">
        <div  className=" py-10 pb-2 flex justify-center items-center relative">
          <h1 className={`text-purple-950 font-semibold text-xl ml-5 sm:text-3xl overflow-hidden flex transition-all ${
              expanded ? "w-full " : "w-0"
            }`}>
            TASKBAN
          </h1>
        </div>
        <div>
          <ListSideBar />
        </div>
          <button onClick={() => setExpanded(curr => !curr)} className="absolute  top-2/4 right-[-14px] 
            translate-y-2/4  p-1.5 rounded-full border-2  bg-purple-950 text-white">
            {expanded ? <CgPushChevronLeft size={15} /> : <CgPushChevronRight size={15}/>  }
          </button>          
      </nav>
    </aside>
  );


};

