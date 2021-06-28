// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';

// CSS
import "./CommissionCards.css";

const CommissionCards = ({comms}) => {

  console.log(comms)

  const {commission} = comms

  const {image_url, user, title, price, id} = commission

  let emptyStars = <i class="far fa-star fa-2x"></i>
  let fullStars = <i class="fas fa-star fa-2x"></i>

 

  return (
    <div className="commission-card body">
        <div className="commission-card container">
          <div className="commission-card img-container">
            <img src={image_url} />
          </div>
          <div className="commission-card title-container">
            <div className="title-container title-box">
            <NavLink to={`/product/${id}`} className="title-container title-nav" activeClassName="title-container title-nav-active" > 
              <h1>{title}</h1>
            </NavLink>
            </div>
          </div>
        </div>
        <div className="commission-card content-container">
              <div className="content-container info-container">
                <h2 id="card-artworkby">Artwork by:</h2>
                <NavLink to={`/profile/${user.id}`} className="info-container username">
                <h2 id="card-username">{user.username}</h2>
                </NavLink>
              </div>
      
              <div className="content-container rating-info">
                <div id="rating-info__ratings">
                  <Rating emptySymbol={emptyStars} fullSymbol={fullStars} />
                  {/* <p id="rating-number">Rating Number</p> */}
                </div>
                <div id="rating-info__price">
                  <p id="price-display">{`$${price}`}</p>
                </div>
              </div>
        </div>
  </div>
  )
}

export default CommissionCards;