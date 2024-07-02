import './Button.css'

const Button = ({title,width,height,className}) => {
  return (
    <>
      <button className={className} style={{width:width,height:height}} >{title}</button>
    </>
  )
}

export default Button
