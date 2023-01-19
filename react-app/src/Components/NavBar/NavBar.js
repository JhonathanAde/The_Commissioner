import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom' ;

// Components //
import Dropdown from './NavDropDown';


// CSS //
import "./navbar.css"


const NavBar = ({isClicked, active}) => {

  // State //
  const [userMenuActive, setUserMenu] = useState(false);
  const [notificationsActive, setNotifcationsMenu] = useState(false);
  const [overlayActive, setOverlay] = useState(false);

  // Helper Functions //

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

  return(
    <>
      <nav className='navbar'>
        <div className='navbar-wrapper'>
           <div 
        className={!overlayActive ? 'nav-overlay' : 'nav-overlay active'}
        onMouseDown={closeMenu}
        ></div>
          <section className='navbar-main-links'>
            <ul>
              <li>LOGO</li>
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
                  <NavLink to="#" onClick={openUserMenu}>User Icon</NavLink>
                </li>
                <Dropdown active={userMenuActive} menuName="user_menu"> 
                  <ul>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Log Out</li>
                  </ul> 
                </Dropdown>
              </div>
            </ul>
          </section>
        </div>
      </nav>
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