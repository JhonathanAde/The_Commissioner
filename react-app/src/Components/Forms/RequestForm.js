import React, {useState} from "react";
import { createRequest } from "../services/request"
import { useHistory } from "react-router-dom";

import './CSS/requestform.css'


const RequestForm = ({currentUser, commissionId, commission}) => {

  
  //--- State ---
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState([]);
  // const [price, setPrice] = useState(0.00);
  const [references, setReferences] = useState("");
  const [title, setTitle] = useState("");
  const [urgency, setUrgency] = useState(false);
  const [dueDate, setDueDate] = useState("due-date__hidden");
  const [wordCount, setWordCount] = useState(0);
  let detailCharacters = details.length; 
  
  //--- Redirect declaration ---
  const history = useHistory();
  
  //--- User info ---
  const {user, image_url, price} = commission;
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

  const showDueDate = () => {
    setDueDate("due-date")
  }
  const hideDueDate = () => {
    setDueDate("due-date__hidden")
  }

  // const updatePrice = (e) => {
  //   setPrice(e.target.value);
  // }

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
      setErrors(request.errors);
    } else {
      history.push(`/${user.username}/requests`);
    }
  }

  return (
    <form className="request-form " onSubmit={submitHandler}>
        <div className="request-form request-contentwrapper">
          <div className="request-form request-errors">
            {errors.map(error => (
                <ul>
                  <li>{error}</li>
                </ul>
            ))}
          </div>
          <div className="request-form requestform-info">
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
                  type="textarea"
                  maxLength="230"
                  placeholder="Add the details of your request.."
                  onChange={updateDetails}
                />
                <p className="word-count">{`${detailCharacters}/230(MAX.)`}</p>
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
              <li>
                <label>
                  Urgent?
                </label>
                <div className="request-form request-urgency">
                  <label>
                    Yes
                  </label>
                    <input type="radio" name="urgency" value="true" onChange={updateUrgency} onClick={showDueDate} />
                  <label>
                    No
                  </label>
                    <input type="radio" name="urgency" value="false" onChange={updateUrgency} onClick={hideDueDate} />
                </div>
              </li>
              <li>
                <div className={dueDate}>
                  <p>Please select the day that your request is needed.</p>
                  <input name="date" type="date" onChange={updateDate}/>
                </div>
              </li>
            </ul>
            <button className="request-form request-submit" type="submit">Submit</button>
          </div>
        </div>
        </form>
  )
}

export default RequestForm;