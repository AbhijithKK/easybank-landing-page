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
           <div className='navList'>

                <div>Home</div>
                <div>About</div>
                <div>Content</div>
                <div>Blog</div>
                <div>Careers</div>
           </div>
            <div className="nav-bg-effect"></div>
        </div>
            <div className="nav-button">
                <Button title={'Request Invite'} width={'150px'} height={'25px'} />
            </div>
    </div>
    </>
  )
}

export default NavBar
