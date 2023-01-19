import React, { useState } from "react";
import { Navigate, useNavigate,  } from 'react-router-dom';
import { signUp } from '../../services/auth';
import states from 'states-us';
import "./SignUpForm.css"

const SignUpForm = ({authenticated, setAuthenticated, setUser, showlogin, setSignup, setLogin, setLoginForm, loginForm, pathname}) => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [artist, setArtist] = useState(false)
  const [location, setLocation] = useState("")

  const history = useNavigate();

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
    if (pathname.includes("signup")){
      setLoginForm(true);
      history.push('/login');
    }
  }


  if (authenticated) {
    return <Navigate to="/" />;
  }

  



  return (
    
    <div>
      <form className="signup-form" onSubmit={onSignUp}>
        <div className="signup-form signup-errors">
          {errors.map((error, idx) => (
            <ul id="signup-errors__errors-list">
              <li key={idx}>*{error}</li>
            </ul>
          ))}
        </div>
        <div className="signup-form signup-username">
          <label id="signup-username__label">Username</label>
          <input id="signup-username__input" onChange={updateUsername}></input>
        </div>
        <div className="signup-form signup-email">
          <label id="signup-email__label">Email</label>
          <input id="signup-email__input" onChange={updateEmail}></input>
        </div>
        <div className="signup-form signup-password">
          <label id="signup-password__label">Password</label>
          <input id="signup-password__input" type="password" onChange={updatePassword}></input>
        </div>
        <div className="signup-form signup-rep__pass">
          <label id="signup-rep__pass__label">Repeat Password</label>
          <input id="signup-rep__pass__input" onChange={updateRepeatPassword}></input>
        </div>
        <div className="signup-form signup-location">
          <label id="signup-location__label">Location</label>
          <select id="signup-location__select" onChange={updateLocation}>
            <>
              <option value="">-- Please select a state --</option>
              {statesList.map((state, idx) => (
                <option value={state}>{state}</option>
              ))}
            </>
          </select>
        </div>
        <div className="signup-form signup-artist__status">
          <label id="artist-status__label">Artist?</label>
          <div id="artist-status__choices">
          <label id="status-choices__label">Yes</label>
          <input id="status-choices__button" type="radio" name="artist-status" value={true}></input>

          <label id="status-choices__label">No</label>
          <input id="status-choices__button"type="radio" name="artist-status" value={false}></input>
          </div>
        </div>
        <div className="signup-form signup-buttons">
          <button id="signup-buttons__signup" type="submit">Sign Up</button>
          <button id="signup-buttons__login" onClick={logInVisibility}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm