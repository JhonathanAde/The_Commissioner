import React from 'react';
import { NavLink } from 'react-router-dom'
import './RequestCards.css'

const RequestCards = ({info}) => {

  
  return (
    <>
    <div className="user-request-cardsbody">
      <div className="user-request-imgcontainer">
        <img src={info.image_url} />
      </div>
      <div className="user-request-cardinfo">
        <div className="user-request-userinfo">
          <p className="userrequest-title">{info.title}</p>
      <NavLink to="">
          <p className="userrequest-username">{info.users.username}</p>
      </NavLink>
        </div>
      <div className="user-request-detailsbox">
      <p>Details:</p>

      <p className="userequest-details">{info.details}</p>
      </div>
      <p className="userrequest-deadline">{`Due: ${info.date}`}</p>
      </div>
    </div>
    <div></div>
    </>
  )
}

export default RequestCards;