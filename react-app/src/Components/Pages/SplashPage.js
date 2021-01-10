import React from "react";
import LoginForm from "../auth/LoginForm";

//CSS
import "./SplashPage.css"

const SplashPage = ({authenticated, setAuthenticated}) => {

  return (
    <>
        <div className="splashpage_form">
          <div className="splashpage-form_logo">
            Logo
          </div>
          <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated}/>
        </div>
    </>
  )
}

export default SplashPage;