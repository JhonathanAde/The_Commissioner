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
      <div className="commission-card-content">
        <div className="image-container">
          <div className="image-container-img">
          <img src={image_url} />
          </div>
        </div>
      <div className="info-container">
        <div className="user-info">
          <div className="labels">
            <NavLink to={`/product/${id}`}>
              <h1>{(title).toUpperCase()}</h1>
            </NavLink>
            <NavLink to ={`/profile/${id}`}>
              <h4>{user.username}</h4>
            </NavLink>
          </div>
      <div className="rating-info">
        <p>Rating_stars</p>
        <p>rating_number</p> 
        <p>{`$${price}`}</p>
      </div>
    </div>
  </div>
      </div>
  </div>
  )
}

export default CommissionCards;