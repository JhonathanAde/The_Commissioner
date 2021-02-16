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
        <div className="nav-elements">
          <NavLink to="/" exact={true} activeClassName="active" className="nav-links">
            Home 
          </NavLink>
          {authenticated?
          <>
          <div className="user-selections">
            <div className="nav-username">
              {`Welcome ${user.username}!`}
            </div>
            <div className="navbar-dropdown" onClick={openDropDown} onMouseLeave={closeDropDown} tabIndex="0">
              <Dropdown openMenu={openMenu} setAuthenticated={setAuthenticated} authenticated={authenticated} setUser={setUser} user={user}/>
            </div>
          </div>
          </>
          : 
          <>
            <NavLink to="/login" exact={true} activeClassName="active" className="nav-links">
              Login
            </NavLink>
          {/* <button onClick={toggleModal}>Create a commission</button>
          <Modal isVisible={isVisible} hideModal={toggleModal} /> */}
          </>
          }
        </div>
    </nav>
  )
}

export default NavBar;