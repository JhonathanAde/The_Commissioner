import React from 'react';
import LogoutButton from '../auth/LogoutButton';
import { NavLink } from 'react-router-dom';
// import './CSS/navdropdown.css'


const Dropdown = ({children, active, menuName}) => {
  return (
    <>
      <div 
        className={!active ? `nav-dropdown-${menuName}` : `nav-dropdown-${menuName} active`}
        data-dropdown-menu
        >
        {children}
      </div>
    </>
  )
}

export default Dropdown;