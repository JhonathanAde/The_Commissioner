import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import {createCommission} from "../services/commission"

// CSS
import "./CommissionForm.css"

const CommissionForm = ({authenticated, user}) => {
  const [duration, setDuration] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image_url, setImage] = useState("")
  const [requests, setRequests] = useState()
  const [price, setPrice] = useState(0.00)
  const [date, setDate] = useState("")
  const [errors, setErrors] = useState([])

  // console.log(user)
  const userId = user.id
  // console.log(userId)

  const currentDateTime = new Date()

  const currentDay = currentDateTime.getDate()
  const currentMonth = currentDateTime.getMonth()
  const currentYear = currentDateTime.getFullYear()

  const dayFormat = String(currentDay).padStart(2, 0)
  const monthFormat = String(currentMonth + 1).padStart(2, 0)
  // console.log(dayFormat)
  // console.log(monthFormat)
  // console.log(currentDateTime)

  const dateCreated = `${currentYear}-${monthFormat}-${dayFormat}`
  // console.log(dateCreated)

  const history = useHistory()

  const commisisonHandleSubmit = async (e) => {
    e.preventDefault();
    const commissionData = new FormData()
    commissionData.append('title', title)
    commissionData.append('description', description)
    commissionData.append('image', image_url)
    commissionData.append('price', price)
    commissionData.append('request_amt', requests)
    commissionData.append('date_created', dateCreated)
    commissionData.append('duration', date)
    commissionData.append('user_id', userId)
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
  console.log(image_url)

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
    console.log('file uploaded')
  }


  // console.log(date)
  // console.log(price)
  // console.log(requests)
  // console.log(description)

  return (
    <div>
      <div className="image">
        <img src={image_url} alt="Commission"/>
      </div>
      <div className="commform-div">
          <div>
            {errors.map(error => (
              <div>{error}</div>
            ))}
          </div>
        <form className="comm-form" onSubmit={commisisonHandleSubmit}>
          <div className="form-sections" id="commform-title">
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
          <div className="form-sections">
            <label>
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
            <label htmlFor="">
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
            <label>
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
            <label>Number Of Requests</label>
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
            <label>Duration</label>
            <p>Do you want to set a duration for this commission?</p>
          <div className="duration-options">
            <label>
              Yes
            <input type="radio" value="true" onChange={setDuration}/>
            </label>
            <label>
              No
            <input type="radio" value="false" onChange={setDuration}/>
            </label>
          </div>
          </div>
          <div className="form-sections">
            <label>
              Ends:
            </label>
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

export default CommissionForm;