import React, {useState} from 'react';
import LogoutButton from '../auth/LogoutButton';
import { NavLink } from 'react-router-dom';
import './NavDropDown.css'


const Dropdown = ({openMenu, setAuthenticated, authenticated, setUser, user}) => {
  if (!openMenu) return null
  
  return (
    <>
      <div className="nav-dropmenu">
        <ul>
          <li>
            <NavLink to="/create-a-commission" exact={true} className="nav-links" activeClassName="active">
            Create
          </NavLink>
          </li>
          <li>
            <NavLink to={`/${user.username}/requests`} className="nav-links">
              Requests
              </NavLink>
          </li>
          <li>
            <NavLink to={`/${user.username}/profile`} className="nav-links" onClick={console.log('clicked!!')}>
            Profile
          </NavLink>
          </li>
          <li>
            <NavLink to={`/${user.username}/settings`} exact={true} className="nav-links">
              Settings
            </NavLink>
          </li>
          <li>
            <LogoutButton className="nav-links" setAuthenticated={setAuthenticated} setUser={setUser} user={user}/>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Dropdown;