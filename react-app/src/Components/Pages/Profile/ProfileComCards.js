// Dependencies
import React, {useEffect} from 'react';
import { NavLink } from "react-router-dom"

// CSS
import "./ProCommCards.css";

const ProfileCommCards = ({com}) => {

  console.log(com)
  const { commission } = com
  console.log(commission.image_url)

  const { user } = commission

  return (
    <>
      <div className="procommission-card">
      <div className="procommission-card__image">
        <img src={commission.image_url} />
      </div>
      <div className="procommission-card__maininfo">
        <h1>{commission.title}</h1>
        <NavLink to="/profile">
        <h4>{user.username}</h4>
        </NavLink>
      </div>
      <div className="procommission-card__rating">
        {/* <div className="commission-card__ratingdiv"> */}
        <p>Rating_stars</p>
        <p>rating_number</p>
        <div className="procommission-card__pricediv">  
        <p>{`$${commission.price}`}</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProfileCommCards;