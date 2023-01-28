import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom' ;
import { logout } from "../../services/auth";
import logo from "../../Logo/Commissioner_logo_white.png";
import states from 'states-us';


// Components //
import Dropdown from './NavDropDown';
import Modal from '../Modal/Modal';


// CSS //
import "./navbar.css"
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';


const NavBar = (
    {isClicked,
     active,
     authenticated,
     user,
     setAuthenticated,
     setUser
    }) => {

  // In Styles //
  let logoStyles = {
    backgroundImage: `url('${logo}')`,
    backgroundSize: 'cover',

  }

  // State //
  const [userMenuActive, setUserMenu] = useState(false);
  const [notificationsActive, setNotifcationsMenu] = useState(false);
  const [overlayActive, setOverlay] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const [authForm, setAuthForm] = useState("login");

  // Variables //
  let history = useNavigate();
  const statesList = states.map( x => x.name)

  // Helper Functions //

   const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    setUser({});
    setOverlay(false);
    setUserMenu(false);
    setOpen(false);
    setModalOpen(false);
    history.push("/");
  };

  const openUserMenu = (e) => {
    e.preventDefault();

    if(!userMenuActive){
      setOverlay(true);
      setUserMenu(true);
      setNotifcationsMenu(false);
    } else {
      setUserMenu(false)
      setOverlay(false);
    }
  }

  const openNotificationsMenu = (e) => {
    e.preventDefault();

    if(!notificationsActive){
      setOverlay(true);
      setNotifcationsMenu(true);
      setUserMenu(false);
    } else {
      setNotifcationsMenu(false)
      setOverlay(false);
    }
  }

  const closeMenu = (e) => {
    e.preventDefault();

    if(userMenuActive){
      setUserMenu(false);
    } 
    else if(notificationsActive){
      setNotifcationsMenu(false);
    }

    setOverlay(false);

    return
  }

  useEffect(() => {
    console.log(user)
  })

  // 

  return(
    <>
      {authenticated &&
        <nav className='navbar'>
          <div className='navbar-wrapper'>
            <div 
          className={!overlayActive ? 'nav-overlay' : 'nav-overlay active'}
          onMouseDown={closeMenu}
          ></div>
            <section className='navbar-main-links'>
              <ul>
                <li>
                  <NavLink to="/" >
                    <picture>
                      <img className="nav-main-logo" src={logo}/>
                    </picture>
                  </NavLink>
                </li>
                <li>Discover</li>
              </ul>
            </section>
            <section className='navbar-search'>
              <input></input>
              <div id="nav-search-btn">
                <button>Search</button>
              </div>
            </section>
            <section className='navbar-user-links'>
              <ul>
                <div data-nav-dropdown>
                  <li>
                    <NavLink to="#" onClick={openNotificationsMenu}>Notifications</NavLink>
                  </li>
                  <Dropdown active={notificationsActive} menuName="notifications">
                    <ul>
                      <li>Test</li>
                    </ul>
                  </Dropdown>
                </div>
                <div data-nav-dropdown>
                  <li>
                    <NavLink to="#" onClick={openUserMenu}>
                      <div className='nav-user-icon' style={{
                        backgroundImage: `url('${user.profile_pic}')`,
                        backgroundSize: "cover"
                      }}></div>
                    </NavLink>
                  </li>
                  <Dropdown active={userMenuActive} menuName="user_menu"> 
                    <ul>
                      <li>Profile</li>
                      <li>Settings</li>
                      <li>
                        <NavLink to="#" onClick={onLogout}>Log Out</NavLink>
                      </li>
                    </ul> 
                  </Dropdown>
                </div>
              </ul>
            </section>
          </div>
        </nav>
      }
    {!authenticated &&
      <>
        <nav className='navbar'>
            <div className='navbar-wrapper'>
              <div 
            className={!overlayActive ? 'nav-overlay' : 'nav-overlay active'}
            onMouseDown={closeMenu}
            ></div>
              <section className='navbar-main-links'>
                <ul>
                  <li>
                    <NavLink to="/" >
                      <picture>
                        <img className="nav-main-logo" src={logo}/>
                      </picture>
                    </NavLink>
                  </li>
                  <li>Discover</li>
                </ul>
              </section>
              <section className='navbar-search'>
                <input></input>
                <div id="nav-search-btn">
                  <button>Search</button>
                </div>
              </section>
              <section className='navbar-user-links'>
                <ul>
                    <li>
                      <NavLink to="#" onClick={() => {
                        setModalOpen(true)
                        setOpen(true)
                      }}>Sign In</NavLink>
                    </li>
                </ul>
              </section>
            </div>
          </nav>
          <Modal open={modalOpen}>
            <>
              <div className={isOpen ? 'auth-form animate wipe-up' : 'auth-form animate wipe-down'}>
                <div className='auth-modal-close'>
                  <div 
                    className='close-button-container' 
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => {
                        setModalOpen(false);
                        setAuthForm("login")
                      }, 200)
                      }}>
                    <svg id="close-button" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.36 446.36"><rect x="-32.86" y="217.23" width="565.71" height="65.53" transform="translate(-130.38 223.18) rotate(-45)" /><rect x="-32.86" y="217.23" width="565.71" height="65.53" transform="translate(223.18 -130.38) rotate(45)" /></svg>
                  </div>
                </div>
                <div className='auth-form-body'>
                  
                  {authForm === "login" &&
                    <LoginForm  setAuthenticated={setAuthenticated} setUser={setUser} setAuthForm={setAuthForm} userMenu={setUserMenu}/>
                  }
                  {authForm === "signup" &&
                    <SignUpForm setAuthForm={setAuthForm}/>
                  }
                </div>
              </div>
            </>
          </Modal>
      </>
    }
    </>
  );

}
        
          {/* <div className="nav-bar main-items"> 
            <div className="nav-bar home-icon">
            <NavLink to="/" exact="true">
              <img src='https://commissioner-icons.s3.amazonaws.com/Commissioner_logo_white.png' id="main-logo">
              </img>
            </NavLink>
            </div>

            <div className="nav-bar user-options">
            {authenticated?
              <>
            
                <div className="nav-bar user-options__loggedin-menu">
                    <h1 id="nav-bar__username">{`Welcome ${user.username}!`}</h1>
                    <div className="nav-bar user-options__dropdown"  onBlur={onBlurHandler} onFocus={onFocusHandler} onClick={onClickHandler} tabIndex="-1">
                      <div className="user-options__dropdown-profilepic">
                        <div className="user-options__dropdown-profilepic" id="dropdown-profilepic__container">
                          <div id="dropdown-profilepic__img">
                            <img src={user.profile_pic}>
                            </img>
                          </div>
                      </div>
                      <Dropdown isOpen={isOpen} setAuthenticated={setAuthenticated} authenticated={authenticated} setUser={setUser} user={user}/>
                    </div>
                  </div>
                </div>
              </>

              :
              <div>
                <NavLink to="/signup" exact="true"  className="nav-links__menu">Sign Up</NavLink>
                <NavLink to="/login" exact="true"  className="nav-links__menu">Login</NavLink>
              </div>
            }
            </div>
          </div> */}

export default NavBar;