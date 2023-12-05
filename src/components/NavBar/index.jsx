import useAppContext from '../../hook/useAppContext';
export const NavBar = () => {
  const { setOpenModal } = useAppContext();

  return (
    <nav className=" w-full h-20 bg-purple-950 flex justify-end items-center ">
      <button
        className="bg-violet-150 text-violet-50 rounded h-10 w-30 m-20 text-sm pl-4 pr-4 "
        onClick={() => setOpenModal(true)}
      >
        + Novo Card
      </button>
    </nav>
  );
};
