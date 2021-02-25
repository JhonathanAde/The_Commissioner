import React, {useState} from 'react';
import { NavLink } from 'react-router-dom' ;
import LogoutButton from '../auth/LogoutButton';
import Dropdown from './NavDropDown'

// CSS
import "./CSS/navbar.css"

const NavBar = ({ setAuthenticated, authenticated, setUser, user }) => {

  // --- State ---
  const [openMenu, setOpenMenu] = useState(false);
  const [eventCheck, setEventCheck] = useState(null);

  // --- Helper Functions ---
  const openDropDown = (e) => {
    if(!openMenu){
      setOpenMenu(true);

      document.addEventListener('click', (e) => {
        console.log(e.target)
        console.log(eventCheck)
        if(openMenu){
          closeDropDown(e);
        }
          // if(eventCheck && eventCheck != e.target){
          //   console.log("second check")
          //   setOpenMenu(false);
          // }
    })
    }
}

  
  const closeDropDown = (e) => {
    setOpenMenu(false)
      // if(eventCheck.contains(e.target)){
      //   console.log("got here")
      //   setOpenMenu(false);
      //   document.removeEventListener('click', (e) => {
      //     closeDropDown(e)
      //   })
      // }
    // }
  }

  console.log(eventCheck)

  // console.log(eventCheck);
  
  return (
    <nav className="nav-bar">
          <ul className="homelinks">
            <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home 
          </NavLink>
            </li>
          </ul>
          {authenticated?
            <>
          <ul className="authlinks">

            <li>
             {/* {`Welcome ${user.username}!`} */}
            </li>

            <li>
              <div className="user-options">
                <h1>{`Welcome ${user.username}!`}</h1>
                <div className="navbar-dropdown" onClick={openDropDown} tabIndex="-1">
                  <Dropdown openMenu={openMenu} setAuthenticated={setAuthenticated} authenticated={authenticated} setUser={setUser} user={user} setEventCheck={setEventCheck}/>
                </div>
              </div>
            </li>
          </ul>
            </>

            :
            <ul>
              <li id="login-link">
                <NavLink to="/login" exact={true} activeClassName="active" className="nav-links">Login</NavLink>
              </li>
            </ul>
          }
    </nav>
  )
}

export default NavBar;