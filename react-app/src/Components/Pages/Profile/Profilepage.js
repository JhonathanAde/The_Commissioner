import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"
import CommissionCards from '../../Card/CommissionCards'
import { getCommissionsById } from '../../services/commission'
import { getRequestsById } from '../../services/request'
import ProfileCommCards from './ProfileComCards'
import RequestCards from './RequestCards'

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
      <h1>Profile page</h1>
      <div>
       {userCommissions && userCommissions.commissions.map((com, idx) => (
         <ProfileCommCards com={com} key={idx}/>
       ))}
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