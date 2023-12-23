
export const TaskList = ({ title, children }) => {


  return (
    <div
      className="bg-violet-100 mx-2 rounded-xl drop-shadow-md grow-0 shrink-0 basis-80 z-0 h-fit mt-40"
    >
      <h1 className="text-stone-500 font-semibold text-xs mb-3 ml-3 mt-2">
        {title}
      </h1>

      <div className="h-5/6 flex my-5 flex-col gap-3 items-center mx-3 ">
        {children}
      </div>
    </div>
  );
  // }
};
