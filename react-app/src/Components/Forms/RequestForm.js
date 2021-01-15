import React, {useState, useEffect} from "react";


const RequestForm = ({user}) => {

  const [urgency, setUrgency] = useState(false)

  const updateUrgency = (e) => {
    setUrgency(e.target.value)
  }

  console.log(urgency)
  console.log(user)

  return (
    <>
    <form>
      <h1>Request</h1>
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
        name="details"
        placeholder="Enter description here"
      />
      <label>References</label>
      <p>If you have any reference images that you want to provide please upload them below.</p>
      <input
        name="references"
        type="url"
        placeholder="upload images"
      />
      
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

      <label>Price</label>
      <input 
        name="price"
        type="number"
        placeholder="$0.00"
        min="0.00"
        step="0.01"      
      />
    </form>

    <div> </div>
    </>
  )
}

export default RequestForm;