import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"
import CommissionCards from '../../Card/CommissionCards'
import { getCommissionsById } from '../../services/commission'
import { getRequestsById } from '../../services/request'
import ProfileCommCards from './ProfileComCards'
import RequestCards from './RequestCards'

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
  },[user.id])


  // useEffect(() => {
  //   (async () => {
  //     const res = await getRequestsById(user.id)
  //     const json = res.json()
  //     setUserRequests(json)
  //   })()
  // },[])

  
  console.log(userCommissions)
  console.log(userRequests)
  // const {commissions} = userCommissions
  // console.log(commissions)
 




  return (
    <div>
      <div className="profile-banner" />
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
        {userRequests && userRequests.requests.map((req, idx) => (
          <RequestCards request={req} key={idx}/>
        ))}
      </div>

    </div>
  )
}

export default Profilepage;