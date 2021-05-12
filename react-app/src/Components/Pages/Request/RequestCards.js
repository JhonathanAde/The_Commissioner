import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import './RequestCards.css'

const RequestCards = ({info, testRef}) => {
  // info.date = Deadline for requested art
  // info.details = Instructions/Details for requested art
  // info.image_url = Requested art image
  // info.title = Title of requested art
  // info.users.username = Username of Client


  
  return (
    <>
      <div className="user-request cardsbody" ref={testRef}>
        <div className="user-request imgcontainer">
          <img src={info.image_url} />
        </div>
        <div className="user-request cardinfo">
            <ul>
              <li>
                {info.title}
              </li>
              <li>
                <NavLink to="">
                  <p className="user-request username">{info.users.username}</p>
                </NavLink>
              </li>
              <li>
                <div className="user-request detailsbox">
                  <p>Details:</p>
                  <p className="user-request details">{info.details}</p>
                </div>
              </li>
            </ul>
          </div>
          <p className="user-request deadline">{`Due: ${info.date}`}</p>
        </div>
    </>
  )
}

export default RequestCards;