import React from 'react';

const BasicInfoForm = ({changeBasicInfo,
                      updateSuccess,
                      basicInfoErrors,
                      currentFirstName,
                      setFirstName,
                      currentLastName,
                      setLastName,
                      currentWebsite,
                      setWebsite,
                      currentBio,
                      setBio}) => {

  return (
    <>
       <form id="basicinfo-update__form" onSubmit={changeBasicInfo}>
                        { updateSuccess &&
                          <h1 id="basicinfo-success__message">
                            Updated Successfully!
                          </h1>
                        }
                        <div>
                          {basicInfoErrors.map((error, key) => (
                            <ul>
                              <li key={key}>*{error}</li>
                            </ul>
                          ))}
                        </div>
                      <div className="settings-window settings-forms">
                          <div className="settings-forms settings-name__form-wrapper">
                            <div id="first-name_wrapper">
                              <label id="first-name__label">First Name</label>
                              <input id="first-name__input"value={currentFirstName} onChange={setFirstName}></input>
                            </div>

                            <div id="last-name_wrapper">
                              <label id="last-name__label">Last Name</label>
                              <input id="last-name__input" value={currentLastName} onChange={setLastName}></input>
                            </div>
                          </div>

                          <div className="settings-forms settings-website__form-wrapper">
                            <label id="settings-website__label">Website</label>
                            <input id="settings-website__input" value={currentWebsite} onChange={setWebsite}></input>
                          </div>

                          <div className="settings-forms settings-bio__form-wrapper">
                            <label id="settings-bio__label">Bio</label>
                            <textarea id="settings-bio__textarea" value={currentBio} onChange={setBio}/>
                          </div>

                      </div>
                        
                    </form>
    </>
  )
}

export default BasicInfoForm;