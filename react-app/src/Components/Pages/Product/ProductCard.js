import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS:
import "./CSS/productcard.css";

const ProductCard = ({commission}) => {

  //--- User Info ---
  const {id, title, description, image_url, user} = commission;
  const {username} = user;

  return (
    <>
    <div className="product">
      <div className="product-display">
        <img src={image_url} alt="product"/>
      </div>

      <div className="product-info">
        <div className="product-title">
          <div className="product-headers">
            <h1>{title}</h1>
            <NavLink to={`/profile/${user.id}`}>{username}</NavLink>
            <p>  rating will go here </p>
          </div>
        </div>
        <div className="prod-details">
          <h3>Description</h3>
          <div className="prod-divider"/>
          <div className="prod-description">
            <p>{description}</p>
          </div>
        </div>
        <NavLink to={`/request/${id}`} className="prodrequest-button" activeClassName = "prod-active">
          Request
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default ProductCard;