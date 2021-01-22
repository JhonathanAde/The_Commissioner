import React, {useState, useEffect} from 'react'

import CommissionCards from '../Card/CommissionCards'
import { getAllCommissions } from '../services/commission'
// import CommissionForm from '../Forms/CommissionForm'

// CSS
import "./HomePage.css"

const Homepage = ({authenticated}) => {

  const [recentComs, setRecentComs] = useState(null)

  useEffect(() => {
    (async () => {
      const commissions = await getAllCommissions()
      setRecentComs(commissions)
    })()
  }, [])

  // console.log(recentComs)
  return (
    <>
    <div className="homepage_banner-image">
      {/* <img src="https://commissioner-commissions.s3.amazonaws.com/Banner.png" /> */}
    </div>
    <div className="homepage_recentcommbar">
      <h1>Recent commissions</h1>
      <div className="homepage_recentcommbar_items">
          {recentComs && recentComs.commissions.map((comms, idx) => (
            <CommissionCards comms={comms} key={idx}/>
          ))}
      </div>
    </div>
    </>
  )
}

export default Homepage;