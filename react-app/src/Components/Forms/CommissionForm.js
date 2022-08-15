import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {createCommission, uploadCommissionImage} from "../services/commission"

// CSS
import "./CSS/commissionform.css"

const CommissionForm = ({authenticated, user, image_url, setImage}) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState("");
  const [price, setPrice] = useState("0.00");
  const [requests, setRequests] = useState(0);
  const [title, setTitle] = useState("");
  const [isDuration, setIsDuration] = useState(false);
  const [uploadErrors, setUploadErrors] = useState([])

  const inputButtonStyles = {
    fontSize: "3rem",
    border: "none",
    background: "none",
    marginRight: "2rem",
    outline: "none",
    backgroundColor: "black",
    color: "white",
    padding: "5px",
  }

  let desCharacters = description.length;
  

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
  const history = useNavigate()

  let imgFileName = document.getElementById('commission-image__input')
  //--- Helper Functions ---
  
  const updateTitle = (e) => {
    setTitle(e.target.value)
  }
  
  const updateDescription = (e) => {
    setDescription(e.target.value)
  }

  const updateFile = (e) => {
    setFile(imgFileName.files.item(0))
    setFileName(imgFileName.files.item(0).name)
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
    setIsDuration(true);
  }
  
  const hideDuration = (e) => {
    setIsDuration(false);
  }
  
  const uploadImage = async (e) => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append('file_path', file)
    const uploadFile = await uploadCommissionImage(fileData);
    if(uploadFile.errors){
      setUploadErrors(uploadFile.errors)
    }
    else {
      setImage(`https://commissioner-commissions.s3.amazonaws.com/${fileName}`);
    }
  } 

  const commissionHandleSubmit = async (e) => {
    e.preventDefault();
    const commissionData = new FormData();
    commissionData.append('title', title);
    commissionData.append('description', description);
    commissionData.append('image_url', image_url);
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

  return (
      <div>
        <form className="commission-form" id="commission-form" onSubmit={commissionHandleSubmit}>
          <div className="commission-form commission-errors">
            {errors.map((error, key) => (
              <ul key={key} id="commission-form__error-list">
                <li>
                  {error}
                </li>
              </ul>
            ))}
          </div>
          <div className="commission-form commission-title">
            <label id="commission-title__label">Title</label>
            <input id="commission-title__input" onChange={updateTitle}></input>
          </div>
          <div className="commission-form commission-description">
            <div id="description__headers">
              <label id="commission-description__label">Description</label>
              <h1>{`${description.length}/230.`}</h1>
            </div>
            <textarea id="commission-description__textarea" maxlength="230" onChange={updateDescription}></textarea>
          </div>
          <div className="commission-form commission-image">
              <label id="commission-image__label" htmlFor="image-upload">Image</label>
            <div>
              <input id="commission-image__input" name="image-upload" type="file" accept=".jpeg, .jpg, .png" onChange={updateFile}></input>
              <button id="commission-image__upload" onClick={uploadImage}>Upload</button>
            </div>
          </div>
          <div className="commission-form commission-price">
            <label id="commission-price__label">Price</label>
            <input id="commission-price__input" type="number" min="0.00" step="1.00" value={price} onChange={updatePrice}></input>
          </div>
          <div className="commission-form commission-requests-cap">
            <label id="commission-request_cap__label">Number Of Requests</label>
            <p id="commission-request_cap__info">How many requests will you accept for this commisison?</p>
            <input id="commission-request_cap__input" type="number" min="0" step="1" value={requests} onChange={updateRequests}></input>
          </div>
          <div className="commission-form commission-duration">
            <label id="commission-duration__label">Duration</label>
            <p id="commission-duration__info">Do you want to set a duration for this commisison?</p>
            <div id="commission-duration__choices">
              <label id="duration-yes__label">Yes</label>
              <input name="duration__choices" type="radio" value={true} onClick={showDuration}></input>

              <label id="duration-no__label">No</label>
              <input name="duration__choices" type="radio" value={false} onClick={hideDuration}></input>
            </div>
            { isDuration &&
              <>
                <div id="commission-duration__date">
                  <label id="commission-duration__date__label">Ends:</label>
                  <input id="commission-duration__date__input" type="date" onChange={updateDate}></input>
                </div>
              </>
            }
            </div>
          <div className="commission-form commission-buttons">
            <button id="commission-buttons__submit" type="submit" form="commission-form">Submit</button>
            <input id="commission-buttons__reset" type="reset"/>
          </div>
        </form>
      </div>
  )
}

export default CommissionForm;