import React, {useState} from "react";
import { createRequest } from "../services/request"

import './RequestForm.css'


const RequestForm = ({currentUser, commissionId, commission}) => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [references, setReferences] = useState("")
  const [urgency, setUrgency] = useState(false)
  const [date, setDate] = useState("")
  const [price, setPrice] = useState(0.00)
  const [errors, setErrors] = useState([])


  
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
      <h1>Request</h1>
      <label>
        Title
      </label>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={updateTitle}
      />
      <label>
        Description
      </label>
      <textarea
        name="details"
        placeholder="Enter description here"
        onChange={updateDetails}
      />
      <div>
      <label htmlFor="images">References</label>
      <p>If you have any reference images that you want to provide please upload them below.</p>
      <input
        name="references"
        type="file"
        placeholder="upload images"
        onChange={updateReferences}
      />
      <button className='file-button' onClick={prevent}>Upload</button>
      </div>
      
      <label>
        Urgent?
      </label>
      <div className="choices">

      <label>Yes</label>
      <input
        name="urgent"
        type="radio"
        value={true}
        onChange={updateUrgency} 
      />

      <label>No</label>
      <input
        name="urgent"
        type="radio"
        value={false} 
        onChange={updateUrgency}
      />

      </div>

      <input 
        name="date"
        type="date"
        onChange={updateDate}
      />
      {/* <img src={image_url} alt="Requested Commission"/> */}
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default RequestForm;