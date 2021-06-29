import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { createRating, getRatingsByCommissionId } from '../../services/ratings';
import Rating from 'react-rating';

import ReviewCard from '../../Reviews/reviews';

// CSS:
import "./CSS/productcard.css";




const ProductCard = ({commission, currentUser, authenticated}) => {

  
  const history = useHistory();
  
  //--- User Info ---
  const {user} = commission;
  
  
  
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [errors, setErrors] = useState([]);
  const [ratingLength, setRatingLength] = useState(0);
  
 

  var profileLink;

  if(currentUser.username !== commission.user.username){
    profileLink = `/profile/${commission.user.id}`
  } else {
    profileLink = `/${user.username}/profile`
  }


  let emptyStars = <i class="far fa-star fa-7x"></i>
  let fullStars = <i class="fas fa-star fa-7x"></i>


  useEffect(() => {
    (async () => {
      const userReviews = await getRatingsByCommissionId(commission.id)
      setReviews(userReviews);
    })()
  }, [])

   var ratingsTotal = 0;


  
   
   const updateReview = (e) => {
     setComment(e.target.value);
    }
    
    const checkRatings = (e) => {
      setRating(e);
    }
    
    const goToRequestForm = () => {
      history.push(`/request/${commission.id}`);
    }
    
    
    const {ratings} = reviews;
    


  const reviewSubmit = async(e) => {
    e.preventDefault();
    const requestData = new FormData()
    requestData.append('rating', rating);
    requestData.append('comment', comment)
    requestData.append('user_id', currentUser.id)
    requestData.append('artist_id', commission.user.id)
    requestData.append('commission_id', commission.id)
    const request = await createRating(requestData);
    if(request.errors) {
      setErrors(request.errors);
    } 
    else {
      window.location.reload();
      // history.push(`/product/${commission.id}`)
    }
    } 



  return (
    <div className="artpage">
      <div className="artpage-display">
        <div className="artpage art-content">
          <div className="artpage art-content__product-display">
            <div className="artpage art-content__product-displaywindow">
              <img src={commission.image_url}/>
            </div>
          </div>
          <div className="artpage art-content__product-details">
            <h6>{commission.title}</h6>
            <div id="artwork-by__section">
              <h3 id="artwork-by">Artwork By: </h3>
              <NavLink to={profileLink}>{commission.user.username}</NavLink>
            </div>
              <div id="artwork-rating">
                <Rating emptySymbol={emptyStars} fullSymbol={fullStars}/>
              </div>
              <h1>Description</h1>
              <div className="artpage art-content__description-divider"></div>
              <p>
                {commission.description}
              </p>
              <button onClick={goToRequestForm}>Request</button>
          </div>
        </div>
          
        <div className="artpage art-details">
          <div className="artpage art-details__reviews">
            { !authenticated ?

            <>
            </>

            :
            <form onSubmit={reviewSubmit}>
              <h1>
                Write A Review
              </h1>
              <textarea
                name="review"
                type="textarea"
                onChange = {updateReview}
              ></textarea>
              <div className="artpage art-details__reviewform-submit">
                <Rating emptySymbol={emptyStars} fullSymbol={fullStars} onChange={checkRatings} />
                <button type="submit">Submit</button>
              </div>
            </form>
            }
            <div className="artpage art-details__reviews-list">
              {
                ratings && ratings.map((rating, key) => (
                  <ReviewCard rating={rating} key={key}/>
                ))
              }
            </div>
          </div>

          <div className="artpage art-details__aboutartist">
            {/* <div>
              <h3>
                About The Artist
              </h3>
              <div>
                {commission.user.username}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;