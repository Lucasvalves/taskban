export const ItemSideBar = ({ icon, text }) => {
  return (
    <li className="flex gap-4 items-center active:text-purple-950 cursor-pointer ">
      {icon}
      {text}
    </li>
  );
};
