import React from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";

//CSS
import "./SplashPage.css"

const SplashPage = ({authenticated, setAuthenticated, setUser, user}) => {

  if (authenticated) {
    console.log(user)
  }

  return (
    <>
        <div className="splashpage_form">
          <div className="splashpage-form_logo">
            Logo
          </div>
          <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser}/>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} />
        </div>
    </>
  )
}

export default SplashPage;