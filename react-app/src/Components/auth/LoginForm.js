import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../services/auth";

// CSS
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated, setUser, setLogin, setSignup, showlogin, pathname}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()
  const emailInput = document.querySelector("#email-input")
  const passInput = document.querySelector("#password-input")

  console.log(emailInput);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await login(email, password);
    if (!data.errors) {
      setAuthenticated(true);
      setUser(data)
    } else {
      setErrors(data.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await login('demo@adesko.com', 'password');
    if(!data.errors){
      setAuthenticated(true);
      setUser(data);
      history.push("/");
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkPath = () => {
    if(pathname !== "/login"){
      setLogin("splashlogin-form__hidden")
      setSignup("signup-display")
    }
  }

  const signUpVisibility = (e) => {
    e.preventDefault();
   
    if (showlogin === "splashlogin-form"){
      history.push('/signup');
      setLogin("splashlogin-form__hidden")
      setSignup("signup-display")
      console.log("worked")
    }
    console.log("clicked!!")
  }

  checkPath();

  

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className="login-form" onSubmit={onLogin}>
      <div className="login-form login-container">
        <div className="login-form login-errors">
          {errors.map((error) => (
            <ul>
              <li>*{error}</li>
            </ul>
          ))}
        </div>
        <ul className="login-form login-info">
              <li>
                <label htmlFor="email">Email</label>
              </li>
              <li>
                <input 
                  name="email"
                  type="email"
                  id="email-input"
                  placeholder="Email"
                  value={email}
                  onChange={updateEmail}
                  />
              </li>
              <li>
                <label>Password</label>
              </li>
              <li>
                <input 
                  name="pasword"
                  type="password"
                  placeholder="Password"
                  id="password-input"
                  value={password}
                  onChange={updatePassword}
                  />
              </li>
        </ul>
        <div className="login-form login-buttons">
          <button type="submit" className="login-submit">Login</button>
          <button onClick={demoLogin}>Demo</button>
          <button className="sign-upreveal" onClick={signUpVisibility}>
            Sign Up
            </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;