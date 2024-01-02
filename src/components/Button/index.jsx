const Button = ({ type, text, className, onClick}) => {
  return <button type={type} className={`rounded-xl ${className}`} onClick={onClick}>{text} </button>
}
export default Button