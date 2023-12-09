const TextField = ({ label, placeholder, icon, className,...restProps }) => {
  const handleFocus = (event ) => {
    if (placeholder === 'Selecione a data de entrega') event.target.type = 'date';
  };


  return (
    <>
      {/* <label className="relative  top-[8px] left-1.5 text-gray-200 pointer-events-none bg-white text-xs z-40 w-1/5">{label}</label> */}
      <label className="relative top-1.5 left-1.5 pointer-events-none text-gray-200 bg-white w-1/6 text-xs z-40 whitespace-nowrap border border-green-400 ">{label}</label> 
        <input  className={className} placeholder={placeholder} onFocus={handleFocus} type="text" {...restProps} maxLength={255} />
        {icon && <span className="absolute top-2/4 right-2.5" >{icon}</span>}
    </>
  );
};

export default TextField;

