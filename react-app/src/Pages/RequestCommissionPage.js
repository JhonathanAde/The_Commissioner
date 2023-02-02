import React, {useState, useEffect} from "react";
import RequestForm from "../Forms/RequestForm";
import {useParams} from "react-router-dom"
import { getACommission } from "../services/commission";

import './RequestCommissionPage.css'

const RequestCommissionPage = ({user}) => {

  const {commissionId} = useParams()

  const [comData, setComData] = useState(null)
  const [commission, setCommission] = useState({})
  const [userName, setUserName] = useState("")
  const [seller, setSeller] = useState({})
  const [imgUrl, setImgUrl] = useState("")
  const [imgWidth, setImgWidth] = useState(0)
  const [imgHeight, setImgHeight] = useState(0)

  
  useEffect(() => {
    (async () => {
      const res = await getACommission(commissionId)
      setComData(res)
      setCommission(res.commission)
      setImgUrl(res.commission.image_url);
      setUserName(res.commission.user.username);
      setSeller(res.commission.user)
    })()
  }, [commissionId])


  let imageStyle = {}
  let displayImage = new Image()
  displayImage.src = imgUrl
  displayImage.onload = function(){
    setImgWidth(this.width)
    setImgHeight(this.height)
  }

  if(imgWidth > imgHeight){
    imageStyle["width"] = "450px";
    delete imageStyle["height"];
  }
  else if (imgHeight > imgWidth){
    imageStyle["height"] = "450px";
    delete imageStyle["width"];
  }
  else {
    imageStyle["width"] = "450px";
    imageStyle["height"] = "450px";
  }
  



  return (
    <div className="reqcomm-page">
      <div className="reqcomm-page reqcomm-page__wrapper">

      { commission &&

        <div className="reqcomm-page reqcomm-page__wrapper">
          <div className="reqcomm-page reqcomm-page__product-display">
            <div className="reqcomm-page reqcomm-page__title-header">
              <h1 id="req-product__title">{commission.title}</h1>
            </div>
            <div className="reqcomm-page reqcomm-page__image-display">
              <div className="reqcomm-page__image-display reqcomm-image__container">
                <div id="reqcomm-image__container-image">
                  <img src={displayImage.src} style={imageStyle}/>
                </div>
              </div>
            </div>
            <div className="reqcomm-page reqcomm-page__product-info">
              <div className="reqcomm-page reqcomm-page__product-info__headers">
                <h1 id="product-info__headers-artist">{userName}</h1>
                <h1 id="product-info__headers-price">${commission.price}</h1>
              </div>
              <div className="reqcomm-page reqcomm-page__product-info__description">
                <p id="product-info__description">{commission.description}</p>
              </div>
            </div>
            </div>
        <div className="reqcomm-page reqcomm-page__form">
          <RequestForm currentUser={user} seller={seller} commissionId={commissionId} commission={commission}/>
        </div>
      </div>
      }
      </div>
    </div>
  )
}

export default RequestCommissionPage;