import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../services/auth";

// CSS
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated, setUser, setLogin, setSignup, showlogin}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const signUpVisibility = () => {
    if (showlogin === "splashlogin-form"){
      setLogin("splashlogin-form__hidden")
      setSignup("signup-form")
      console.log("worked")
    }
    console.log("clicked!!")
  }

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
                  value={password}
                  onChange={updatePassword}
                  />
              </li>
        </ul>
        <div className="login-form login-buttons">
          <button type="submit" className="login-submit">Login</button>
          <a className="sign-upreveal" onClick={signUpVisibility}>
            Sign Up
            </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;