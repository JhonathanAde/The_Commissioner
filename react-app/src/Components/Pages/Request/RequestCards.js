import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Rating from 'react-rating';
import './RequestCards.css'

const RequestCards = ({info, testRef}) => {
  // info.date = Deadline for requested art
  // info.details = Instructions/Details for requested art
  // info.image_url = Requested art image
  // info.title = Title of requested art
  // info.users.username = Username of Client

  let emptyStars = <i class="far fa-star fa-2x"></i>
  let fullStars = <i class="fas fa-star fa-2x"></i>
  
  return (
      <div className="user-request">
        <div className="user-request request-card__image-container">
          <div id="request-card__image">
            <img src={info.image_url}/>
          </div>
        </div>
        <div>
          <div>
            <h1>Artwork By: </h1>
            <h1>{info.users.username}</h1>
          </div>
          <p>{info.details}</p>
        </div>
        <div>
          <div>
            <Rating emptySymbol={emptyStars} fullSymbol={fullStars}/>
          </div>
          <div>
            <h1>Expires</h1>
            <h1>{info.date}</h1>
          </div>
          <div>
            <h1>
              {`$${info.price}`}
            </h1>
          </div>
        </div>
      </div>
  )
}

export default RequestCards;