export const TextArea =({ label, placeholder, className,...restProps }) =>{
  return(
    <>
      <label className="relative top-1.5 left-1.5 pointer-events-none text-gray-200 bg-white w-fit text-xs z-40 ">{label}</label>
      <textarea
          rows="3"
          name="content"
          placeholder={placeholder}
          className={className}
      />
    </>
  )
}

export default TextArea