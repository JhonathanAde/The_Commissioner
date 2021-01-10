import React from 'react'

const CommissionForm = () => {
  return (
    <>
    <form>
      <div>
        <label>
          Title
        </label>
        <input
          name="title"
          type="text"
          placeholder="Title"
        />
      </div>
      <div>
        <label>
          Description
        </label>
        <input
          name="description"
          type="textarea"
          placeholder="Add description"
        />
      </div>
    </form>
    </>
  )
}

export default CommissionForm;