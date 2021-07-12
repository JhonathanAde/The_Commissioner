import React, {useState} from 'react';
import CommissionForm from '../Forms/CommissionForm';
import '../Forms/CSS/commission-page.css'

const CreateCommissionPage = ({authenticated, user}) => {

  const [image_url, setImage] = useState("");
  const [img_width, setImgWidth] = useState(0);
  const [img_height, setImgHeight] = useState(0);

  let imgStyles = {}
  const imageDisplay = new Image()
  imageDisplay.onload = function(){
    setImgWidth(this.width)
    setImgHeight(this.height)
  }
  imageDisplay.src = image_url;

  console.log(img_width)
  console.log(img_height)

  if(img_width > img_height){
    imgStyles["width"] = "450px"
    delete imgStyles["height"]
    console.log("landscape")
  }
  else if (img_height > img_width){
    imgStyles["height"] = "450px"
    delete imgStyles["width"]
    console.log("Portrait");
  }
  else {
    imgStyles["width"] = "450px" 
    imgStyles["height"] = "450px"
  }

  return (
    <div className="commission-page">
      <div className="commission-page commcontent-wrapper">
        <div className="commission-page commform-container">
          <div className="commission-page commform-imgdisplay">
            <div className="commission-page commform-imgdisplay__content">
              <h5 id="commission-header">Create A Commission</h5>
              <div className="commform-imgdisplay commform-image__container">
                <div id="commform__image">
                  <img src={imageDisplay.src} style={imgStyles}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="commission-page commform-component">
            <CommissionForm authenticated={authenticated} user={user} image_url={image_url} setImage={setImage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCommissionPage;