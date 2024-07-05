import './Card.css'

const Card = ({title,content,image}) => {
  return (
    <>
        <div className="card-image">

        <img src={image} alt="" />
        </div>
        <h2>{title}</h2>
        <p>{content}</p>
    </>
  )
}

export default Card
