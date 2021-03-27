import React, {useState} from "react";
import { createRequest } from "../services/request"
import { useHistory } from "react-router-dom";

import './CSS/requestform.css'


const RequestForm = ({currentUser, commissionId, commission}) => {

  //--- State ---
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState([]);
  const [price, setPrice] = useState(0.00);
  const [references, setReferences] = useState("");
  const [title, setTitle] = useState("");
  const [urgency, setUrgency] = useState(false);

  //--- Redirect declaration ---
  const history = useHistory();
  
  //--- User info ---
  const {user, image_url} = commission;
  const {id} = user;
  
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

  const updatePrice = (e) => {
    setPrice(e.target.value);
  }

  const prevent = (e) => {
    e.preventDefault();
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
      setErrors(commission.errors);
    } else {
      history.push(`/${user.username}/requests`);
    }
  }

  return (
      <div className="request-form">
      <div>
        {errors.map(error => (
            <div>{error}</div>
        ))}
      </div>
    <form onSubmit={submitHandler}>
      <ul>
        <li>
          <label>
            Title
          </label>
          <input
            name="title"
            type="text"
            onChange={updateTitle}
            placeholder="Title"
          />
        </li>
        <li>
          <label>
            Description
          </label>
          <textarea
            name="description"
            tpye="textarea"
            placeholder="Add the details of your request.."
            onChange={updateDetails}
          />
        </li>

        <li>
          <label>
            References
          </label>
          <input 
            type="file"
            name="reference"
            onChange={updateReferences}
          />
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
      </div>
  )
}

export default RequestForm;