import useModalContext from '../../hook/useModalContext';
import Button from '../Button';

export const NavBar = () => {
  const { setIsModalVisible } = useModalContext();

  return (
    <nav className="h-20 w-full bg-purple-950 flex justify-end items-center fixed self-end z-50">
      <Button
        className="bg-violet-150 text-violet-50 rounded h-10 w-30 m-8 sm:m-20  text-xs sm:text-sm px-2 sm:px-4  "
        onClick={() => setIsModalVisible(true)}
        text=" + Novo Card"
      />
    </nav>
  );
};
