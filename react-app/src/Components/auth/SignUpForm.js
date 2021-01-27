import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../services/auth';
import states from 'states-us';
import "./SignUpForm.css"

const SignUpForm = ({authenticated, setAuthenticated, setUser, login, setSignup, setLogin}) => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [artist, setArtist] = useState(false)
  const [location, setLocation] = useState("")

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
  console.log(artist)

  const statesList = states.map( x => x.name)
  // console.log(statesList)
  // console.log(states)

  const updateLocation = (e) => {
    setLocation(e.target.value)
  }
  // console.log(location)

  const logInVisibility = () => {
    if (login === "splashlogin-form__hidden"){
      setSignup("signup-form__hidden")
      setLogin("splashlogin-form")
    }
  }


  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup">
    <div>
      {errors.map((error) => (
        <div className="error-list">
          {error}
        </div>
      ))}
    </div>
    <form onSubmit={onSignUp} className="signup-formdata">
      <div className="signup-fields">
        <label>User Name</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={updateUsername}
          value = {username}></input>
      </div>
      <div className="signup-fields">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={updateEmail}
          value={email}
        />
      </div>
      <div className="signup-fields">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          ></input>

        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          ></input>
      </div>
      <div className="signup-fields">
        <label>Location:</label>
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
      </div>
      <div className="signup-fields">
        <label>Artist?</label>
          <div className="choices">
              <label>
                Yes
                </label>
              <input 
                name="artist"
                type="radio"
                value={true}
                onChange={updateArtistStatus}
              />

            <label>
              No
              </label>
              <input 
                name="artist"
                type="radio"
                value={false}
                onChange={updateArtistStatus}
              />

          </div>
        </div>
        <div className="signup-buttons">
      <button type="submit">Sign up</button>
      <a className="login-button" onClick={logInVisibility}>Login</a>
        </div>
    </form>
    </div>
  );
};

export default SignUpForm