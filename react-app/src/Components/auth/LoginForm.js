import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../services/auth";

// CSS
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errros);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className="login-form" onSubmit={onLogin}>
      <div className="form-container">
        <div>
          {errors.map((error) => {
            <div>{error}</div>
          })}
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
      </div>
    </form>
  );
};

export default LoginForm;