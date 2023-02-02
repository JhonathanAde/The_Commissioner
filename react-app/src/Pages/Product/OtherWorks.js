import React from 'react';
import './CSS/otherworks.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';


const OtherWorks = ({image, title, id}) => {

  const history = useNavigate();
  
  return (
    <>
    <div className="other-works">
      <button onClick={ () => {
        history.push(`/product/${id}`)
        window.location.reload();
        }}>
          
      <div className="other-works otherworks_container">
        <div className="other-works otherworks_image-continer">
      <div className="other-works other-works__overlay"/>
          <div className="other-works otherworks_image-continer" id="image-container__image">
            <img src={image} />
          </div>
        </div>
      </div>
      </button>
    </div>
    </>
  )
}

export default OtherWorks;