
export const TaskList = ({ title, children }) => {

  return (
    <div
      className="bg-violet-100  h-fit min-h-[243px] w-full max-w-[300px] flex-1 shrink-0 basis-full rounded-3xl  px-2 py-[14px] shadow-card sm:max-w-[330px]"
    >

      <h1 className="text-stone-500 font-semibold text-lg  my-5 bg-purple-950 px-2 ">
        {title}
      </h1>


      <div className="h-5/6 flex my-5 flex-col gap-3 items-center mx-3 ">
        {children}
      </div>
    </div>
  );

};
