import { BsCalendar2Event, BsListUl } from 'react-icons/bs';
import { BiSolidDashboard } from 'react-icons/bi';
import { ItemSideBar } from '../ItemSideBar';
export const ListSideBar = () => {
  return (
    <ul className="flex flex-col text-stone-500 font-medium gap-6 mt-10 m-5 ">
      <a
        href=""
        className="flex flex-row gap-4 items-center active:text-purple-950 "
      >
        <BiSolidDashboard className="items-end" />
        <ItemSideBar text="Quadro"></ItemSideBar>
      </a>
      <a
        href=""
        className="flex flex-row gap-4 items-center active:text-purple-950 "
      >
        <BsCalendar2Event className="items-end" />
        <ItemSideBar text="Lista"></ItemSideBar>
      </a>
      <a
        href=""
        className="flex flex-row gap-4 items-center active:text-purple-950 "
      >
        <BsListUl className="items-end" />
        <ItemSideBar text="Timeline"></ItemSideBar>
      </a>
      <a
        href=""
        className="flex flex-row gap-4 items-center active:text-purple-950 "
      >
        <BsCalendar2Event className="items-end" />
        <ItemSideBar text="Calendário"></ItemSideBar>
      </a>
    </ul>
  );
};
