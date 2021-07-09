import React from 'react';
import './CSS/otherworks.css';
import { NavLink } from 'react-router-dom';


const OtherWorks = ({image, title, id}) => {
  
  return (
    <>
    <div className="other-works">
      <NavLink to={`/product/${id}`}>
      <div className="other-works otherworks_container">
        <div className="other-works otherworks_image-continer">
      <div className="other-works other-works__overlay"/>
          <div className="other-works otherworks_image-continer" id="image-container__image">
            <img src={image} />
          </div>
        </div>
        {/* <h1>{title}</h1> */}
      </div>
      </NavLink>
    </div>
    </>
  )
}

export default OtherWorks;