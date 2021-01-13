import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";

//CSS
import "./SplashPage.css"

const SplashPage = ({authenticated, setAuthenticated, setUser, user}) => {

  const [signup, setSignup] = useState("signup-form__hidden")
  const [login, setLogin] = useState("login-form")


  if (authenticated) {
    console.log(user)
  }

  const signUpVisibility = () => {
    if (login === "login-form"){
      setLogin("login-form__hidden")
      setSignup("signup-form")
    }
  }

  const logInVisibility = () => {
    if (login === "login-form__hidden"){
      setSignup("signup-form__hidden")
      setLogin("login-form")
    }
  }

  return (
    <>
        <div className="splashpage_form">
          <div className="splashpage-form_logo">
            Logo
          </div>
          <div className={login}>
            <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} />
            <button className="signup-button" onClick={signUpVisibility}>Sign Up</button>
          </div>
          <div className={signup}>
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} />
            <button className="login-button" onClick={logInVisibility}>Login</button>
          </div>
        </div>
    </>
  )
}

export default SplashPage;