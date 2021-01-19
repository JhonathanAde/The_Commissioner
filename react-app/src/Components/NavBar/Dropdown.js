import React, {useState} from 'react';


const Dropdown = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => setVisible(!visible)

  return (
    <>
      <h1>drop down</h1>
    </>
  )
}