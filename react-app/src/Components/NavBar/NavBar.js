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
                <div className="navbar-dropdown" onBlur={onBlurHandler} onFocus={onFocusHandler} onClick={onClickHandler} tabIndex="-1">
                  <Dropdown isOpen={isOpen} setAuthenticated={setAuthenticated} authenticated={authenticated} setUser={setUser} user={user}/>
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