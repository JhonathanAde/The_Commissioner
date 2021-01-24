import React, {useState} from 'react';
import { NavLink } from 'react-router-dom' ;
import LogoutButton from '../auth/LogoutButton';
import Dropdown from './NavDropDown'
// import CommissionForm from '../Forms/CommissionForm';
// import Modal from "../Pages/Modal/Modal";
// import useModal from "../Pages/Modal/useModal";

// CSS
import "./NavBar.css"

const NavBar = ({ setAuthenticated, authenticated, setUser, user }) => {

  // const {isVisible, toggleModal} = useModal();

  const [openMenu, setOpenMenu] = useState(false)

  const openDropDown = () => {
    setOpenMenu(true)
  }

  const closeDropDown = () => {
    setOpenMenu(false)
  }

  return (
    <nav className="nav-bar">
        <div className="nav-elements">
          <NavLink to="/" exact={true} activeClassName="active" className="nav-links">
            Home 
          </NavLink>
          {authenticated?
          <>
          <div className="user-options">
          <NavLink to="/create-a-commission" exact={true} className="nav-links" activeClassName="active">
            Create A Commission
          </NavLink>
          <div>
          <NavLink to={`/${user.username}/profile`} className="nav-links">
            Profile
          </NavLink>
          </div>
          <LogoutButton className="nav-links" setAuthenticated={setAuthenticated} setUser={setUser} user={user}/>
          </div>
          <div className="user-selections">
              {`Welcome ${user.username}!`}
            <button className="navbar-dropdown" onFocus={openDropDown} onBlur={closeDropDown}>
            <Dropdown openMenu={openMenu} setAuthenticated={setAuthenticated} authenticated={authenticated} setUser={setUser} user={user}/>
            </button>
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