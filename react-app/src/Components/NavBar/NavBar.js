import React from 'react';
import { NavLink } from 'react-router-dom' ;
import CommissionForm from '../Forms/CommissionForm';
import LogoutButton from '../auth/LogoutButton';

// CSS
import "./NavBar.css"

const NavBar = ({ setAuthenticated, setUser, user }) => {
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
          <LogoutButton setAuthenticated={setAuthenticated} setUser={setUser} user={user}/>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </div>
    </nav>
  )
}

export default NavBar;