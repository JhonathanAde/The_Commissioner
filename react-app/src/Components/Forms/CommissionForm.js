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
      <form className="comm-form" onSubmit={commisisonHandleSubmit}>
        <div className="comm-form commcontent-wrapper">
          <div className="comm-form commform-errors">
            {errors.map((error, idx) => (
              <div key={idx}>{error}</div>
            ))}
          </div>
        </div>
          <div className="comm-form commform-info">
            <ul>
              <li>
                <label>
                  Title
                </label>
              </li>

              <li>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  onChange={updateTitle}
                  />
              </li>

              <li>
                <label>
                  Description
                </label>
              </li>

              <li>
                <textarea
                  name="description"
                  type="textarea"
                  placeholder="Add description"
                  onChange={updateDescription}
                  />
              </li>

              <li>
                <label htmlFor="">
                  Image:
                </label>
              </li>

              <li>
                <input
                  className="comm-upload-bar"
                  name="image_url"
                  type="file"
                  placeholder="upload an image" 
                  onChange={updateImage}
                  />
              </li>

              <li>
                <button className='file-button' onClick={prevent}>Upload</button>
              </li>

              <li>
                <label>
                  Price:
                </label>
              </li>

              <li>
                <input 
                  name="price"
                  type="number"
                  step="0.01"
                  min= "0.00"
                  placeholder="$0.00"
                  onChange={updatePrice}
                  />
              </li>

              <li>
                <label>Number Of Requests</label>
              </li>

              {/* <p> Set the maximum amount of requests that you want to receive for this commission</p> */}
              <li>
                <input
                  name="requests"
                  type="number"
                  min="0"
                  placeholder="0"
                  onChange={updateRequests}
                  />
              </li>
            </ul>
      
          <div className="duration-options">
            <label>Duration</label>
            <p>Do you want to set a duration for this commission?</p>
            <label>
              Yes
            <input name="duration" type="radio" value={true} onClick={showDuration}/>
            </label>
            <label >
              No
            <input name="duration" type="radio" value={false} onClick={hideDuration}/>
            </label>
          </div>
          <div className={visibleDuration}>
            <label>
              Ends:
            </label>
            <input 
              name="date"
              type="date"
              onChange={updateDate}
              />
          </div>
          <button className="commform-submit" type="submit">Submit</button>
          </div>
        </form>
  )
}

export default CommissionForm;