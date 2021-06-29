import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../services/auth';
import states from 'states-us';
import "./SignUpForm.css"

const SignUpForm = ({authenticated, setAuthenticated, setUser, showlogin, setSignup, setLogin, pathname}) => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [artist, setArtist] = useState(false)
  const [location, setLocation] = useState("")

  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await signUp(username, email, password, location, artist);
      if (!data.errors){
        setAuthenticated(true);
        setUser(data)
      } else {
        setErrors(data.errors);
      }
    } else {
      setErrors(["Your passwords must match"])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  } ;

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateArtistStatus = (e) => {
    setArtist(e.target.value)
  }
 

  const statesList = states.map( x => x.name)
 

  const updateLocation = (e) => {
    setLocation(e.target.value)
  }


  const logInVisibility = () => {
    // if(pathname !== "/login"){
    //   setSignup("signup-display__hidden")
    //   setLogin("splashlogin-form")
    //   pathname = "/login"
    // }

    if (showlogin === "splashlogin-form__hidden"){
      history.push('/login');
      setSignup("signup-display__hidden")
      setLogin("splashlogin-form")
    }
  }

  const checkPath = () => {
    if(pathname !== "/signup"){
      setSignup("signup-display__hidden")
      setLogin("splashlogin-form")
    }
  }

  checkPath();


  if (authenticated) {
    return <Redirect to="/" />;
  }



  return (
    
    <form onSubmit={onSignUp} className="signup-form">
      <div className="signup-form signup-container">
        <div className="signup-form signup-errors">
          {errors.map((error, idx) => (
            <div className="error-list">
              <ul>
                <li key={idx}>
                  {error}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="signup-form signup-info">
          <ul>
            <li>
              <label>User Name</label>
            </li>
            <li>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={updateUsername}
                value = {username} />
            </li>
            <li>
              <label>Email</label>
            </li>
            <li>
              <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
            />
            </li>
            <li>
              <label>Password</label>
            </li>
            <li>
              <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
              />
            </li>
            <li>
              <label>Repeat Password</label>
            </li>
            <li>
              <input
              type="password"
              name="repeat_password"
              placeholder="Repeat Password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              />
            </li>

            <li>
              <label>Location:</label>
            </li>
          <li>
          <input
            list="state-abbreviations"
            name="location"
            onChange={updateLocation}
          />
          <datalist id="state-abbreviations">
            {statesList.map((state, idx) => {
              return <option value={state} key={idx} />
            })}
          </datalist>
          </li>

          <li>
          <label>Artist?</label>
            <div className="choices">
                <label>
                  Yes
                <input 
                  name="artist"
                  type="radio"
                  value="true"
                  onChange={updateArtistStatus}
                  />
                  </label>

              <label>
                No
                <input 
                  name="artist"
                  type="radio"
                  value="false"
                  onChange={updateArtistStatus}
                  />
              </label>
            </div>
          </li>
          </ul>
          <div className="signup-form signup-buttons">
            <button type="submit" className="signup-form signup-submit">Sign up</button>
            <button className="reveal-login" onClick={logInVisibility}>Login</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm