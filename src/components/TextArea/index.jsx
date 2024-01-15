export const TextArea = ({
  register,
  label,
  placeholder,
  className,
  defaultValue,
  ...restProps
}) => {
  return (
    <>
      <label className="relative top-1.5 left-1.5 pointer-events-none text-stone-500 bg-white w-fit text-xs z-40  ">
        {label}
      </label>
      <textarea
        rows="3"
        name="content"
        placeholder={placeholder}
        className={className}
        defaultValue={defaultValue}
        {...register}
      />
    </>
  );
};

export default TextArea;
