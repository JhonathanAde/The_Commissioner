import React, {useState, useEffect} from 'react'
import CommissionCards from '../../Card/CommissionCards'
import { getCommission } from '../../services/commission'
import ProfileCommCards from './ProfileComCards'

const Profilepage = ({authenticated, user}) => {
 
  const [userCommissions, setUserCommissions] = useState(null)
  
  useEffect(() => {
    (async () => {
      const commissions = await getCommission(user.id)
      setUserCommissions(commissions)
    })()
  },[user.id])

  console.log(userCommissions)
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
    </div>
  )
}

export default Profilepage;