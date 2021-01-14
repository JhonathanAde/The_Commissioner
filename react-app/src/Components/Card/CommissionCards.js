// Dependencies
import React, {useEffect} from 'react';

// CSS
import "./CommissionCards.css";

const CommissionCards = ({com}) => {
  return (
    <>
      <div className="commission-card">
      <div className="commission-card__image">
        Image
      </div>
      <div className="commission-card__maininfo">
        <p>product_name</p>
        <p>artist_name</p>
      </div>
      <div className="commission-card__rating">
        {/* <div className="commission-card__ratingdiv"> */}
        <p>Rating_stars</p>
        <p>rating_number</p>
        <div className="commission-card__pricediv">  
        <p>Price</p>
        {/* </div> */}
        </div>
      </div>
      </div>
    </>
  )
}

export default CommissionCards;