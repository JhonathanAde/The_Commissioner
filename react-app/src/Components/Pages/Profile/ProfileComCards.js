// Dependencies
import React from 'react';
import { NavLink } from "react-router-dom"

// CSS
import "./ProCommCards.css";

const ProfileCommCards = ({com}) => {

  // console.log(com)
  const { commission } = com
  // console.log(commission.image_url)

  const { user } = commission

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
            <p>Rating_stars</p>
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