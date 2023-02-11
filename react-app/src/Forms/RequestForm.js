import React, {useState, useEffect} from "react";
import { createRequest } from "../services/request"
import { useNavigate } from "react-router-dom";

import './requestform.css'


const RequestForm = ({img, title, artist, user, commId, price}) => {

  const [imgWidth, setWidth] = useState(0);
  const [imgHeight, setHeight] = useState(0);
  const [orient, setOrient] = useState("");
  const [charCount, setCount] = useState(0);
  const [isUrgent, setUrgent] = useState(false);
  const [reqTitle, setTitle] = useState("");
  const [reqDetails, setDetails] = useState("");
  const [reqFile, setFile] = useState("");
  const [reqDate, setDate] = useState("");
  const [reqRef, setRef] = useState({});
  const [error, setErrors] = useState([]);


  const updateTitle = (e) => {
    e.preventDefault();

    setTitle(e.target.value);
  };

  const updateDetails = (e) => {
    e.preventDefault();

    setDetails(e.target.value);
    setCount(e.target.value.length);
  };

  const updateRefs = (e) => {
    e.preventDefault();

    setRef(e.target.files[0]);
  };

  const updateDates = (e) => {
    e.preventDefault();

    setDate(e.target.value);
  }


  const submitRequest = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("title", reqTitle);
    data.append("details", reqDetails);
    data.append("references", reqRef);
    data.append("urgency", isUrgent);
    data.append("date", reqDate);
    data.append("price", price);
    data.append("commission_id", commId);
    data.append("user_id", artist.id);
    data.append("buyer_id", user.id);
    data.append("image_url", img);

    const request = await createRequest(data);

    if(request.errors){
      setErrors(request.errors);
    } else {
      window.location.reload();
    }

  }

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
    console.log("Date: ", reqDate);
    console.log("Details: ", reqDetails);
    console.log("References: ", reqRef);
    console.log("Title: ",reqTitle);
    console.log(artist);
  }, [reqDate, reqRef, reqDetails, reqTitle])


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
        <form onSubmit={submitRequest}>
          <div className="req-title-input" data-input-layout>
            <label>Title</label>
            <input onChange={updateTitle}></input>
          </div>
          <div className="req-detail-input" data-input-layout>
            <label>Details</label>
            <textarea onChange={updateDetails}></textarea>
            <div>
              <p>Max. {`${charCount} / 250`}</p>
            </div>
          </div>
          <div className="req-file-input" data-input-layout>
            <label>References</label>
            <input type="file" onChange={updateRefs}></input>
          </div>
            <div className="req-urgent-input" data-input-layout>
              <label>Urgent?</label>
              <div className="req-urgent-buttons">
                <div data-status-buttons>
                  <label>Yes</label>
                  <input type="radio" name="urgent" value={true} onClick={() => {
                    setUrgent(true);
                  }}></input>
                </div>
                <div data-status-buttons>
                  <label>No</label>
                  <input 
                    type="radio" 
                    name="urgent" 
                    value={false}
                    onClick={() => {
                      setUrgent(false);
                    }}
                    ></input>
                </div>
              </div>
            </div>
          <div className={!isUrgent ? "req-date-input" : "req-date-input active" } data-input-layout>
            <label>Deadline:</label>
            <input type="date" onChange={updateDates}></input>
          </div>
          <div className="req-submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>



    </div>

   </div>
  )
}

export default RequestForm;