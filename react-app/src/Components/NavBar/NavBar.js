import React, {useState} from 'react';
import { NavLink } from 'react-router-dom' ;
import LogoutButton from '../auth/LogoutButton';
import Dropdown from './NavDropDown'

// CSS
import "./CSS/navbar.css"

const NavBar = ({ setAuthenticated, authenticated, setUser, user }) => {

  // --- State ---
  const [isOpen, setIsOpen] = useState(false);

  // --- Helper Functions ---

  let timeOutId = null;

  const onClickHandler = () => {
    setIsOpen(true);
  }

  const onBlurHandler = () => {
    timeOutId = setTimeout(() => {
      setIsOpen(false);
    })
  }

  const onFocusHandler = () => {
    clearTimeout(timeOutId);
  }

  return (
    <nav className="nav-bar">
        <div className="nav-bar main-items"> 
          <div className="nav-bar home-icon">
          <NavLink to="/" exact={true} activeClassName="active">
            Home 
          </NavLink>
          </div>

          <div className="nav-bar user-options">
          {authenticated?
            <>
          
              <div className="nav-bar user-options__loggedin-menu">
                <h1 id="nav-bar__username">{`Welcome ${user.username}!`}</h1>
                <div className="nav-bar user-options__dropdown"  onBlur={onBlurHandler} onFocus={onFocusHandler} onClick={onClickHandler} tabIndex="-1">
                  <Dropdown isOpen={isOpen} setAuthenticated={setAuthenticated} authenticated={authenticated} setUser={setUser} user={user}/>
                </div>
              </div>
            </>

            :
            <div>
              <NavLink to="/login" exact={true} activeClassName="active" className="nav-links__menu">Sign Up</NavLink>
              <NavLink to="/login" exact={true} activeClassName="active" className="nav-links__menu">Login</NavLink>
            </div>
          }
          </div>
        </div>
    </nav>
  )
}

export default NavBar;