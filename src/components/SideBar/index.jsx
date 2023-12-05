import { BsCalendar2Event, BsListUl } from 'react-icons/bs';
import { BiSolidDashboard } from 'react-icons/bi';

export const SideBar = () => {
  return (
    <nav className="bg-white	w-1/6 h-screen flex items-center flex-col">
      <div className="	w-full h-24 flex justify-center items-end">
        <h1 className="text-purple-950 font-semibold text-3xl">TASKBAN</h1>
      </div>
      <div>
        <ul className="flex flex-col text-stone-500 font-medium gap-6 mt-10 mr-5  ">
          <li className="flex gap-4 items-center active:text-purple-950 cursor-pointer ">
            <BiSolidDashboard />
            Quadro
          </li>
          <li className="flex gap-4 items-center active:text-purple-950 cursor-pointer">
            <BsCalendar2Event />
            <span>Lista</span>
          </li>
          <li className="flex gap-4 items-center active:text-purple-950 cursor-pointer">
            <BsListUl />
            Timeline
          </li>
          <li className="flex gap-4 items-center active:text-purple-950 cursor-pointer">
            <BsCalendar2Event />
            Calendário
          </li>
        </ul>
      </div>
    </nav>
  );
};
