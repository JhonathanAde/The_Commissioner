import React, {useEffect, useState} from 'react'

import './BasicInfoCard.css'

const BasicInfoCard = () => {
  return (
    <div className="basicinfo-card">
      <div className="main-info-container">
        <div className="profile-picture" />
        <div className="name-info">
          <h1>Full Name</h1>
        </div>
        <div>
        <h3>Title</h3>
        <p>Website</p>
        </div>
        <div className="bio">
          <h5>bio</h5>
        </div>
      </div>
    </div>
  )
}

export default BasicInfoCard;