import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../services/auth';
import states from 'states-us';

const SignUpForm = ({authenticated, setAuthenticated, setUser}) => {
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


  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <div>
      {errors.map((error) => (
        <div className="error-list">
          {error}
        </div>
      ))}
    </div>
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value = {username}></input>
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={updateEmail}
          value={email}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          ></input>
      </div>
      <div>
        <label for="location">Location:</label>
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
      <div>
          <label>Artist?</label>
          <label>
            Yes
          <input 
            name="artist"
            type="radio"
            value={true}
            onChange={updateArtistStatus}
          />
          </label>
          <label>
            No
          <input 
            name="artist"
            type="radio"
            value={false}
            onChange={updateArtistStatus}
          />
          </label>
        </div>
      <button type="submit">Sign up</button>
    </form>
    </>
  );
};

export default SignUpForm