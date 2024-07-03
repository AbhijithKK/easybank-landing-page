import './NavBar.css'
import logo from '../../src/assets/logo.svg'
import Button from '../Button/Button'
import menuIcon from '../assets/icon-hamburger.svg'
import closeIcon from '../assets/icon-close.svg'
import { useState } from 'react'
const NavBar = () => {
    const [isOpen ,setIsClose]=useState(false)
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
            <div className="nav-Menu-bar">
                {
                    isOpen===false?
                    <img src={menuIcon} onClick={()=>setIsClose(!isOpen)}  alt="logo" className='logo-menu-open' />
                    :
                    <img src={closeIcon} onClick={()=>setIsClose(!isOpen)} alt="logo" className='logo-menu-close' />
            }
        </div>
        
    </div>
    <div className={isOpen===false? 'closer':"nav-mobile-menu"}>
        <div className="mobile-nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar
