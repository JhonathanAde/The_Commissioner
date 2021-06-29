import React, {useState, useEffect} from 'react'
import { useParams, useHistory, useLocation } from "react-router-dom"
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

  var visitor 
 
  const [userRequests, setUserRequests] = useState(null)
  const [userCommissions, setUserCommissions] = useState(null)
  const [visitorRequests, setVisitorRequests] = useState(null)
  const [visitorCommission, setVisitorCommissions] = useState(null)
  const [otherUserName, setOtherUserName] = useState(null)
  const [otherLocation, setOtherLocation] = useState(null)
  const {userId} = useParams()
  const {pathname} = useLocation();
  const history = useHistory();


  useEffect(() => {
    (async () => {
        if(userId){
          const visitorReq = await getRequestsById(userId)
          const visitorComm = await getCommissionsById(userId)
          setVisitorRequests(visitorReq)
          setVisitorCommissions(visitorComm)
          setOtherUserName(visitorComm.commissions[0].commission.user.username)
          setOtherLocation(visitorComm.commissions[0].commission.user.location)
        }
    })()
  },[user.id, history, userId])


  useEffect(() => {
    (async () => {
       const request = await getRequestsById(user.id)
        const commissions = await getCommissionsById(user.id)
        setUserRequests(request)
        setUserCommissions(commissions)
    })()
  }, [])


  const checkLocation = () => {
  if(pathname === `/${user.username}/profile`){
    visitor = false;
  } 
  else {
    visitor = true;
  }
  }

  checkLocation();


  return (
    <>
    { !visitor ?

    <div className="profilepage">
      <div className="profilepage-display">
        <div className="profilepage-display profile-info">
          <div className="profilepage-display profile-info__profilecard">
            <div className="profilepage-display profile-info__profilecard" id="profile-image__container">
              <div id="profile-image__container-div">
              <img></img>
              </div>
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
          <div>
          <button>Commissions</button>
          <button>Requests</button>
          </div>
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
    :
    <div className="profilepage">
      <div className="profilepage-display">
        <div className="profilepage-display profile-info">
          <div className="profilepage-display profile-info__profilecard">
            <div className="profilepage-display profile-info__profilecard" id="profile-image__container">
              <div id="profile-image__container-div">
              <img></img>
              </div>
            </div>
            <div className="profilepage-display profile-info__profilecard-userinfo">
              <h1 id="profile-username">
                {otherUserName}
              </h1>
              <h1 id="profile-location">
                {otherLocation}
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
              visitorCommission && visitorCommission.commissions.map((comms, idx) => (
                <CommissionCards comms={comms} key={idx}/>
              ))}
          </div>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default Profilepage;