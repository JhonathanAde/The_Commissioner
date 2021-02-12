import React, {useState} from "react";
import { createRequest } from "../services/request"
import { useHistory } from "react-router-dom";

import './RequestForm.css'


const RequestForm = ({currentUser, commissionId, commission}) => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [references, setReferences] = useState("")
  const [urgency, setUrgency] = useState(false)
  const [date, setDate] = useState("")
  const [price, setPrice] = useState(0.00)
  const [errors, setErrors] = useState([])

  const history = useHistory()
  
  const {user, image_url} = commission
  const {id} = user
  
  // console.log(currentUser.id)
  // console.log(id)
  // console.log(image_url)

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDetails = (e) => {
    setDetails(e.target.value)
  }

  const updateReferences = (e) => {
    setReferences(e.target.files[0])
  }
  console.log(references)
  const updateUrgency = (e) => {
    setUrgency(e.target.value)
  }

  const updateDate = (e) => {
    setDate(e.target.value)
  }

  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const prevent = (e) => {
    e.preventDefault()
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const requestData = new FormData()
    requestData.append('title', title)
    requestData.append('details', details)
    requestData.append('references', references)
    requestData.append('urgency', urgency)
    requestData.append('date', date)
    requestData.append('commission_id', commissionId)
    requestData.append('price', price)
    requestData.append('user_id', id)
    requestData.append('buyer_id', currentUser.id)
    requestData.append('image_url', image_url)
    const request = await createRequest(requestData)
    console.log(requestData)
    if (request.errors) {
      setErrors(commission.errors);
    } else {
      history.push(`/${user.username}/requests`)
    }
  }

  return (
    <div className="request-form-container">
      <div className="request-imgblock">
      <h1 className="request-blocktitle">Request</h1>
        <div className="request-img">
          <img src={image_url} alt="Requested Commission"/>
        </div>
        <div className="request-img-info">
        </div>
      </div>


      <div className="request-form">
      <div>
        {errors.map(error => (
            <div>{error}</div>
        ))}
      </div>
    <form onSubmit={submitHandler}>
      <div className="request-form-elements">
      <label>
        Title
      </label>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={updateTitle}
      />
      </div>

      <div className="request-form-elements">
      <label>
        Description
      </label>
      <textarea
        className="request-description-box"
        name="details"
        placeholder="Enter description here"
        onChange={updateDetails}
      />
      </div>

      <div className="request-form-elements">
      <label htmlFor="images">References</label>
      <p>If you have any reference images that you want to provide please upload them below.</p>
      <div className="request-upload">
      <input
        name="references"
        type="file"
        placeholder="upload images"
        onChange={updateReferences}
      />
      <button className='file-button' onClick={prevent}>Upload</button>
      </div>
      </div>

  <div className="request-form-elements">
      <label>
        Urgent?
      </label>

    <div className="choices">

      <label>Yes
      <input
        name="urgent"
        type="radio"
        value={true}
        onChange={updateUrgency} 
      />
      </label>

      <label> No
      <input
        name="urgent"
        type="radio"
        value={false} 
        onChange={updateUrgency}
      />
      </label>
    </div>
  </div>

      <div className="request-form-elements">

      <input 
        name="date"
        type="date"
        onChange={updateDate}
      />
      </div>
      <button type="submit">Submit</button>
    </form>
      </div>
    </div>
  )
}

export default RequestForm;