export const TaskList = ({ title, children, length }) => {

  return (
    length ? (
      <div       
        className="bg-violet-100   h-fit min-h-[243px] w-full max-w-[300px] flex-1 shrink-0 basis-full 
        rounded-3xl  px-2 py-[2px] shadow-card sm:min-w-[330px] sm:max-w-[330px]"
      >

        <h1 className="text-stone-500 font-semibold text-lg  mt-3 px-2 whitespace-nowrap">
          {title}
        </h1>
        <div className="h-5/6 flex mb-5 mt-6 flex-col gap-3 items-center mx-3 ">
          {children}
        </div>
      </div>
    ) : (
      <div
        className="bg-violet-100   h-fit flex  w-full max-w-[300px] flex-1 shrink-0 basis-full 
        rounded-3xl  px-2 py-[2px] shadow-card sm:min-w-[330px] sm:max-w-[330px]"
      >
        <h1 className="text-stone-500 font-semibold text-lg  px-2 py-2 whitespace-nowrap">
          {title}
        </h1>
      </div>
    )
  );
};
