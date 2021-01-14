import React from 'react';
import { NavLink } from 'react-router-dom' ;
import CommissionForm from '../Forms/CommissionForm';
import LogoutButton from '../auth/LogoutButton';

// CSS
import "./NavBar.css"

const NavBar = ({ setAuthenticated, authenticated, setUser, user }) => {
  return (
    <nav className="nav-bar">
        <div className="nav-elements">
          <NavLink to="/" exact={true} activeClassName="active">
            Home 
          </NavLink>
          {authenticated?
          <>
          <NavLink to="/create-a-commission" exact={true} activeClassName="active">
            Create A Commission
          </NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <LogoutButton setAuthenticated={setAuthenticated} setUser={setUser} user={user}/>
          </>
          : 
          <>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          </>
          }
        </div>
    </nav>
  )
}

export default NavBar;