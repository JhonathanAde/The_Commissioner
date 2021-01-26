import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../services/auth";

// CSS
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated, setUser, setLogin, setSignup, login}) => {
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
    if (login === "splashlogin-form"){
      setLogin("splashlogin-form__hidden")
      setSignup("signup-form")
      console.log("worked")
    }
    console.log("clicked!!")
  }

  console.log(login)

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className="login-form" onSubmit={onLogin}>
      <div className="form-container">
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className="email-field">
        <label htmlFor="email">Email</label>
        <input 
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          />
        </div>
        <div className="password-field">
          <label>Password</label>
          <input 
            name="pasword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            />
        </div>
          <button type="submit">Login</button>
          <a className="sign-upreveal" onClick={signUpVisibility}>
            Sign Up
            </a>
      </div>
    </form>
  );
};

export default LoginForm;