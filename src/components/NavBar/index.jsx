import useAppContext from '../../hook/useAppContext';
import Button from '../Button';

export const NavBar = () => {
  const { setIsModalVisible  } = useAppContext();

  return (
    <nav className=" w-full h-20 bg-purple-950 flex justify-end items-center fixed z-0">
      <Button
        className="bg-violet-150 text-violet-50 rounded h-10 w-30 m-20 text-sm px-4 "
        onClick={() => setIsModalVisible(true)} text=" + Novo Card"
      />
    </nav>
  );
};

