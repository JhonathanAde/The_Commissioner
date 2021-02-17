import React, {useEffect, useState} from 'react'

import './CSS/basicinfocard.css';

const BasicInfoCard = ({user}) => {
  return (
    <div className="basicinfo-card">
      <div className="main-info-container">
        <div className="profile-picture">
          <div className="prof-photo">
            <img src={user.profile_pic} />
          </div>
        </div>
        <div className="name-info">
          <h1>{user.first_name} {user.last_name}</h1>
        </div>
        <div className="location-info">
          <p>{user.location}</p>
        </div>
        <div className='plug-info'>
          <p>Website</p>
        </div>
        <div className="bio-info">
          <h5>{user.bio}</h5>
        </div>
      </div>
    </div>
  )
}

export default BasicInfoCard;