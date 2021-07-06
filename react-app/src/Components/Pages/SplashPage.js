import React, {useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
// import { NavLink } from "react-router-dom";

//CSS
import "./SplashPage.css"

const SplashPage = ({authenticated, setAuthenticated, setUser, user}) => {

  const [signup, setSignup] = useState("signup-display__hidden")
  const [showlogin, setLogin] = useState("splashlogin-form")
  const [loginForm, setLoginForm] = useState(null);


  // if (authenticated) {
    
  // }

  const {pathname} = useLocation();

 
  // const signUpVisibility = () => {
  //   if (login === "login-form"){
  //     setLogin("splashlogin-form__hidden")
  //     setSignup("signup-form")
  //   }
  // }

  // if(pathname === "/signup"){
  //   setSignup("signup-display__hidden")
  //   setLogin("splashlogin-form")
  // }

  

  // console.log(loginForm);

  const checkPath = () => {
    if(pathname === "/login"){
      if(!loginForm){
        setLoginForm(true)
      }
    }

    if(pathname === "/signup"){
      if(loginForm){
        setLoginForm(false);
      }
    }
  }

  checkPath();


  const logInVisibility = () => {

    if (showlogin === "login-form__hidden" && pathname !== "/signup"){
      setSignup("signup-display__hidden")
      setLogin("splashlogin-form")
    }

  }

  // logInVisibility();

  return (
    <div className="splashpage">
      <div className="splashpage splashcontent-wrapper">
        <div className="splashpage logincontent">
            <div className="splashpage loginform-image">
            </div>
            <div className="splashpage authforms">
              <div id="authforms-display">
                {loginForm && pathname === "/login" &&

                <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} setLogin={setLogin} setSignup={setSignup} showlogin={showlogin} setLoginForm={setLoginForm} pathname={pathname}/>
                }

                {!loginForm && pathname === "/signup" &&
                  <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} showlogin={showlogin} setSignup={setSignup} setLogin={setLogin} setLoginForm={setLoginForm} loginForm={loginForm} pathname={pathname}/>
                }
                {/* <div className="signup-button" className="sign-upreveal" onClick={signUpVisibility}>Sign Up</div> */}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashPage;