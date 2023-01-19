import React, {useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import LoginForm from "../Components/auth/LoginForm";
import SignUpForm from "../Components/auth/SignUpForm";

//CSS
import "./SplashPage.css"

const SplashPage = ({authenticated, setAuthenticated, setUser, user}) => {

  const [signup, setSignup] = useState("signup-display__hidden")
  const [showlogin, setLogin] = useState("splashlogin-form")
  const [loginForm, setLoginForm] = useState(null);


  const {pathname} = useLocation();


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

  return (
    <div className="splashpage">
      <div className="splashpage splashcontent-wrapper">
        <div className="splashpage logincontent">
            <div className="splashpage loginform-image">
            <div className="splashpage login-header">
            {loginForm &&
              <h1 id="login-header">LOGIN</h1>
            }
            {!loginForm &&
              <h1 id="signup-header">SIGN UP</h1>
            }
            </div>
              <div className="splashpage loginform-image__container">
                <div id="loginform-image__container-image">
                  <img src="https://commissioner-icons.s3.amazonaws.com/login-signup-bg.png"></img>
                </div>
              </div>
            </div>
            <div className="splashpage authforms">
              <div id="authforms-display">
                {loginForm && pathname === "/login" &&

                <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} setLogin={setLogin} setSignup={setSignup} showlogin={showlogin} setLoginForm={setLoginForm} pathname={pathname}/>
                }

                {!loginForm && pathname === "/signup" &&
                  <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} showlogin={showlogin} setSignup={setSignup} setLogin={setLogin} setLoginForm={setLoginForm} loginForm={loginForm} pathname={pathname}/>
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashPage;