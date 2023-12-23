import { useForm } from 'react-hook-form';

<<<<<<< HEAD
const TextField = ({ label, register, placeholder, icon,error, className,...otherProps}) => {
=======
const TextField = ({ label, register, placeholder, icon, className }) => {
>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab
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
<<<<<<< HEAD
          className={[className, error]}
=======
          className={className}
>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab
          placeholder={placeholder}
          onFocus={handleFocus}
          type="text"
          {...register}
          maxLength={255}
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
