import Button from '../Button/Button'
import bgImg from '../assets/image-mockups.png'
import './IntroSection.css'
const IntroSection = () => {
  return (
    <>
      <div className="intro-container">
        <div className="intro-left">
         <div className="intro-content">
         <h2>Next generation digital banking</h2>
          <small>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. In sit quae illum eligendi totam earum un
            de? Harum rerum optio vitae facilis nobis dolorum invento
            re maxime sit! Sed ipsum commodi error?</small>
            <Button title={'Request Invite'} width={'150px'} height={'30px'} />
         </div>
          <img src={bgImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default IntroSection
