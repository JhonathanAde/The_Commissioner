import React, {useEffect, useState} from 'react';

import "../Reviews/reviews.css";


const ReviewCard = ({rating}) => {
  console.log(rating);

  const {user, comment} = rating;

  console.log(user.username)
  

  return (
    <div className="review-card main">
      <div className="review-card user-icon__container">
        <div className="review-card user-icon__pic">
          <img></img>
        </div>
      </div>
      <div className="review-card review-info">
        <h1 id="review-info__username">{user.username}</h1>
        <p id="review-info__review">
          {comment}
        </p>
      </div>
    </div>
  )
}

export default ReviewCard;