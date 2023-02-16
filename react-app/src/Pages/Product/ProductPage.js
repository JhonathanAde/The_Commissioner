import React, {useContext, useEffect, useRef, useState} from "react";
import Rating from 'react-rating';
import {NavLink, useParams, useNavigate} from "react-router-dom";
import {getACommission} from "../../services/commission";
import { createRating, getRatingsByCommissionId } from "../../services/ratings";
import ImgHandler from "../../Components/ImgHandler";

import "./productpage.css";
import { UserContext } from '../../context/UserContext';
import Modal from "../../Components/Modal/Modal";
import RequestForm from "../../Forms/RequestForm";
import CloseButton from "../../Components/CloseButton";

let fix = 0;
let mainAvg = 0;






const ProductPage = ({user, authenticated}) => {

  //--- State ---//
  const [commission, setCommission] = useState({});
  const [reviewData, setReview] = useState({});
  const [imageUrl, setImg] = useState(null);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [imgOrient, setOrient] = useState("square");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artist, setArtist] = useState({});
  const [artistComs, setArtistComs] = useState([]);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState([]);
  const [ratingInput, setRatingInput] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const params = useParams()
  const history = useNavigate();
  //--- User Info ---//
  const id = Number(params.commissionId);

  //--- Rating Data --- //
  let emptyStars = <i className="far fa-star fa-1x"></i>
  let fullStars = <i className="fas fa-star fa-1x"></i>
  let emptyStarsLg = <i className="far fa-star fa-2x"></i>
  let fullStarsLg = <i className="fas fa-star fa-2x"></i>
  const {ratingAverage, setRatingAverage} = useContext(UserContext);

  
  const checkRatings = (e) => {
    setRatingInput(e);
  }

  const updateComment = (e) => {
    setComment(e.target.value);
  }

  const submitReview = async(e) => {
    e.preventDefault();
    const requestData = new FormData();
    requestData.append('rating', ratingInput);
    requestData.append('comment', comment);
    requestData.append('user_id', user.id);
    requestData.append('artist_id', artist.id);
    requestData.append('commission_id', id);
    const request = await createRating(requestData);
    if(request.errors) {
      setErrors(request.errors);
    }
    else {
      window.location.reload();
    }
  }

  const calculateAverageRating = (ratings, id) => {

      if(ratings && id){
        let avg = 0;

        for (let i = 0; i < ratings.length; i++){
          let eachRating = ratings[i].rating;
          avg += eachRating;
        }
  
  
        if(isNaN(avg/ratings.length)){
          fix = 0
        } else {
          fix = (avg/ratings.length).toFixed(1);
        }
  
        mainAvg = (Math.floor(avg/ratings.length));
      }

    }

    calculateAverageRating(rating, id);

    const onClose = () => {
      setOpen(false);
      setTimeout(() => {
        setModalOpen(false);
      }, 170)
    }


  //--- Fetch Call ---//
  useEffect(() => {

    window.scrollTo(0, 0);

    const fetchComData = async (id) => {
      const result = await fetch(`/api/commissions/request/${id}`);
      result.json().then(json => { 
        console.log(json);
        const {image_url, title, description, user, commissions, price} = json;
        setImg(image_url)
        setTitle(title);
        setDescription(description);
        setArtist(user);
        setPrice(price);
      });

    }

    const fetchArtistComs = async (id) => {
      const result = await fetch(`/api/commissions/${id}/commission`)
      result.json()
      .then(json => {
        const {commissions} = json;
        setArtistComs(commissions);
      })
    }

    const fetchRevData = async (id) => {
      const result = await fetch(`/api/ratings/${id}/rating`);
      result.json().then(json => {
        const {ratings} = json;
        setRating(ratings);
      });
    }



    fetchComData(id);

    if(artist.id){
      fetchArtistComs(artist.id);
    }

    fetchRevData(id);

      if(imageUrl !== null){
        let img = new Image();
        img.src = imageUrl;

        img.onload = () => {
          setImgWidth(img.width);
          setImgHeight(img.height);

          if(imgHeight > imgWidth){
            setOrient("portrait");
          } 
          else if (imgWidth > imgHeight) {
            setOrient("landscape");
          } else {
            setOrient("square");
          }
        }
      } 

      
    }, [imageUrl, imgWidth, imgHeight, imgOrient, fix, id, mainAvg])

    
    

    const OtherWork = (commId) => {

      history(`/product/${commId}`);
      window.location.reload();
    } 

  
  
  return (
    <>
      <div className="productpage-main" data-page>


        <div className="productpage-content">
          <div className="product-display">
          <div className="product-column-left">
            <div className="product-img-display">
              { imgOrient === "portrait" &&
                  <div className="display-portrait">
                    <picture>
                      <img className="product-img" src={imageUrl}/>
                    </picture>
                  </div>
                }
                { imgOrient === "landscape" &&
                  <div className="display-landscape">
                    <picture>
                      <img className="product-img" src={imageUrl}/>
                    </picture>
                  </div>
                }

                { imgOrient === "square" &&
                  <div className="display-square">
                    <picture>
                      <img className="product-img" src={imageUrl}/>
                    </picture>
                  </div>
                }
            </div>
            <div className="product-artist-otherworks">
              <h1>More by {artist.username}:</h1>
              <div className="otherworks-gallery">
                {artistComs && artistComs.map((com, key) => {
                  const {image_url, title} = com
                  const commId = com.id;

                  return(
                    id !== commId && 
                            <div key={key} className="othercom-icon">
                              <NavLink to={`/product/${commId}`} onClick={() => {
                                OtherWork(commId);
                              }}>
                                <div className="othercom-icon-overlay"></div>
                                <picture>
                                  <img src={image_url} />
                                </picture>
                              </NavLink>
                              </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="product-column-right">
            <div className="product-description">
              <div className="product-hdr">
                  <h1>{title}</h1>
                  <div className="product-hdr-card">
                    <div className="product-hdr-userinfo">
                      <picture>
                        <img src={artist.profile_pic}/>
                      </picture>
                      <NavLink to={`/profile/${artist.id}`}>
                        <h3>{artist.username}</h3>
                      </NavLink>
                    </div>
                    <h2>•</h2>
                    <div className="product-hdr-ratinginfo">
                      <p>
                      <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={mainAvg} readonly className="product-hdr-ratings"/>
                        &nbsp; / {fix}
                        </p>
                    </div>
                  </div>
                </div>

              <div className="product-hdr-cta">
                <p id="main-description">{description}</p>

                <div className="product-req-button">
                  <button onClick={() => {
                    setOpen(true);
                    setModalOpen(true);
                  }}> Request </button>
                </div>
              </div>  

              <div className="product-review-display">
                <h1>Reviews</h1>

                {rating && rating.map((review, key) => {
                  const {rating, user, comment} = review;
                  return (
                    <div key={key}>
                      <div className="review-main" key={key}>
                        <div className="reviewer-img">
                          <picture>
                            <img src={user.profile_pic}/>
                          </picture>
                        </div>
                        <div className="reviewer-rev">
                          <NavLink to={`/profile/${user.id}`}>
                            <h2>{user.username}</h2>
                          </NavLink>
                          <p>{comment}</p>
                          <p id="rev-rating">
                            <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={rating} readonly/>
                            &nbsp; / &nbsp;{rating}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }) }
              </div>

              <div className="product-reviews-write">
              <form onSubmit={submitReview}>
                <h1>Write A Review</h1>
                <textarea 
                  name="review"
                  type="textarea"
                  onChange={updateComment}

                />
                <div className="product-review-input">
                  <Rating emptySymbol={emptyStarsLg} fullSymbol={fullStarsLg} initialRating={ratingInput} onChange={checkRatings}  />
                  <div className="review-submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>  
            </div>  
            </div>
            
          </div>
          </div>

          <Modal open={modalOpen}  >
            <div className={isOpen ? "req-modal animate wipe-up" : "req-modal animate wipe-down"}>
              <div className="req-modal-close">
                <CloseButton close={onClose} /> 
              </div>
              <div className="req-modal-body">
                <RequestForm 
                  img={imageUrl} 
                  title={title} 
                  artist={artist} 
                  user={user} 
                  commId={id} 
                  price={price}
                  />
              </div>
            </div>

          </Modal>
        </div>

      </div>
      
    </>
  )
}

export default ProductPage;