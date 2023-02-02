import React, {useState, useEffect} from "react";
import { createRequest } from "../services/request"
import { useNavigate } from "react-router-dom";

import './requestform.css'


const RequestForm = ({img, title, artist}) => {

  const [imgWidth, setWidth] = useState(0);
  const [imgHeight, setHeight] = useState(0);
  const [orient, setOrient] = useState("");

  useEffect(() => {
    if(img !== null){
      let pic = new Image();
      pic.src = img;

      pic.onload = () => {
        setWidth(pic.width);
        setHeight(pic.height);

        if(imgHeight > imgWidth){
          setOrient("portrait");
        }
        else if (imgWidth > imgHeight) {
          setOrient("landscape");
        } 
        else {
          setOrient("square");
        }
      }
    }
  }, [])


  return (
   <div className="req-form-body">
    <div className="req-form-banner"></div>
    

    <div className="req-form-content">

      <div className="req-form-lcol">
        {orient === "portrait" && 
        
          <picture className="req-pic-port">
            <img src={img}/>
          </picture>
          
        }
        {orient === "landscape" && 
        
          <picture className="req-pic-land">
            <img src={img}/>
          </picture>

        }
        {orient === "square" && 
        
          <picture className="req-pic-sq">
            <img src={img}/>
          </picture>

        }
      </div>
      <div className="req-form-rcol">
        <div className="req-form-header">
          <h3>Request</h3>
          <p>{`${title} by ${artist.username}`}</p>
        </div>
        <form>
          <div className="req-title-input" data-input-layout>
            <label>Title</label>
            <input></input>
          </div>
          <div className="req-detail-input" data-input-layout>
            <label>Details</label>
            <textarea></textarea>
          </div>
          <div className="req-file-input" data-input-layout>
            <label>References</label>
            <input type="file"></input>
          </div>
            <div className="req-urgent-input" data-input-layout>
              <label>Urgent?</label>
              <div className="req-urgent-buttons">
                <div data-status-buttons>
                  <label>Yes</label>
                  <input type="radio"></input>
                </div>
                <div data-status-buttons>
                  <label>No</label>
                  <input type="radio"></input>
                </div>
              </div>
            </div>
          <div className="req-date-input" data-input-layout>
            <label>Date</label>
            <input type="date"></input>
          </div>
          <div className="req-submit-btn">
            <button>Submit</button>
          </div>
        </form>
      </div>



    </div>

   </div>
  )
}

export default RequestForm;