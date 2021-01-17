import React from 'react';
import "./RequestCard.css"

const RequestCards = ({request}) => {

  console.log(request)
  const {image_url, title, date} = request


  return(
    <div className='request-card'>
      <div className='request-info'>
        <img src={image_url} />
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default RequestCards;