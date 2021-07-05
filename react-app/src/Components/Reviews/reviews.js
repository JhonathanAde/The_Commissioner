import React, {useEffect, useState} from 'react';
import Rating from 'react-rating';

import "../Reviews/reviews.css";


const ReviewCard = ({cardRating}) => {

  const {user, comment, rating} = cardRating;

  let emptyStars = <i class="far fa-star fa-7x"></i>
  let fullStars = <i class="fas fa-star fa-7x"></i>


  return (
    <div className="review-card main">
      <div className="review-card user-icon__container">
        <div className="review-card user-icon__container" id="card-image__container">
          <div id="card-image__container-pic">
            <img src={user.profile_pic}></img>
          </div>
        </div>
      </div>
      <div className="review-card review-info">
        <h1 id="review-info__username">{user.username}</h1>
        <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={rating} readonly/>
        <p id="review-info__review">
          {comment}
        </p>
      </div>
    </div>
  )
}

export default ReviewCard;