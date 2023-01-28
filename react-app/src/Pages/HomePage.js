import React, {useState, useEffect} from 'react'

import ComCardHm from '../Components/Card/ComCardHm'
import { getAllCommissions } from '../services/commission'

// CSS
import "./homepage.css"

const Homepage = ({authenticated}) => {

  const [isHover, setIsHover] = useState(false);
  const [isOverlay, setOverlay] = useState(false);
  const [recentComs, setRecentComs] = useState(null)

  const overlayActive = (e) => {
    e.preventDefault();

    if(!isOverlay){
      setOverlay(true);
    }
  }

  useEffect(() => {
    // (async () => {
    //   const getComs = await getAllCommissions();
    //   let commissions = getComs.commissions; 
    //   setRecentComs(commissions)
    // })()
    const fetchData = async () => {
      const result = await fetch(`/api/commissions`);
      result.json().then(json => {
        let {commissions} = json;
        setRecentComs(commissions);
      });
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="homepage-main" data-page>

        <div className='homepage-content'>
          <article className='homepage-hero'>
            <div className='dummy-photo'>
              <picture>
                <img src="https://commissioner-commissions.s3.amazonaws.com/Commissioner_homepage_banner.png"/>
              </picture>
            </div>
          </article>
          <article className='homepage-artdisplay'>
            <h1>Recent Commissions</h1>
            {recentComs && recentComs.map((com, key) => {
              return(
                <div key={key}>
                  <ComCardHm 
                    com={com}
                    />
                </div>
              )
            })}
           
          </article>

        </div>

      </div>
    {/* <div className="home">
    <div className="home home-wrapper">
    <div className="homepage_banner-image">
      <div className="banner-text">
        <h1 id="banner-create">Create</h1>
        <h1 id="banner-connect">Connect</h1>
        <h1 id="banner-sell">Sell</h1>
      </div>
      <div className="homepage-image-container">
      <img loading="lazy" src="https://commissioner-commissions.s3.amazonaws.com/Commissioner_homepage_banner.png" />
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
    </div> */}
    </>
  )
}

export default Homepage;