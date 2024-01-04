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
        className="hidden "
        {...register}
      />
      {value.toUpperCase()}
    </label>
  );
};
