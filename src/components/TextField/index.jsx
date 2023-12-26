import { useForm } from 'react-hook-form';

const TextField = ({ label, register, placeholder, icon,error, className,onChange, ...otherProps}) => {
  const handleFocus = (event) => {
    if (placeholder === 'Selecione a data de entrega')
      event.target.type = 'date';
  };

  return (
    <div className="flex flex-col">
      <label className="relative top-1.5 left-1.5 pointer-events-none text-gray-200 bg-white text-xs z-40 whitespace-nowrap  w-fit flex flex-col ">
        {label}
      </label>
      <div className="relative flex items-center ">
        <input
          className={[className, error]}
          placeholder={placeholder}
          onFocus={handleFocus}
          type="text"
          {...register}
          maxLength={255}
          onChange={onChange}
        />
        {icon && (
          <div className="absolute right-1.5 bottom-4 translate-y-2/4 ">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextField;
