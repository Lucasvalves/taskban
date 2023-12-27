import { BsCalendar2Event, BsListUl } from 'react-icons/bs';
import { BiSolidDashboard } from 'react-icons/bi';
import { ItemsNavegation } from '../ItemsNavegation';
export const ListSideBar = () => {
  return (
    <ul className="flex flex-col text-stone-50 text- justify-center font-medium gap-6 mt-5 m-5  text-stone-500 ">
      <a
        className="flex flex-row items-center text-purple-950  "
      >
        <BiSolidDashboard size={25} className="items-end " />
        <ItemsNavegation text="Quadro"/>
      </a>
      <a
        className="flex flex-row items-center active:text-purple-950 "
      >
        <BsCalendar2Event size={25}  className="items-end" />
        <ItemsNavegation text="Lista"/>
      </a>
      <a
        className="flex flex-row items-center active:text-purple-950 "
      >
        <BsListUl size={25}  className="items-end" />
        <ItemsNavegation text="Timeline"/>
      </a>
      <a
        className="flex flex-row items-center active:text-purple-950 "
      >
        <BsCalendar2Event size={25}  className="items-end" />
        <ItemsNavegation text="Calendário"/>
      </a>
    </ul>
  );
};
