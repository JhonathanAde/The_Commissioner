import React, { useContext, useEffect, useState, useParams } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { createRating, getRatingsByCommissionId } from '../../services/ratings';
import Rating from 'react-rating';
import { getCommissionsById} from '../../services/commission'
import OtherWorks  from './OtherWorks.js'

import ReviewCard from '../../Reviews/reviews';

// CSS:
import "./CSS/productcard.css";
import { UserContext } from '../../context/UserContext';




const ProductCard = ({commission, currentUser, authenticated, commissionId}) => {


  const {ratingAverage, setRatingAverage} = useContext(UserContext);
  
  const history = useHistory();
  
  //--- User Info ---
  const {user} = commission;
  
  
  
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewsLength, setReviewsLength] = useState([]);
  const [errors, setErrors] = useState([]);
  const [ratingLength, setRatingLength] = useState(0);
  const [ratingColor, setRatingColor] = useState("");
  const [otherCommissions, setOtherCommissions] = useState(null);
  
 

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
      const userReviews = await getRatingsByCommissionId(commissionId)
      const artistCommissions = await getCommissionsById(commission.user_id)
      setReviews(userReviews);
      setReviewsLength(userReviews.ratings.length)
      setOtherCommissions(artistCommissions.commissions);
    })()
  }, [])

  useEffect(() => {
    let ratingEl = document.querySelectorAll(".rating-stars")
    
    // const changeRatingColor = () => {
    //   ratingEl.style.color = "#ffdc60"
    // }
    console.log(ratingEl)
    // setRatingColor(changeRatingColor);
  })

   var ratingsAvg = 0;

  //  const changeRatingColor = (e) => {
  //   setRatingColor ("#ffdc60");
  //  }


  
   
   const updateReview = (e) => {
     setComment(e.target.value);
    }
    
    const checkRatings = (e) => {
      setRating(e);
    }
    
    const goToRequestForm = (e) => {
      e.preventDefault();
      if(!authenticated){
        history.push(`/login`);
      }
      else{
        history.push(`/request/${commission.id}`);
      }
    }
    
    
    const {ratings} = reviews;


    const calculateAverageRating = () => {
      let avg = 0

      for (let i = 0; i < reviewsLength; i++){
        let eachRating = ratings[i].rating;
        avg += eachRating;
      }

      setRatingAverage(Math.floor(avg/reviewsLength));
    }

    calculateAverageRating();
    console.log(otherCommissions);


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
              <img loading="lazy" src={commission.image_url}/>
            </div>
          </div>
          <div className="artpage art-content__product-details">
            <h6>{commission.title}</h6>
            <div id="artwork-by__section">
              <h3 id="artwork-by">Artwork By: </h3>
              <NavLink to={profileLink}>{commission.user.username}</NavLink>
            </div>
              <h1 id="artwork-price">{`$${commission.price}`}</h1>
              <div id="artwork-rating">
                <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={ratingAverage} readonly/>
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
                <Rating emptySymbol={emptyStars} fullSymbol={fullStars} onChange={checkRatings}  />
                <button type="submit">Submit</button>
              </div>
            </form>
            }
            <div className="artpage art-details__reviews-list">
              {
                ratings && ratings.map((rating, key) => (
                  <ReviewCard cardRating={rating} key={key}/>
                ))
              }
            </div>
          </div>
          <div>

          <div className="artpage art-details__aboutartist">
            <h3 id="about_artist-title">
              About The Artist
            </h3>
            <div className="artpage art-details__aboutartist-artist">
            <div className="artpage art-details__aboutartist-img__container">
              <div className="artpage art-details__aboutartist-img__container" id="aboutimg__container">
                <div id="aboutimg__container-image">
                  <img loading="lazy" src={commission.user.profile_pic}>
                  </img>
                </div>
            </div>
            </div>
              <div id="aboutartist-artist__info">
                <h1 id="artist__username">
                  {commission.user.username}
                </h1>
                <p id="artist__bio">
                  {commission.user.bio}
                </p>
              </div>
            </div>
          </div>
          <div className="artpage art-details__other-works">
            <h4 id="otherworks-title">Other Works From This Artist:</h4>
            <div className="artpage art-details__other-works__display">
              { otherCommissions && otherCommissions.map((comm, key) => (
                comm.commission.id === commission.id ? false
                  :
                <>
                  {/* <img src={comm.commission.image_url}/> */}
                  
                    <OtherWorks image={comm.commission.image_url} title={comm.commission.title} id={comm.commission.id}/>
                </>
              ))}
            </div>
          </div>
        </div>
          </div>
      </div>
    </div>
  )
}

export default ProductCard;