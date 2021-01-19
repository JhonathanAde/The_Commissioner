import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"
import { getCommissionsById } from '../../services/commission'
import { getRequestsById } from '../../services/request'
import ProfileCommCards from './ProfileComCards'
// import CommissionCards from '../../Card/CommissionCards'
// import RequestCards from './RequestCards'

//CSS
import './ProfilePage.css'
import BasicInfoCard from './BasicInfoCard'

const Profilepage = ({authenticated, user}) => {
 
  const [userRequests, setUserRequests] = useState(null)
  const [userCommissions, setUserCommissions] = useState(null)
  const {userId} = useParams()
  
  const history = useHistory()


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
    <>
    <div className="profile-banner" />
    <div className="profile-layout">
      <div className="profile-left">
        <div className="profile-card">
          <BasicInfoCard />
        </div>
        <div className='commission-slot'>
          <h1>Commissions</h1>
          <div className='commission-slot-display'>
        {userCommissions && userCommissions.commissions.map((com, idx) => (
          <ProfileCommCards com={com} key={idx}/>
        ))}
          </div>
        </div>
        <div>
          <div className="displays">


          </div>
          {/* {userRequests && userRequests.requests.map((req, idx) => (
            <RequestCards request={req} key={idx}/>
          ))} */}
        </div>
      </div>

      <div className="profile-right">
          <div className="reviews">
            <h1>Reviews</h1>
          </div>
      </div>
    </div>
    </>
  )
}

export default Profilepage;