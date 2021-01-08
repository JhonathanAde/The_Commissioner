import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../services/auth";

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
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => {
          <div>{error}</div>
        })}
      </div>
      <div>
      <label htmlFor="email">Email</label>
      <input 
        name="pasword"
        type="password"
        placeholder="Password"
        value={password}
        onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;