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
          <ul>
            <li>
              <div className="content-container info-container">
                <NavLink to={`/profile/${user.id}`} className="info-container username">
                <h6>{user.username}</h6>
                </NavLink>
              </div>
            </li>
          </ul>
              <div className="content-container rating-info">
                <ul id="rating-list">
                  <li id="rating">
                    <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={2.5} readonly/>
                  </li>
                  <li>
                    <p id="rating-number">Rating Number</p>
                  </li>
                    <p>{`$${price}`}</p>
                  <li>
                  </li>
                </ul>
              </div>
        </div>
  </div>
  )
}

export default CommissionCards;