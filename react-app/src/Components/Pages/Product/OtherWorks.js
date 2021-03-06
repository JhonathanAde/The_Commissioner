import React from 'react';
import './CSS/otherworks.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';


const OtherWorks = ({image, title, id}) => {

  const history = useHistory();
  
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
        {/* <h1>{title}</h1> */}
      </div>
      </button>
    </div>
    </>
  )
}

export default OtherWorks;