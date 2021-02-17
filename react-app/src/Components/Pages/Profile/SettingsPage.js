import React from 'react'
import BasicInfoForm from './BasicInfoPage'

import './CSS/settingspage.css';

const SettingsPage = ({user}) => {


  return (
    <div className="settings">
      <div className='settings-basicinfo'>
        <BasicInfoForm user={user} />
      </div>
    </div>
  )
}

export default SettingsPage;