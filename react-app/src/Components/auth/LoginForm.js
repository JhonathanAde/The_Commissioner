import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../services/auth";

// CSS
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated, setUser, setLogin, setSignup, showlogin, setLoginForm, pathname}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate()
  const emailInput = document.querySelector("#email-input")
  const passInput = document.querySelector("#password-input")



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

  const signUpVisibility = (e) => {
    e.preventDefault();
   
    if (pathname.includes("login")){
      setLoginForm(true)
      history.push('/signup');
    }
  }
  

  if (authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <form className="login-form" onSubmit={onLogin}>
        <div className="login-form login-errors">
          {errors.map((error, idx) => (
            <ul id="login-form__error-list">
              <li key={idx}>
                *{error}
              </li>
            </ul>
          ))}
        </div>
        <div className="login-form login-email">
          <label id="login-email__label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            id="login-email__input"
            onChange={updateEmail}
          ></input>
        </div>
        <div className="login-form login-pass">
          <label id="login-password__label">Password</label>
          <input 
            name="password"
            type="password"
            placeholder="Password"
            id="login-password__input"
            onChange={updatePassword}
          ></input>
        </div>
        <div className="login-form login-buttons">
          <button id="login-buttons__login" type="submit">Login</button>
          <button id="login-buttons__demo" onClick={demoLogin}>Demo</button>
          <button id="login-buttons__signup" onClick={signUpVisibility}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;