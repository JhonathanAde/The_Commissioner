import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"
import { getCommissionsById } from '../../services/commission'
import { getRequestsById } from '../../services/request'
import ProfileCommCards from './ProfileComCards'
import CommissionCards from '../../Card/CommissionCards'
import Rating from 'react-rating'
// import CommissionCards from '../../Card/CommissionCards'
// import RequestCards from './RequestCards'

//CSS
import './CSS/profilepage.css'
import '../../Card/CommissionCards.css'
// import BasicInfoCard from './BasicInfoCard'
import Footer from '../../Footer/Footer'
// import Rating from '../../Ratings/Rating'

const Profilepage = ({authenticated, user}) => {
 
  const [userRequests, setUserRequests] = useState(null)
  const [userCommissions, setUserCommissions] = useState(null)
  const {userId} = useParams()
  
  const history = useHistory()

// let personalPage = true;
/* 
  if (user.id == userId){
    useEffect(() => {
      (async () => {
        - getRequestsById;
        - getCommissionsById;
      })
    })
  }




*/

  useEffect(() => {
    (async () => {
      if(!userId){
        const request = await getRequestsById(user.id)
        const commissions = await getCommissionsById(user.id)
        setUserRequests(request)
        setUserCommissions(commissions)
      } else {
        const request = await getRequestsById(userId)
        const commissions = await getCommissionsById(userId)
        setUserRequests(request)
        setUserCommissions(commissions)
        history.push(`/profile/${userId}`)
      }
    })()
  },[user.id, history, userId])


  // useEffect(() => {
  //   (async () => {
  //     const res = await getRequestsById(user.id)
  //     const json = res.json()
  //     setUserRequests(json)
  //   })()
  // },[])

  
  // console.log(userCommissions)
  // console.log(userRequests)
  // const {commissions} = userCommissions
  // console.log(commissions)
 




  return (
    <div className="profilepage">
      <div className="profilepage-display">
        <div className="profilepage-display profile-info">
          <div className="profilepage-display profile-info__profilecard">
            <div className="profilepage-display profile-info__profilecard" id="profile-image__container">
              <img></img>
            </div>
            <div className="profilepage-display profile-info__profilecard-userinfo">
              <h1 id="profile-username">
                {user.username}
              </h1>
              <h1 id="profile-location">
                {user.location}
              </h1>
            </div>
          </div>
        </div>
        <div className="profilepage-display profile-content">
          <div className="filler-1"></div>
          <button>Commissions</button>
          <div className="profilepage-display profile-content__divider"></div>
          <div className="profilepage-display profile-content__display">
            {
              userCommissions && userCommissions.commissions.map((comms, idx) => (
                <CommissionCards comms={comms} key={idx}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profilepage;