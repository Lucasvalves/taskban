export const Button = ({ text, className, onClick}) => {
  return <button className={`rounded-xl ${className}`} onClick={onClick}>{text}</button>
}
