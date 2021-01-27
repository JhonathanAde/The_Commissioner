import React, {useState} from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
// import { NavLink } from "react-router-dom";

//CSS
import "./SplashPage.css"

const SplashPage = ({authenticated, setAuthenticated, setUser, user}) => {

  const [signup, setSignup] = useState("signup-form__hidden")
  const [login, setLogin] = useState("splashlogin-form")


  if (authenticated) {
    console.log(user)
  }

  // const signUpVisibility = () => {
  //   if (login === "login-form"){
  //     setLogin("splashlogin-form__hidden")
  //     setSignup("signup-form")
  //   }
  // }

  const logInVisibility = () => {
    if (login === "login-form__hidden"){
      setSignup("signup-form__hidden")
      setLogin("splashlogin-form")
    }
  }

  return (
    <div className="splash-block">
          <div className="splashpage_form-image">
          </div>
        <div className="splashpage_form">
          <div className="splashpage-form_logo">
            Logo
          </div>
          <div className={login}>
            <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} setLogin={setLogin} setSignup={setSignup} login={login}/>
            {/* <div className="signup-button" className="sign-upreveal" onClick={signUpVisibility}>Sign Up</div> */}
          </div>
          <div className={signup}>
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} login={login} setSignup={setSignup} setLogin={setLogin}/>
            {/* <button className="login-button" onClick={logInVisibility}>Login</button> */}
          </div>
        </div>
    </div>
  )
}

export default SplashPage;