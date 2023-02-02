import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, NavLink  } from 'react-router-dom';
import { signUp } from '../../services/auth';
import states from 'states-us';
import "./SignUpForm.css"

const SignUpForm = ({authenticated, setAuthenticated, setUser, showlogin, setSignup, setLogin, setLoginForm, loginForm, pathname, setAuthForm}) => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [artist, setArtist] = useState(false)
  const [location, setLocation] = useState("")

  
  // Variables //
  const history = useNavigate();
  const usernameErr = errors.find(el => el.match(/(username\s:)/));
  const emailErr = errors.find(el => el.match(/(email\s:)/));
  const passErr = errors.find(el => el.match(/(password\s:)/));
  const repassErr = errors.find(el => el.match(/(repeat\s:)/));
  const locationErr = errors.find(el => el.match(/(location\s:)/));



  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await signUp(username, email, password, location, artist);
      if (!data.errors){
        setAuthenticated(true);
        setUser(data)
        history("/");
      } else {
        setErrors(data.errors);
        console.log(data.errors);
      }
    } else {
      setErrors(["repeat : Your passwords must match"])
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


  useEffect(() => {
    console.log(errors)
  }, [errors]);


  if (authenticated) {
    return <Navigate to="/" />;
  }

  



  return (

    <div className='signup-form-body'>
        <div className='signup-form-banner'>
          
        </div>

        <div className='signup-form-info animate wipe-right'>
          <div className='signup-form-header'>
            <h3>Sign Up</h3>
            <p> Already a member?&nbsp; 
              <NavLink to="#" onClick={(e) => 
                { 
                  e.preventDefault();
                  setAuthForm("login") 
                  }}>Login</NavLink>
            </p>
          </div>

          <form className='signup-form' onSubmit={onSignUp}>
            <div className="signup-username-input" data-input-layout>
              <label>
                Username
              </label>
              <input onChange={updateUsername}></input>
              { usernameErr &&
                <div data-err-field>
                <p>{usernameErr.replace(/(username\s:)/, " ")}</p>
              </div>
              }

            </div>
            <div className="signup-email-input" data-input-layout>
              <label>
                Email
              </label>
              <input onChange={updateEmail}></input>

              { emailErr &&
                <div data-err-field>
                <p>{emailErr.replace(/(email\s:)/, " ")}</p>
              </div>
              }
              

            </div>
            <div className="signup-password-input" data-input-layout>
              <label>
                Password
              </label>
              <input onChange={updatePassword}></input>

              { passErr &&
                <div data-err-field>
                <p>{passErr.replace(/(password\s:)/, " ")}</p>
              </div>
              }

            </div>
            <div className="signup-rep_password-input" data-input-layout>
              <label>
                Repeat Password
              </label>
              <input onChange={updateRepeatPassword}></input>

              { repassErr &&
                <div data-err-field>
                <p>{repassErr.replace(/(repeat\s:)/, " ")}</p>
              </div>
              }

            </div>
            <div className='signup-location-input' data-input-layout>
              <label>
                Location
              </label>
              <select onChange={updateLocation}>
                <>
                  <option value="">-- Please select a state --</option>
                  {statesList.map((state, key) => ( 
                      <option value={state} key={key}>{state}</option>
                  ))}
                </>
              </select>

              { locationErr &&
                <div data-err-field>
                <p>{locationErr.replace(/(location\s:)/, " ")}</p>
              </div>
              }
            </div>
            <div className='signup-status-input' data-input-layout>
              <label>
                Artist?
              </label>
              <div className='status-buttons'>
                <div data-status-buttons>
                  <label>Yes</label>
                  <input 
                    type="radio" 
                    name='artist-status' 
                    value={true}></input>
                </div>
                <div data-status-buttons>
                  <label>No</label>
                  <input 
                    type="radio" 
                    name='artist-status' 
                    value={false}></input>
                </div>
              </div>
          
            </div>
            
            <div className='signup-button'>
              <button type="submit">Sign Up</button>
            </div>

          </form>
        </div>

    </div>
    
    // <div>
    //   <form className="signup-form" onSubmit={onSignUp}>
    //     <div className="signup-form signup-errors">
    //       {errors.map((error, idx) => (
    //         <ul id="signup-errors__errors-list">
    //           <li key={idx}>*{error}</li>
    //         </ul>
    //       ))}
    //     </div>
    //     <div className="signup-form signup-username">
    //       <label id="signup-username__label">Username</label>
    //       <input id="signup-username__input" onChange={updateUsername}></input>
    //     </div>
    //     <div className="signup-form signup-email">
    //       <label id="signup-email__label">Email</label>
    //       <input id="signup-email__input" onChange={updateEmail}></input>
    //     </div>
    //     <div className="signup-form signup-password">
    //       <label id="signup-password__label">Password</label>
    //       <input id="signup-password__input" type="password" onChange={updatePassword}></input>
    //     </div>
    //     <div className="signup-form signup-rep__pass">
    //       <label id="signup-rep__pass__label">Repeat Password</label>
    //       <input id="signup-rep__pass__input" onChange={updateRepeatPassword}></input>
    //     </div>
    //     <div className="signup-form signup-location">
    //       <label id="signup-location__label">Location</label>
    //       <select id="signup-location__select" onChange={updateLocation}>
    //         <>
    //           <option value="">-- Please select a state --</option>
    //           {statesList.map((state, idx) => (
    //             <option value={state}>{state}</option>
    //           ))}
    //         </>
    //       </select>
    //     </div>
    //     <div className="signup-form signup-artist__status">
    //       <label id="artist-status__label">Artist?</label>
    //       <div id="artist-status__choices">
    //       <label id="status-choices__label">Yes</label>
    //       <input id="status-choices__button" type="radio" name="artist-status" value={true}></input>

    //       <label id="status-choices__label">No</label>
    //       <input id="status-choices__button"type="radio" name="artist-status" value={false}></input>
    //       </div>
    //     </div>
    //     <div className="signup-form signup-buttons">
    //       <button id="signup-buttons__signup" type="submit">Sign Up</button>
    //       <button id="signup-buttons__login" onClick={logInVisibility}>Login</button>
    //     </div>
    //   </form>
    // </div>
  );
};

export default SignUpForm