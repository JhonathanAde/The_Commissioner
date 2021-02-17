// Dependencies
import React from 'react';
import { NavLink } from "react-router-dom";
import Rating from 'react-rating';

// CSS
import "./CSS/procommcards.css";

const ProfileCommCards = ({com}) => {

  //--- User Info ---//
  const { commission } = com
  const { user } = commission

  let emptyStars = <i class="far fa-star"></i>
  let fullStars = <i class="fas fa-star"></i>

  return (
    <>
      <div className="procommission-card-body">
          <div className="procommission-card-content">
            <div className="proimage-container">
              <img src={commission.image_url} alt="Commission-preview"/>
              <div className="protitle-box">
                <div className="protitle">
                  <NavLink className="protitle-nav" activeClassName="protitle-nav-active" to={`/product/${commission.id}`}>
                    <h1>{(commission.title)}</h1>
                  </NavLink>
                </div>
            </div>
            <div className="proinfo-container">
              <div className="prouser-info">
                </div>
                <div className="prolabels">
                  <NavLink to="/profile">
                    <h4>{user.username}</h4>
                  </NavLink>
                </div>
              <div className="rating-info">
                <Rating emptySymbol={emptyStars} fullSymbol={fullStars} initialRating={2.5} readonly/>
                <p>rating_number</p>
                <p className="rating-price">{`$${commission.price}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default ProfileCommCards;