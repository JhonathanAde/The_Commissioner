import React, {useState, useEffect} from 'react'

import CommissionCards from '../Card/CommissionCards'
import { getAllCommissions } from '../services/commission'

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

  return (
    <>
    <div className="home">
    <div className="home home-wrapper">
    <div className="homepage_banner-image">
      <div className="banner-text">
        <h1 id="banner-create">Create</h1>
        <h1 id="banner-connect">Connect</h1>
        <h1 id="banner-sell">Sell</h1>
      </div>
      <div className="homepage-image-container">
      <img loding="lazy" src="https://commissioner-commissions.s3.amazonaws.com/Commissioner_homepage_banner.png" />
      </div>
    </div>
    <div className="homepage_recentcommbar">
      <h1 id="commbar-title">Recent commissions</h1>
      <div className="homepage_recentcommbar_items">
          {recentComs && recentComs.commissions.map((comms, idx) => (
            <CommissionCards comms={comms} key={idx}/>
          ))}
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Homepage;