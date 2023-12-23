import { ListSideBar } from '../ListSideBar';

export const SideBar = () => {
  return (
    <nav className="bg-white sm:w-5/12 xl:w-3/12 2xl:w-3/12  h-screen flex items-center flex-col z-50">
      <div className="	w-full h-24 flex justify-center items-end">
        <h1 className="text-purple-950 font-semibold text-xl sm:text-3xl  ">
          TASKBAN
        </h1>
      </div>
      <div>
        <ListSideBar />
      </div>
    </nav>
  );
};
