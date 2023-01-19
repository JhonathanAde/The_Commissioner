import React, { useContext, useEffect, useState, useParams } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createRating, getRatingsByCommissionId } from '../../services/ratings';
import Rating from 'react-rating';
import { getCommissionsById} from '../../services/commission'
import OtherWorks  from './OtherWorks.js'

import ReviewCard from '../../Components/Reviews/reviews';

// CSS:
import "./CSS/productcard.css";
import { UserContext } from '../../context/UserContext';




const ProductCard = ({commission, currentUser, authenticated, commissionId}) => {


  const {ratingAverage, setRatingAverage} = useContext(UserContext);
  
  const history = useNavigate();
  
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
  const [imgDisplay, setImgDisplay] = useState("");
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [oreientation, setOrientation] = useState(null);
  
  var isLandscape

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
      setImgDisplay(commission.image_url);
    })()
  }, [])

  useEffect(() => {
    let ratingEl = document.querySelectorAll(".rating-stars")
    
  })

   var ratingsAvg = 0;
  

  let imgStyleWidth = {
    width: "576px"
  }

  let imgStyleHeight = {
    height: "576px"
  }

  let imgStyleSquare = {
    width: "576px",
    height: "576px"
  }

  let displayImg = new Image();
  displayImg.src = imgDisplay;

  displayImg.onload = function (){
    setImgWidth(this.width)
    setImgHeight(this.height)
  }

  
   
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
    }
    } 

    const setOrientationLand = () => {
      setOrientation("landscape")
    }
    const setOrientationPort = () => {
      setOrientation("portrait")
    }
    const setOrientationSq = () => {
      setOrientation("square")
    }




  return (
    <div className="artpage-window">
      <div className="artpage">
        <div className="artpage-display">
          <div className="artpage art-content">
            <div className="artpage art-content__product-display">
              <div className="artpage art-content__product-displaywindow">
                { imgWidth > imgHeight ?
                  <img loading="eager" src={imgDisplay} width="600"/>
                
                : imgHeight > imgWidth ?  
                  <img loading="eager" src={imgDisplay} height="600"/>
                

                 : imgWidth === imgHeight ?
                  <img loading="eager" src={imgDisplay} widht="600" height="600"/>

                  : 
                  <img loading="eager" src="https://commissioner-icons.s3.amazonaws.com/Img_placeholder.png" width="576" height="576"/>
                }
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
                  <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={rating} onChange={checkRatings}  />
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
                      <OtherWorks image={comm.commission.image_url} title={comm.commission.title} id={comm.commission.id}/>
                  </>
                ))}
              </div>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;