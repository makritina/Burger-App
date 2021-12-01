import React, {useState} from "react"
import { Link } from "react-router-dom"
import StyledLink from './StyledLink.js'
import './NavBar.css'

const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
    }else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);
  
    return (
        <>
     <nav className={navbar ? 'navbarc active' : 'navbarc'}>
       <div className="navbar-container">
         <Link to="/" className="logo">
           The Beef
         </Link>
         <div className="menu-icon" onClick={handleClick}>
           <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>

       </div>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         <li className="nav-item ">
           <StyledLink to='/' className="nav-links" onClick={closeMobileMenu}>
             Home
           </StyledLink>
         </li>
         <li className="nav-item ">
           <StyledLink to='/' className="nav-links" onClick={closeMobileMenu}>
             Locations
           </StyledLink>
         </li>
         <li className="nav-item ">
           <StyledLink to='/' className="nav-links" onClick={closeMobileMenu}>
             Contact
           </StyledLink>
         </li>
         <li className="nav-item ">
           <Link to='/'  id="menu" onClick={closeMobileMenu}>
             Menu
           </Link>
         </li>
       </ul>
       </div>
     </nav>
</>
)
}
export default NavBar