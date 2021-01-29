import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { editBasicInfo } from '../../services/auth';

const BasicInfoForm = ({user}) => {
  const [photo, setPhoto] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [website, setWebsite] = useState('')
  const [bio, setBio] = useState('')
  const [errors, setErrors] = useState([])

  const history = useHistory()

  const submitHandler = async (e) => {
    e.preventDefault();
    const basicInfoData = new FormData()
    basicInfoData.append('profile_pic', photo)
    basicInfoData.append('first_name', firstname)
    basicInfoData.append('last_name', lastname)
    basicInfoData.append('website', website)
    basicInfoData.append('bio', bio)
    const info = await editBasicInfo(basicInfoData, user.id)
    // if (info.errors){
    //   setErrors(info.errors);
    // } else {
      history.push(`/${user.username}/profile`)
    // }
  }

  const updatePhoto = (e) => {
    setPhoto(e.target.value)
  }
  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const updateLastName= (e) => {
    setLastName(e.target.value)
  }
  const updateWebsite = (e) => {
    setWebsite(e.target.value)
  }
  const updateBio = (e) => {
    setBio(e.target.value)
  }

  return (
    <div>
      {/* <div>
        {errors.map((error, idx) => (
          <div key={idx}>{error}</div>
        ))}
      </div> */}
      <form onSubmit={submitHandler}>
        <div>
        <label>
          Profile Picture
        </label>
        <input 
          name='profile-picture'
          type='file'
          placeholder='upload a profile picture'
          onChange={updatePhoto}
        />
        </div>

        <div>
        <label>
          First Name
        </label>
        <input
          name='first-name'
          type='text'
          placeholder='Enter first name'
          onChange={updateFirstName} 
        />
        </div>

        <div>
        <label>
          Last Name
        </label>
        <input 
          name='last-name'
          type='text'
          placeholder='Enter last name'
          onChange={updateLastName}
        />
        </div>

        <div>
        <label>
          Website
        </label>
        <input 
          name='website'
          type='text'
          placeholder='Enter website url'
          onChange={updateWebsite}
        />
        </div>

        <div>
        <label>
          Bio
        </label>
        <textarea 
          name='bio'
          placeholder='Enter bio here'
          onChange={updateBio}
        />
        </div>
        <button type='submit'>
          Save
        </button>
      </form>
    </div>
  )
}

export default BasicInfoForm;