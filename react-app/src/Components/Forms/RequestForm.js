import React from "react";

const RequestForm = () => {

  return (
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
        placeholder="Enter description here"
      />
      <label>References</label>
      <p>If you have any reference images that you want to provide please upload them below.</p>
      <input
        name="references"
        type="url"
        placeholder="upload images"
      />
      

    </form>
  )
}

export default RequestForm;