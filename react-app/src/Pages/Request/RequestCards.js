import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import Rating from 'react-rating';
import './RequestCards.css'
import { getRatingsByCommissionId } from '../../services/ratings';
import { getACommission } from '../../services/commission';

const RequestCards = ({info, testRef}) => {

  const [review, setReviews] = useState(null);
  const [reviewLength, setReviewLength] = useState(0);
  const [commissionArtist, setCommissionArtist] = useState('');
  const [commissionUserId, setCommissionUserId] = useState(0);

  var averageRating = 0

  useEffect(() => {
    (async () => {
      const userReviews = await getRatingsByCommissionId(info.commission_id)
      const product = await getACommission(info.commission_id);
      setReviews(userReviews);
      setReviewLength(userReviews.ratings.length)
      setCommissionArtist(product.commission.user.username)
      setCommissionUserId(product.commission.user.id)
    })()
  }, [])


  const calculateAverageRating = () => {
    let sum = 0 
    for(let i = 0; i < reviewLength; i++){
      let eachRating = review.ratings[i].rating;
      sum += eachRating;
    }

    averageRating = Math.floor(sum / reviewLength);
    

  }

  calculateAverageRating()

  let emptyStars = <i class="far fa-star fa-2x"></i>
  let fullStars = <i class="fas fa-star fa-2x"></i>
  
  return (
      <div className="user-request main_body">
        <div className="user-request request-card__image-container">
          <div id="request-card__image">
            <img src={info.image_url}/>
          </div>
        </div>
        <div className="user-request request-card__info-container">
          <div id="request-artist__name">
            <h1>Artwork By: </h1>
            <NavLink to={`/profile/${commissionUserId}`}>
              <h1>{commissionArtist}</h1>
            </NavLink>
          </div>
        </div>
        <div className="user-request request-card__importants__container">
          <div id="request-ratings">
            <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={averageRating} readonly/>
          </div>
          <div id="request-expiration__date">
            <p>Expires:</p>
            <p>{info.date}</p>
          </div>
          <div id="request-price">
            <h1>
              {`$${info.price}`}
            </h1>
          </div>
        </div>
      </div>
  )
}

export default RequestCards;