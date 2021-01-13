import React, {useState, useEffect} from 'react'

// CSS
import "./CommissionForm.css"

const CommissionForm = () => {
  const [duration, setDuration] = useState(false)

  return (
    <div className="commform-div">
      <form>
          <label>
            Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Title"
            />
          <label>
            Description
          </label>
          <textarea
            name="description"
            type="textarea"
            placeholder="Add description"
            />
          <label>
            Image:
          </label>
          <input
            name="image"
            type="text"
            placeholder="upload an image" 
            />
          <label>
            Price:
          </label>
          <input 
            name="price"
            type="number"
            min= "0.00"
            placeholder="$0.00"
            />
          <label>Number Of Requests</label>
          {/* <p> Set the maximum amount of requests that you want to receive for this commission</p> */}
          <input
            name="requests"
            type="number"
            min="0"
            placeholder="0"
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
            />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CommissionForm;