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
      <div className="procommission-card-body">
        <div className="procommission-card-content">
          <div className="image-container">
            <div className="image-container-img">
              <img src={commission.image_url} />
            </div>
          </div>
          <div className="info-container">
            <div className="user-info">
             <NavLink to={`/product/${commission.id}`}>
             <h1>{commission.title}</h1>
            </NavLink>
            <NavLink to="/profile">
              <h4>{user.username}</h4>
            </NavLink>
            </div>
          <div className="rating-info">
            <p>Rating_stars</p>
            <p>rating_number</p>
            <p>{`$${commission.price}`}</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCommCards;