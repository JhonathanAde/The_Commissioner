import React, {useState, useEffect} from 'react'

import CommissionCards from '../Card/CommissionCards'
import CommissionForm from '../Forms/CommissionForm'

// CSS
import "./HomePage.css"

const Homepage = ({authenticated}) => {
  return (
    <>
    <div className="homepage_banner-image">
      Banner
    </div>
    <div className="homepage_recentcommbar">
      <h1>Recent commissions</h1>
      <div className="homepage_recentcommbar_items">
          <CommissionCards />
          <CommissionCards />
          <CommissionCards />
          <CommissionCards />
          <CommissionCards />
      </div>
    </div>
    </>
  )
}

export default Homepage;