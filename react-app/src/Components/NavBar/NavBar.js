import React from 'react';
import { NavLink } from 'react-router-dom' ;
import LogoutButton from '../auth/LogoutButton';
// import CommissionForm from '../Forms/CommissionForm';
// import Modal from "../Pages/Modal/Modal";
// import useModal from "../Pages/Modal/useModal";

// CSS
import "./NavBar.css"

const NavBar = ({ setAuthenticated, authenticated, setUser, user }) => {

  // const {isVisible, toggleModal} = useModal();

  return (
    <nav className="nav-bar">
        <div className="nav-elements">
          <NavLink to="/" exact={true} activeClassName="active">
            Home 
          </NavLink>
          {authenticated?
          <>
          <div className="user-options">
          <NavLink to="/create-a-commission" exact={true} activeClassName="active">
            Create A Commission
          </NavLink>
          <div>
          <NavLink to={`/${user.username}/profile`}>
            Profile
          </NavLink>
          </div>
          <LogoutButton setAuthenticated={setAuthenticated} setUser={setUser} user={user}/>
          </div>
          </>
          : 
          <>
          <NavLink to="/login" exact={true} activeClassName="active">
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