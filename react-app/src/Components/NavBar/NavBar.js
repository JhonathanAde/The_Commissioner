import React, {useState} from 'react';
import { NavLink } from 'react-router-dom' ;
import LogoutButton from '../auth/LogoutButton';
import Dropdown from './NavDropDown'

// CSS
import "./CSS/navbar.css"

const NavBar = ({ setAuthenticated, authenticated, setUser, user }) => {

  // --- State ---
  const [openMenu, setOpenMenu] = useState(false);

  // --- Helper Functions ---
  const openDropDown = (e) => {
    e.target.focus();
    setOpenMenu(true);
  }

  const closeDropDown = (e) => {
    e.target.blur();
    setOpenMenu(false);
  }

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
                <div className="navbar-dropdown" onClick={openDropDown} onMouseLeave={closeDropDown} tabIndex="0">
                  <Dropdown openMenu={openMenu} setAuthenticated={setAuthenticated} authenticated={authenticated} setUser={setUser} user={user}/>
                </div>
              </div>
            </li>
          </ul>
            </>

            :
            <ul>
              <li>
                <NavLink to="/login" exact={true} activeClassName="active" className="nav-links">Login</NavLink>
              </li>
            </ul>
          }
    </nav>
  )
}

export default NavBar;