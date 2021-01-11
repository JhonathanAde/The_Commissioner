import React, {useState} from 'react';


const Dropdown = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <h1>drop down</h1>
    </>
  )
}