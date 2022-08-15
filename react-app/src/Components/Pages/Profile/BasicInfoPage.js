import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { editBasicInfo } from '../../services/auth';

// import "./CSS/basicinfopage.css";

const BasicInfoForm = ({user}) => {

  //--- State ---//
  const [bio, setBio] = useState('');
  const [errors, setErrors] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [photo, setPhoto] = useState('');
  const [website, setWebsite] = useState('');

  //--- Redirect Declaration ---//
  const history = useNavigate()


  //--- Helper Functions ---//
  const submitHandler = async (e) => {
    e.preventDefault();
    const basicInfoData = new FormData()
    basicInfoData.append('profile_pic', photo)
    basicInfoData.append('first_name', firstname)
    basicInfoData.append('last_name', lastname)
    basicInfoData.append('website', website)
    basicInfoData.append('bio', bio)
    const info = await editBasicInfo(basicInfoData, user.id)
    history.push(`/${user.username}/profile`)
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

  const prevent = (e) => {
    e.preventDefault();
  }

  return (
    <div className="basicinfo-maincontainer">
      <div className="basicinfo-picbox">
      </div>
      <div className="basicinfo-formcontainer">
        <form onSubmit={submitHandler} className="basicinfo-form">
          <div className="basicinfo-form-sections">
            <label>
              Profile Picture
            </label>
            <div>
              <input 
                name='profile-picture'
                type='file'
                placeholder='upload a profile picture'
                onChange={updatePhoto}
              />

              <button className='profile-button' onClick={prevent}>Upload</button>
            </div>
          </div>

          <div className="basicinfo-form-sections">
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

          <div className="basicinfo-form-sections">
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

          <div className="basicinfo-form-sections">
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

          <div className="basicinfo-form-sections">
            <label>
              Bio
            </label>
            <textarea 
              name='bio'
              placeholder='Enter bio here'
              onChange={updateBio}
            />
          </div>
          <button className="save-button" type='submit'>
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default BasicInfoForm;