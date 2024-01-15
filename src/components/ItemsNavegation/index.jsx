import useSidebarContext from '../../hook/useSidebarContext'

export const ItemsNavegation = ({text, active, alert }) => {

  const { expanded } = useSidebarContext()

  return (
      <li className={`flex gap-4 items-center active:text-purple-950 cursor-pointer 
          ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          } `
        }>
        <span
          className={`overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}>
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {text}
          </div>
        )}
      </li>
  );

};
