import "./Footer.css";
import logo from "../assets/logo.svg";
import iconFB from "../assets/icon-facebook.svg";
import iconYoutube from "../assets/icon-youtube.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import Button from "../Button/Button";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-firstblock">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-socialmedia">
            <img src={iconFB} alt="FB" />
            <img src={iconYoutube} alt="youtube" />
            <img src={iconTwitter} alt="x" />
            <img src={iconPinterest} alt="pintrest" />
            <img src={iconInstagram} alt="instagram" />
          </div>
        </div>
        <div className="footer-second-block">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            
          </ul>
          <ul>
          <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-lastblock">
          <div className="footer-button">
           <Button height={'40px'} width={'150px'} title={'Request Invite'} />
          </div>
          <div className="copyright-msg">
            &copy; Easybank. All Right Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
