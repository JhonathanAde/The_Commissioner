import React, {useState, useEffect} from 'react'
import { useParams, useHistory, useLocation } from "react-router-dom"
import { getCommissionsById } from '../../services/commission'
import { getRequestsById } from '../../services/request'
import ProfileCommCards from './ProfileComCards'
import CommissionCards from '../../Card/CommissionCards'
import RequestCards from '../Request/RequestCards'
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
 
  const [userRequests, setUserRequests] = useState(null)
  const [userCommissions, setUserCommissions] = useState(null)
  const [visitorRequests, setVisitorRequests] = useState(null)
  const [visitorCommission, setVisitorCommissions] = useState(null)
  const [otherUserName, setOtherUserName] = useState(null)
  const [otherLocation, setOtherLocation] = useState(null)
  const [otherProfPic, setOtherProfPic] = useState(null)
  const [otherWebsite, setOtherWebsite] = useState('');
  const [otherBio, setOtherBio] = useState('');
  const [commButton, setCommButton] = useState(null)
  const [reqButton, setReqButton] = useState(null)
  const [requestInfo, setRequestInfo] = useState('')
  const [displayReqs, setDisplayReqs] = useState(false);
  const [review, setReviews] = useState(null);
  const [reviewLength, setReviewLength] = useState(0);
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
          setOtherProfPic(visitorComm.commissions[0].commission.user.profile_pic)
          setOtherWebsite(visitorComm.commissions[0].commission.user.website)
          setOtherBio(visitorComm.commissions[0].commission.user.bio)
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
      setRequestInfo(requests.requests)
    })()
  }, [])

  const checkLocation = () => {
  if(pathname.includes(`/${user.username}/profile`)){
    visitor = false;
  }

  else {
    visitor = true;
  }
  }

  checkLocation();

  const reqClickHandler = () => {
    setDisplayReqs(true);
      buttons = 2;
      reqButton.id = "profile-requests__button-active";
      if(buttons !== 1){
      commButton.id = "profile-commissions__button";
      // window.location.reload()
    }
  }

  const commClickHandler = () => {
    setDisplayReqs(false);
    buttons = 1;
    commButton.id = "profile-commissions__button-active";
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

  console.log(displayReqs);
  console.log(requestInfo);

  // const calculateAverageRating = () => {
  //   let sum = 0 
  //   for(let i = 0; i < reviewLength; i++){
  //     let eachRating = review.ratings[i].rating;
  //     sum += eachRating;
  //   }

  //   averageRating = Math.floor(sum / reviewLength);
    

  // }

  // calculateAverageRating()


  // checkButtons();

  return (
    <>
    { !visitor ?

    <div className="profilepage">
      <div className="profilepage-display">
        <div className="profilepage-display profile-info">
            <div className="profilepage-display profile-info__profilecard-userinfo">
              <div className="profilepage-display profile-info__profilecard">
                <div id="userinfo">
                <div className="profilepage-display profile-info__profilecard" id="profile-image__container">
                <div id="profile-image__container-div">
                  <img src={user.profile_pic}></img>
                </div>
              </div>
              <h1 id="profile-username">
                {user.username}
              </h1>
              <h1 id="profile-location">
                {user.location}
              </h1>
              <a href={user.website} id="profile-website">
                <p>{user.website}</p>
              </a>
              <div id="profcard-divider1"></div>
              </div>
              <div id="profile-aboutme">
              <h1 id="about-me__title">Bio</h1>
              <p id="profile-bio">
                {user.bio}
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="profilepage-display profile-content">
          <div className="filler-1">
            <button id="prof-settings">Settings</button>
          </div>
          <div id="profile-display__buttons">
          <button id="profile-commissions__button-active" onClick={commClickHandler}>Commissions</button>
          <button id="profile-requests__button"  onClick={reqClickHandler}>Requests</button>
          </div>
          <div className="profilepage-display profile-content__divider"></div>
          <div className="profilepage-display profile-content__display">
              {!displayReqs && userCommissions && userCommissions.commissions.map((comms, idx) => (
                <CommissionCards authenticated={authenticated} comms={comms} key={idx}/>
              ))
              }
              {displayReqs && requestInfo.length < 1 ?
                <div id="no-req__display">
                  <h1>No Requests</h1>
                </div>
                :
              
                displayReqs && requestInfo && requestInfo.map((info, key) => (
                <RequestCards info={info} key={key} />
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
            <div className="profilepage-display profile-info__profilecard-userinfo">
              <div className="profilepage-display profile-info__profilecard">
              <div id="userinfo">
                <div className="profilepage-display profile-info__profilecard" id="profile-image__container">
                  <div id="profile-image__container-div">
                  <img src={otherProfPic}></img>
                  </div>
                </div>
              <h1 id="profile-username">
                {otherUserName}
              </h1>
              <h1 id="profile-location">
                {otherLocation}
              </h1>
               <a href={otherWebsite} id="profile-website">
                <p>{otherWebsite}</p>
              </a>
              <div id="profcard-divider1"></div>
              </div>
              <div id="profile-aboutme">
              <h1 id="about-me__title">Bio</h1>
              <p id="profile-bio">
                {otherBio}
              </p>
              </div>
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