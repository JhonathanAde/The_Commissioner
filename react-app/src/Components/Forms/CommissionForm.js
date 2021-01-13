import React, {useState, useEffect} from 'react'
import {createCommission} from "../services/commission"

// CSS
import "./CommissionForm.css"

const CommissionForm = ({authenticated, user}) => {
  const [duration, setDuration] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
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


  



  console.log(currentDateTime)



  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
  }
  const updateImage = (e) => {
    setImage(e.target.value)
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

  const commisisonHandleSubmit = async (e) => {
    e.preventDefault();
    const commission = await createCommission(title, description, image, requests, price, date, userId);
    if (commission.errors) {
      setErrors(commission.errors);
    }
  }
  console.log(date)
  console.log(price)
  console.log(requests)
  console.log(description)

  return (
    <div className="commform-div">
        <div>
          {errors.map(error => {
            <div>{error}</div>
          })}
        </div>
      <form onSubmit={commisisonHandleSubmit}>
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
            name="description"
            type="textarea"
            placeholder="Add description"
            onChange={updateDescription}
            />
          <label>
            Image:
          </label>
          <input
            name="image"
            type="text"
            placeholder="upload an image" 
            onChange={updateImage}
            />
          <label>
            Price:
          </label>
          <input 
            name="price"
            type="number"
            min= "0.00"
            placeholder="$0.00"
            onChange={updatePrice}
            />
          <label>Number Of Requests</label>
          {/* <p> Set the maximum amount of requests that you want to receive for this commission</p> */}
          <input
            name="requests"
            type="number"
            min="0"
            placeholder="0"
            onChange={updateRequests}
            />
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
          <label>
            Ends:
          </label>
          <input 
            name="date"
            type="date"
            onChange={updateDate}
            />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CommissionForm;