import React, {useState, useEffect} from 'react'
import { useParams, useHistory, useLocation } from "react-router-dom"
import { getCommissionsById } from '../../services/commission'
import { getRequestsById } from '../../services/request'
import Modal from '../Modal/Modal'
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

  var buttons
  var visitor

  const closeIconFile = require('./close-icon.png');

  const closeIcon = new Image();
  closeIcon.src = "https://commissioner-icons.s3.amazonaws.com/close-icon.png"

  // console.log(closeIconFile);
 
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
  const [isVisitor, setVisitor] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [isUserInfo, setIsUserInfo] = useState(true);
  const [isProfileImage, setIsProfileImage] = useState(false);
  const [userInfoId, setUserInfoId] = useState('settings-user_info-active')
  const [profImgId, setProfImgId] = useState('settings-profile_image')
  const [review, setReviews] = useState(null);
  const [reviewLength, setReviewLength] = useState(0);
  const {userId} = useParams()
  const {pathname} = useLocation();
  const history = useHistory();

  const button_wrapper_styles = {
    position: 'relative',
    zIndex: 1
  }


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


  const [currentUsername, setCurrentUsername] = useState(user.username);
  const [currentWebsite, setCurrentWebsite] = useState(user.website);
  const [currentBio, setCurrentBio] = useState(user.bio);
  const [currentProfilepic, setCurrentProfilepic] = useState(user.profile_pic);
  const [currentFirstName, setCurrentFirstName] = useState(user.first_name);
  const [currentLastName, setCurrentLastName] = useState(user.last_name);

  const userInfoBtn = document.getElementById("settings-user_info-active")
  const profImgBtn = document.getElementById("settings-profile_image")


  // console.log(userInfoBtn);

  const checkLocation = () => {
    if(pathname === `/${user.username}/profile`){
      if(!authenticated){
        visitor = true;
        console.log('not authenticated and redirected to other path', 'got here!')
      }
      else {
        visitor = false;
        console.log('authenticated and user profile path', 'got here!')
      }
    }
    
    else if(pathname === `/profile/${userId}`){
      if(!authenticated){
        visitor = true;
      }
      if(authenticated){
        if(user.id.toString() === userId){
          history.push(`/${user.username}/profile`);
          console.log('Got redirected to profile path!')
        }
        else {
          visitor = true;
        }
      }
    }
  }
    

  checkLocation();
  
  

  const reqClickHandler = () => {
    setDisplayReqs(true);
      buttons = 2;
      reqButton.id = "profile-requests__button-active";
      if(buttons !== 1){
      commButton.id = "profile-commissions__button";
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

  const displayProfImgSettings = (e) => {
    e.preventDefault()
    if(isUserInfo){
      setIsUserInfo(false)
    }
    setUserInfoId('settings-user_info')
    setProfImgId('settings-profile_image-active')
    setIsProfileImage(true);
  }

  const displayUserInfo = (e) => {
    e.preventDefault();
    if(isProfileImage){
      setIsProfileImage(false);
    }
    setProfImgId('settings-profile_image')
    setUserInfoId('settings-user_info-active')
    setIsUserInfo(true);
  }


  const setUsername = (e) => {
    setCurrentUsername(e.target.value)
  }

  const setWebsite = (e) => {
    setCurrentWebsite(e.target.value)
  }

  const setBio = (e) => {
    setCurrentBio(e.target.value)
  }



  return (
    <>
    { !visitor &&

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
                <p>Website</p>
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
            <button id="prof-settings" onClick={() => setIsOpen(true)}>Settings</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} title={"Settings"} closeIcon={closeIcon}>
              
              <div className="profilepage settings-window">
                <div>
                    <div className="settings-window settings-tab">
                      <button id={userInfoId} onClick={displayUserInfo}>User Info</button>
                      <button id={profImgId} onClick={displayProfImgSettings}>Profile Image</button>
                      <div className="settings-window settings-tab__divider"/>
                    </div>
                  { isUserInfo &&
                  <>
                    <div className="settings-window settings-forms">
                      <form className="settings-forms settings-name_form">
                        <div className="settings-forms settings-name__form-wrapper">
                          <div id="first-name_wrapper">
                            <label id="first-name__label">First Name</label>
                            <input id="first-name__input"value={currentFirstName}></input>
                          </div>
                          <div id="last-name_wrapper">
                            <label id="last-name__label">Last Name</label>
                            <input id="last-name__input" value={currentLastName}></input>
                          </div>
                        </div>
                      </form>
                      <form className="settings-forms settings-username__form">
                        <div className="settings-forms settings-username__form-wrapper">
                          <label id="settings-username__label">Username</label>
                          <input id="settings-username__input" value={currentUsername} onChange={setUsername}></input>
                        </div>
                      </form>
                      <form className="settings-forms settings-website__form">
                        <div className="settings-forms settings-website__form-wrapper">
                          <label id="settings-website__label">Website</label>
                          <input id="settings-website__input" value={currentWebsite} onChange={setWebsite}></input>
                        </div>
                      </form>
                      <form className="settings-forms settings-bio__form">
                        <div className="settings-forms settings-bio__form-wrapper">
                          <label id="settings-bio__label">Bio</label>
                          <textarea id="settings-bio__textarea" value={currentBio} onChange={setBio}/>
                        </div>
                      </form>
                    </div>
                    <div className="settings-window settings-buttons">
                    </div>
                    </>
                  }
                      <button id="settings-save__button">Save</button>
                  </div>
                </div>
            </Modal>
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
}
  { visitor &&
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
                <p>Website</p>
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
          <div className="filler-1__otheruser"></div>
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