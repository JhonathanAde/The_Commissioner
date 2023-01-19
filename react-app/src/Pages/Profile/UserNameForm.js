import React from 'react'

const UserNameForm = ({changeUsername, userNameErrors, currentUsername, setUsername, userNameUpdated}) => {
  return (
    <>
      <form id="username-update__form" onSubmit={changeUsername}>
        {userNameUpdated &&
        
          <h1>
            Updated Successfully!!
          </h1>
        }
        <div>
          {userNameErrors.map((error, idx) => (
            <ul>
              <li key={idx}>*{error}</li>
            </ul>
          ))}
        </div>
        <div className="settings-forms settings-username__form-wrapper">
          <label id="settings-username__label">Username</label>
          <input id="settings-username__input" value={currentUsername} onChange={setUsername}></input>
        </div>
      </form>
    </>
  )
}

export default UserNameForm;