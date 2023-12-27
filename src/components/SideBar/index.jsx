import { ListSideBar } from '../ListSideBar';
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";

import useSidebarContext from '../../hook/useSidebarContext'


export const SideBar = () => {

  const { expanded, setExpanded  } = useSidebarContext()

  return (
    <aside className='h-screen z-50 '>
      <nav className="h-full bg-white shadow-sm flex flex-col">
        <div className="px-4 py-10 pb-2 flex justify-between items-center">
          <h1 className={`text-purple-950  font-semibold text-xl sm:text-3xl overflow-hidden flex transition-all ${
              expanded ? "w-full" : "w-0"
            }`}>
            TASKBAN
          </h1>
          <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-[#e5e7eb] text-stone-500 hoverbg-violet-150">
            {expanded ? <CgPushChevronLeft/> : <CgPushChevronRight/>  }
          </button>
        </div>
        <div>
          <ListSideBar />
        </div>
      </nav>
    </aside>
  );


};

