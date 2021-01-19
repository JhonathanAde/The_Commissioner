import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS:
import "./ProductCard.css"

const ProductCard = ({commission}) => {
  const {id, title, description, image_url, user} = commission
  const {username} = user
  // console.log(commission)
  // console.log(username)

  return (
    <>
    <div className="product">
      <div className="product-display">
        <img src={image_url} alt="product"/>
      </div>

      <div className="product-info">
        <div className="product-title">
          <h1>{title}</h1>
          <h5>{username}</h5>
          <p>  rating will go here </p>
        </div>
        <h3>Description</h3>
        <div className="divider"/>
        <p>{description}</p>
        <NavLink to={`/request/${id}`}>
        <button>Request</button>
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default ProductCard;