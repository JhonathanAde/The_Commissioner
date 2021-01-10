import React from 'react';
import { NavLink } from 'react-router-dom' ;
import CommissionForm from '../Forms/CommissionForm';

// CSS
import "./NavBar.css"

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="nav-bar">
        <div className="nav-elements">
          <NavLink to="/" exact={true} activeClassName="active">
            Home 
          </NavLink>
          <NavLink to="/create-a-commission" exact={true} activeClassName="active">
            Create A Commission
          </NavLink>
          {/* <div className="auth-links">
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up 
          </NavLink>
          </div> */}
        </div>
    </nav>
  )
}

export default NavBar;