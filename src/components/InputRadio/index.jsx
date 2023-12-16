export const InputRadio = ({value, onChange, selectedOption, className, ...restProps}) =>{
  return(
    <label className={className}>
    <input type="radio" value={value} checked={selectedOption === value}
             onChange={onChange} className="hidden" />

      {value.toUpperCase()}</label>
  )
}