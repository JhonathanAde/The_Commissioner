import React from 'react';
import "./CSS/requestcard.css"

const RequestCards = ({request}) => {

  const {image_url, title, date} = request


  return(
    <div className='request-card'>
      <div className='request-info'>
        <img src={image_url} alt="Request photo"/>
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default RequestCards;