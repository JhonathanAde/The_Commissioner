import React, {useEffect, useState, useRef} from 'react';
import { getRequestsById } from '../../services/request';
import RequestCards from './RequestCards';

import "./RequestPage.css"

const ReqeustsPage = ({user}) => {

  const {id} = user
  const [requestInfo, setRequestInfo] = useState('')
  const [imgCards, setImgCards] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [cardWidth, setCardWidth] = useState(0)

  useEffect(() => {
    (async () => {
      const requests = await getRequestsById(id)
      setRequestInfo(requests)
    })()
  }, [])
  
  const cardRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    // let imageCards = cardRef.current.querySelector(".carousel-slider").childNodes
    const domStaller = setTimeout(() => {
      let imageCards = cardRef.current.querySelectorAll(".user-request.cardsbody");
      let carouselSlider = carouselRef.current.querySelector(".carousel-slider");
      let cardSize = imageCards[0].clientWidth
      setImgCards(imageCards);
      setCarousel(carouselSlider);
      setCardWidth(cardSize);
    }, 200)
  }, [cardRef])
 
  console.log('outside of useEffect', carousel);
  console.log('outside of useEffect', imgCards);
  console.log('outside of useEffect', cardWidth);

  // const staller = setTimeout(() => {
  //   debugger
  //   let width = imgCards[0].clientWidth;
  // }, 5000)
  


  // console.log(testRef.current.querySelectorAll(".user-request.cardsbody"));

  // console.log(requestInfo.requests)

  // let imageCards = document.querySelectorAll(".user-request.cardsbody");
  // console.log(imageCards);

  return (
    <div className="request-page" ref={carouselRef}>
      <div className="request-page request-display">
        <div className="request-page header">
        <h1>Requests</h1>
        </div>
        <div className="carousel-container">
          <div className="carousel-slider" ref={cardRef}>
          {requestInfo && requestInfo.requests.map((info, idx) => {
              return <RequestCards info={info} key={idx}/>
          })}
          </div>
        </div>
        <button>Next</button>
        <button>Prev</button>
      </div>
      
    </div>
  )
}

export default ReqeustsPage;