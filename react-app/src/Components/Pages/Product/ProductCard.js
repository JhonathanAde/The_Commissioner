import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS:
import "./CSS/productcard.css";

const ProductCard = ({commission}) => {

  //--- User Info ---
  const {id, title, description, image_url, user} = commission;
  const {username} = user;

  console.log(commission);

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
              <h3>Artwork By: {commission.user.username}</h3>
              <h1>Description</h1>
              <div className="artpage art-content__description-divider"></div>
              <p>
                {commission.description}
              </p>
              <button>Request</button>
          </div>
        </div>
          
        <div className="artpage art-details">
          <div className="artpage art-details__reviews">
            <form>
              <h1>
                Write A Review
              </h1>
              <textarea></textarea>
            </form>
            <button>Submit</button>
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