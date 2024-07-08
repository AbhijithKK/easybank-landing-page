import Button from "../Button/Button";
import bgImg from "../assets/image-mockups.png";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <>
      <div className="intro-container">
        {/* <div className="intro-left"> */}
        <div className="intro-content">
          <h2> Next generation digital banking</h2>
          <small>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </small>
          <Button title={"Request Invite"} width={"150px"} height={"30px"} />
        </div>
        <div className="intro-bg-img">
          <img src={bgImg} alt="" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default IntroSection;
