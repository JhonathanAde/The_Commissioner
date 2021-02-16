import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {createCommission} from "../services/commission"

// CSS
import "./CSS/commissionform.css"

const CommissionForm = ({authenticated, user}) => {
  // let [duration, setDuration] = useState(false)
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [image_url, setImage] = useState("");
  const [price, setPrice] = useState(0.00);
  const [requests, setRequests] = useState();
  const [title, setTitle] = useState("");
  const [visibleDuration, setVisibleDuration] = useState("commduration__hidden");

  //--- User Info ---
  const userId = user.id

  //--- Date selection ---
  const currentDateTime = new Date();
  const currentDay = currentDateTime.getDate();
  const currentMonth = currentDateTime.getMonth();
  const currentYear = currentDateTime.getFullYear();
  const dayFormat = String(currentDay).padStart(2, 0);
  const monthFormat = String(currentMonth + 1).padStart(2, 0);
  const dateCreated = `${currentYear}-${monthFormat}-${dayFormat}`;

  //--- Redirect Declaration ---
  const history = useHistory()


  //--- Helper Functions ---
  const commisisonHandleSubmit = async (e) => {
    e.preventDefault();
    const commissionData = new FormData();
    commissionData.append('title', title);
    commissionData.append('description', description);
    commissionData.append('image', image_url);
    commissionData.append('price', price);
    commissionData.append('request_amt', requests);
    commissionData.append('date_created', dateCreated);
    commissionData.append('duration', date);
    commissionData.append('user_id', userId);
    const commission = await createCommission(commissionData);
    if (commission.errors) {
      setErrors(commission.errors);
    } else {
      history.push(`/${user.username}/profile`)
    }

  }

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
  }
  const updateImage = (e) => {
    setImage(e.target.files[0])
  }

  const updateRequests = (e) => {
    setRequests(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }
  const updateDate = (e) => {
    setDate(e.target.value)
  }

  const prevent = (e) => {
    e.preventDefault();
  }

  const showDuration = (e) => {
    setVisibleDuration("commduration")
  }

  const hideDuration = (e) => {
    setVisibleDuration("commduration__hidden")
  }
  

  console.log("Show Duration", visibleDuration)


  return (
    <div>
      <div className="commform-div">
          <div className="commform-errors">
            {errors.map((error, idx) => (
              <div key={idx}>{error}</div>
            ))}
          </div>
        <form className="comm-form" onSubmit={commisisonHandleSubmit}>
          <div className="form-sections" id="commform-title">
            <label className="commform-labels">
              Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              onChange={updateTitle}
              />
          </div>
          <div className="form-sections" id="commdescription-box">
            <label className="commform-labels">
              Description
            </label>
            <textarea
              name="description"
              type="textarea"
              placeholder="Add description"
              onChange={updateDescription}
              />
          </div>
          <div className="form-sections">
            <label htmlFor="" className="commform-labels">
              Image:
            </label>
            <div id="image-upload-div">
            <input
              className="comm-upload-bar"
              name="image_url"
              type="file"
              placeholder="upload an image" 
              onChange={updateImage}
              />
              <button className='file-button' onClick={prevent}>Upload</button>
            </div>
          </div>
          <div className="form-sections">
            <label className="commform-labels">
              Price:
            </label>
            <input 
              name="price"
              type="number"
              step="0.01"
              min= "0.00"
              placeholder="$0.00"
              onChange={updatePrice}
              />
          </div>
          <div className="form-sections">
            <label className="commform-labels">Number Of Requests</label>
            {/* <p> Set the maximum amount of requests that you want to receive for this commission</p> */}
            <input
              name="requests"
              type="number"
              min="0"
              placeholder="0"
              onChange={updateRequests}
              />
          </div>
          <div className="form-sections">
            <label className="commform-labels">Duration</label>
            <p>Do you want to set a duration for this commission?</p>
          <div className="duration-options">
            <label className="commform-labels">
              Yes
            <input name="duration" type="radio" value={true} onClick={showDuration}/>
            </label>
            <label className="commform-labels">
              No
            <input name="duration" type="radio" value={false} onClick={hideDuration}/>
            </label>
          </div>
          </div>
          <div className={visibleDuration}>
          <div className="form-sections">
            <label className="commform-labels">
              Ends:
            </label>
            <input 
              name="date"
              type="date"
              onChange={updateDate}
              />
          </div>
          </div>
          <button className="commform-submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CommissionForm;