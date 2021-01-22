// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom'

// CSS
import "./CommissionCards.css";

const CommissionCards = ({comms}) => {

  console.log(comms)

  const {commission} = comms

  const {image_url, user, title, price, id} = commission

  return (
    <div className="commission-card-body">
        <div className="comm-image-container">
          <img src={image_url} />
          <div className="comm-title-container">
            <div className="title-box">
            <NavLink to="" className="title-nav" activeClassName="title-nav-active" > 
              {title}
            </NavLink>
            </div>
          </div>
        </div>
        <div className="comm-content-container">
          <div className="comm-info-container">
            <NavLink to={`/profile/${user.id}`}>
            <h8>{user.username}</h8>
            </NavLink>
          </div>
            <div className="comm-rating-info">
              <p>Rating</p>
              <p>Rating Number</p>
              <div className="comm-pricing">
              <p>{`$${price}`}</p>
              </div>
            </div>
        </div>
  </div>
  )
}

export default CommissionCards;