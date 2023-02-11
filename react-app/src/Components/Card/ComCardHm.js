import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Rating from 'react-rating';
import { getRatingsByCommissionId } from "../../services/ratings";

// Styling //
import "../Card/comcardhm.css";

const ComCardHm = ({com}) => {

  const [isHover, setIsHover] = useState(false);
  const [isOverlay, setOverlay] = useState(false);
  const [review, setReviews] = useState(null);
  const [reviewLength, setReviewLength] = useState(0);

  // Variables //
  var averageRating = 0
  let average = 0
  const {user, title, price, image_url, id} = com;
  const {username, profile_pic} = user;
  // console.log(user)
  let emptyStars = <i className="far fa-star fa-1x"></i>
  let fullStars = <i className="fas fa-star fa-1x"></i>


  // Helper Functions //

  const calculateAverageRating = () => {
    let sum = 0 
    for(let i = 0; i < reviewLength; i++){
      let eachRating = review.ratings[i].rating;
      sum += eachRating;
    }

    average = isNaN((sum/reviewLength)) ? 0 : (sum/reviewLength).toFixed(1);
    averageRating = Math.floor(sum / reviewLength);
    

  }

  const overlayActive = (e) => {
    e.preventDefault();

    if(!isOverlay){
      setOverlay(true);
    }
  }

  useEffect(() => {
    (async () => {
      const userReviews = await getRatingsByCommissionId(id)
      setReviews(userReviews);
      setReviewLength(userReviews.ratings.length)
    })()
  }, [])

  calculateAverageRating();  

  return (
    <>
      <div className='art-display-card'>
        <div 
          className='display-card-photo' 
          onMouseOver={() => {setOverlay(true)}}
          onMouseLeave={() => { setOverlay(false);}}
          >
          <NavLink to={`/product/${id}`}>
            <picture>
              <img src={image_url}/>
            </picture>
          </NavLink>
          <div className={!isOverlay ? 'display-card-overlay' : 'display-card-overlay active'}></div>
          <h1 className={!isOverlay ? 'display-card-title' : 'display-card-title active'}>
            <NavLink to={`/product/${id}`}>{title}</NavLink>
            </h1>

        </div>
        <div className='display-card-info'>
          <div id="display-card__artistname" data-displaycard-info>
            <div id="display-card__userimg">
              <picture>
                <img src={profile_pic}/>
              </picture>
            </div>
            <h2>
              <NavLink to={`/profile/${user.id}`}>{username}</NavLink>
              </h2>
          </div>
          <div id="display-card__ratinginfo" data-displaycard-info>
            <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={averageRating} readonly/>
            <p> / {average}</p>
          </div>
          <div id="display-card__pricing" data-displaycard-info>
            <h3>${price}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComCardHm;