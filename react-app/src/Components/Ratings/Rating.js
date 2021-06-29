import React, {useState} from "react";


const Rating = () => {
  const [score, setScore] = useState("")
  const [fill, setFill] = useState("far fa-star")


  let counter = 0
  let total = 0

  const ratingScale = [
   {
    "value": 1,
    "icon": <i className={fill}></i>
  }
  , 
  {
    "value": 2,
    "icon": <i className={fill}></i>
  }
  , 
  {
    "value": 3,
    "icon": <i className={fill}></i>
  }
  , 
  {
   "value": 4,
    "icon": <i className={fill}></i>
  }
  , 
  {"value": 5,
    "icon": <i className={fill}></i>
  }
]



  const valueChecker = (e) => {
    e.preventDefault()
    let ratingValue = Number(e.target.value)
    total += ratingValue
    counter ++
  }

  return (
    <div>
     {ratingScale && ratingScale.map((ratings, idx) => (
       <button value={ratings.value} onClick={valueChecker}>{ratings.icon}</button>
     ))}
    </div>
  )
}

export default Rating;