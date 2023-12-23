<<<<<<< HEAD
export const InputRadio = ({
  value,
  register,
  onChange,
  selectedOption,
  className,
  ...restProps
}) => {
  return (
    <label className={className}>
      <input
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={onChange}
        className="hidden"
        {...register}
      />

      {value.toUpperCase()}
    </label>
  );
};
=======
export const InputRadio = ({value,register, onChange, selectedOption, className, ...restProps}) =>{
  return(
    <label className={className}>
    <input type="radio" value={value} checked={selectedOption === value}
             onChange={onChange} className="hidden" 
             {...register}/>

      {value.toUpperCase()}</label>
  )
}
>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab
