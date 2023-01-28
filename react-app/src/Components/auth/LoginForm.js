import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import { login } from "../../services/auth";

// CSS
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated, setUser, setLogin, setSignup, showlogin, setLoginForm, pathname, setAuthForm, userMenu}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate()
  const emailInput = document.querySelector("#email-input")
  const passInput = document.querySelector("#password-input")
  let emailErr = errors.find(el => el.match(/(email\s:)/));
  let passErr = errors.find(el => el.match(/(password\s:)/));



  const onLogin = async (e) => {
    e.preventDefault();
    const data = await login(email, password);
    if (!data.errors) {
      setAuthenticated(true);
      setUser(data)
    } else {
      console.log(data.errors);
      setErrors(data.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await login('demo@adesko.com', 'password');
    if(!data.errors){
      setAuthenticated(true);
      setUser(data);
      userMenu(false);
      history("/");
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log(errors);
    
  }, [errors, emailErr])

  if (authenticated) {
    return <Navigate to="/" />;
  }


  return (

    <div className='login-form-body'>
      <div className="login-form-banner">

      </div>
      <div className={'login-form-info animate wipe-right'}>
        <div className='login-form-header'>
          <h3>Login</h3>
          <p>
            Not a member?&nbsp;
            <NavLink to="#" onClick={() => { setAuthForm("signup")}}>Sign up</NavLink>
          </p>
        </div>
        <form className='login-form' onSubmit={onLogin}>
          <div>
            {errors && errors.map((err, key) => {
              console.log(err);
            })}
          </div>
          <div className='email-input' data-input-layout>
            <label>Email</label>
            <input 
              onChange={updateEmail}
              ></input>
            {emailErr && 
              <div data-err-field>
                <p>{emailErr.replace(/(email\s:)/," ")}</p>
              </div>
            }
          </div>
          <div className='password-input' data-input-layout>
            <label>Password</label>
            <input
              onChange={updatePassword}
              ></input>
              {passErr &&
                <div data-err-field>
                  <p>{passErr.replace(/(password\s:)/, " ")}</p>
                </div>
              }
          </div>

          <div className='login-button'>
            <button type="submit">Login</button>
            <button 
              onClick={demoLogin}
              >Demo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;