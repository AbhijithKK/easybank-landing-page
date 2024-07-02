import './NavBar.css'
import logo from '../../src/assets/logo.svg'
import Button from '../Button/Button'
const NavBar = () => {
  return (
    <>
    <div className="nav-container">
        <div className="nav-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="nav-menu-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
        </div>
            <div className="nav-button">
                <Button title={'Request Invite'} width={'150px'} height={'25px'} />
            </div>
    </div>
    </>
  )
}

export default NavBar
