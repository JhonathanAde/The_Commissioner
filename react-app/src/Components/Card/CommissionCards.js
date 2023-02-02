// Dependencies
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import { getRatingsByCommissionId } from '../../services/ratings';

// CSS
import "./CommissionCards.css";

const CommissionCards = ({comms, authenticated}) => {

  const [review, setReviews] = useState(null);
  const [reviewLength, setReviewLength] = useState(0);

  var averageRating = 0

  
  
  const {commission} = comms
  
  const {image_url, user, title, price, id} = commission

  useEffect(() => {
    (async () => {
      const userReviews = await getRatingsByCommissionId(id)
      setReviews(userReviews);
      setReviewLength(userReviews.ratings.length)
    })()
  }, [])

  
  let emptyStars = <i className="far fa-star fa-2x"></i>
  let fullStars = <i className="fas fa-star fa-2x"></i>

  const calculateAverageRating = () => {
    let sum = 0 
    for(let i = 0; i < reviewLength; i++){
      let eachRating = review.ratings[i].rating;
      sum += eachRating;
    }

    averageRating = Math.floor(sum / reviewLength);
    

  }
    calculateAverageRating()

 

  return (
    <div className="commission-card body">
        <div className="commission-card container">
          <div className="commission-card img-container">
            <img src={image_url} />
          </div>
          <div className="commission-card title-container">
            <div className="title-container title-box">
            <NavLink to={`/product/${id}`} className="title-container title-nav" > 
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
                  <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={averageRating} readonly/>
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