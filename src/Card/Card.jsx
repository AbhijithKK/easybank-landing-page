import './Card.css'

const Card = ({title,content,image,name}) => {
  return (
    <>
        <div className="card-image">

        <img src={image} alt="" />
        </div>
        <small>{name}</small>
        <h2>{title}</h2>
        <p>{content}</p>
    </>
  )
}

export default Card
