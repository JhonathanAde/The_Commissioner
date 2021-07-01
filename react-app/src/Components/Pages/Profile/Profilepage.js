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
  var buttons
  var displayReqs = false;
 
  const [userRequests, setUserRequests] = useState(null)
  const [userCommissions, setUserCommissions] = useState(null)
  const [visitorRequests, setVisitorRequests] = useState(null)
  const [visitorCommission, setVisitorCommissions] = useState(null)
  const [otherUserName, setOtherUserName] = useState(null)
  const [otherLocation, setOtherLocation] = useState(null)
  const [commButton, setCommButton] = useState(null)
  const [reqButton, setReqButton] = useState(null)
  const [requestInfo, setRequestInfo] = useState('')
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
        const commButtonEl = document.getElementById('profile-commissions__button-active')
        const reqButtonEl = document.getElementById('profile-requests__button')
        const request = await getRequestsById(user.id)
        const commissions = await getCommissionsById(user.id)
        setUserRequests(request)
        setUserCommissions(commissions)
        setCommButton(commButtonEl);
        setReqButton(reqButtonEl);
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const requests = await getRequestsById(user.id)
      setRequestInfo(requests)
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

  console.log(commButton)
  console.log(reqButton)
  console.log(requestInfo);

  const reqClickHandler = () => {
      buttons = 2;
      reqButton.id = "profile-requests__button-active";
      displayReqs = true;
      if(buttons !== 1){
      commButton.id = "profile-commissions__button";
      // window.location.reload()
    }
  }

  const commClickHandler = () => {
    buttons = 1;
    commButton.id = "profile-commissions__button-active";
    displayReqs = false;
    if(buttons !== 2){
      reqButton.id = "profile-requests__button"
    }
  }

  const checkButtons = () => {
    if(buttons !== 1){
      commButton.id = "profile-commissions__button";
    }
    else if(buttons !== 2){
      reqButton.id = "profile-requests__button"
    }

  }

  // checkButtons();

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
          <div id="profile-display__buttons">
          <button id="profile-commissions__button-active" onClick={commClickHandler}>Commissions</button>
          <button id="profile-requests__button"  onClick={reqClickHandler}>Requests</button>
          </div>
          <div className="profilepage-display profile-content__divider"></div>
          <div className="profilepage-display profile-content__display">
            { 
              userCommissions && userCommissions.commissions.map((comms, idx) => (
                <CommissionCards comms={comms} key={idx}/>
              ))
            }
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