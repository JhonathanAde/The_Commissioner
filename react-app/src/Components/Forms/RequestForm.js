import React, {useState} from "react";
import { createRequest } from "../services/request"
import { useHistory } from "react-router-dom";

import './CSS/requestform.css'


const RequestForm = ({currentUser, commissionId, commission, seller}) => {

  
  //--- State ---
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState([]);
  // const [price, setPrice] = useState(0.00);
  const [references, setReferences] = useState("");
  const [title, setTitle] = useState("");
  const [urgency, setUrgency] = useState(false);
  const [dueDate, setDueDate] = useState(false);
  const [dueDateClass, setDueDateClass] = useState("request-form request-form__urgent-date")
  let detailCharacters = details.length; 
  
  //--- Redirect declaration ---
  const history = useHistory();
  
  //--- User info ---
  const {user, image_url, price} = commission;
  const {id} = seller;
  
  // --- Helper functions ---
  const updateTitle = (e) => {
    setTitle(e.target.value);
  }
  
  const updateDetails = (e) => {
    setDetails(e.target.value);
  }

  const updateReferences = (e) => {
    setReferences(e.target.files[0]);
  }

  const updateUrgency = (e) => {
    setUrgency(e.target.value);
  }

  const updateDate = (e) => {
    setDate(e.target.value);
  }

  const showDueDate = (e) => {
    setDueDate(true);
    setDueDateClass("request-form request-form__urgent-date-active")
  }

  const hideDueDate = (e) => {
    setDueDateClass("request-form request-form__urgent-date")
    setTimeout(() => {
      setDueDate(false);
    }, 400)
    
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    const requestData = new FormData()
    requestData.append('title', title);
    requestData.append('details', details);
    requestData.append('references', references);
    requestData.append('urgency', urgency);
    requestData.append('date', date);
    requestData.append('commission_id', commissionId);
    requestData.append('price', price);
    requestData.append('user_id', id);
    requestData.append('buyer_id', currentUser.id);
    requestData.append('image_url', image_url);
    const request = await createRequest(requestData);
    if (request.errors) {
      setErrors(request.errors);
    } else {
      history.push(`/${currentUser.username}/profile`);
    }
  }

  return (
    <div>
      <form className="request-form" id="request-form" onSubmit={submitHandler}>
        <div className="request-form request-form__errors">
          {errors.map((error, idx) => (
            <ul id="request-form__errors-list" key={idx}>
              <li>{error}</li>
            </ul>
          ))}
        </div>
        <div className="request-form request-form__title">
          <label id="request-title__label">Title</label>
          <input id="request-title__input" onChange={updateTitle}></input>
        </div>
        <div className="request-form request-form__description">
          <label id="request-description__label">Description</label>
          <input id="request-description__input" onChange={updateDetails}></input>
        </div>
        <div className="request-form request-form__references">
          <label id="request-references__label">References</label>
          <div id="references-input__container">
            <input id="request-references__input" type="file" onChange={updateReferences}></input>
            <button id="request-references__input-upload">Upload</button>
          </div>
        </div>
        <div className="request-form request-form__urgent">
          <label id="request-urgent__label">Urgent?</label>
          <div className="request-form__urgent-choices"> 
            <label id="urgent-choices__yes">Yes</label>
            <input name="urgent-choices" type="radio" value={true} onClick={showDueDate}></input>

            <label id="urgent-choices__no">No</label>
            <input name="urgent-choices" type="radio" value={false} onClick={hideDueDate}></input>
          </div>

          { dueDate &&

            <div className={dueDateClass}>
              <p id="urgent-date__prompt">When is it needed?</p>
              <input id="urgent-date__input" type="date" onChange={updateDate}></input>
            </div>
          }
        </div>

        <div>
          <button id="request-form__submit-button" type="submit" form="request-form">Submit</button>
          <input id="request-form__reset-button" type="reset"></input>
        </div>
      </form>
    </div>
  )
}

export default RequestForm;