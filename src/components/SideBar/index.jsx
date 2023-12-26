import { ListSideBar } from '../ListSideBar';
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";

import useSidebarContext from '../../hook/useSidebarContext'


export const SideBar = () => {

  const { expanded, setExpanded  } = useSidebarContext()

  return (
    <aside className='h-screen z-50 '>
      <nav className="h-full bg-white shadow-sm flex flex-col">
        <div className="px-4 py-10 pb-2 flex justify-between items-center bg-red-400">
          <h1 className={`text-purple-950  font-semibold text-xl sm:text-3xl overflow-hidden bg-neutral-400 flex transition-all ${
              expanded ? "w-full" : "w-0"
            }`}>
            TASKBAN
          </h1>
          <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-[#e5e7eb] text-stone-500 hoverbg-violet-150">
            {expanded ? <CgPushChevronLeft/> : <CgPushChevronRight/>  }
          </button>
        </div>
        {/* <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider> */}
        <div>
          <ListSideBar />
        </div>
      </nav>
    </aside>
  );
};

        // <div className="	w-full h-24 flex justify-center items-end">
        //   <h1 className="text-purple-950 font-semibold text-xl sm:text-3xl  ">
        //     TASKBAN
        //   </h1>
        // </div>
        // <div>
        //   <ListSideBar />
        // </div>