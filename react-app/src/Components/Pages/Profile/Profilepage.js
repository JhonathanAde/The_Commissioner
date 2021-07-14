import React, {useState, useEffect} from 'react'
import { useParams, useHistory, useLocation } from "react-router-dom"
import { getCommissionsById } from '../../services/commission'
import { getRequestsById } from '../../services/request'
import { editBasicInfo, editUserName, uploadProfilePic } from '../../services/auth'
import BasicInfoForm from './BasicInfoForm'
import UserNameForm from './UserNameForm'
import ProfileImageForm from './ProfileImageForm'
import Modal from '../Modal/Modal'
import CommissionCards from '../../Card/CommissionCards'
import RequestCards from '../Request/RequestCards'
import Rating from 'react-rating'

//CSS
import './CSS/profilepage.css'
import '../../Card/CommissionCards.css'
import Footer from '../../Footer/Footer'

const Profilepage = ({authenticated, user}) => {

  var buttons
  var visitor
  var settingsUpdated = false;
  var settingsMenu = 1

  const closeIconFile = require('./close-icon.png');
 
  const closeIcon = new Image();
  closeIcon.src = "https://commissioner-icons.s3.amazonaws.com/close-icon.png"
 
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
  const [isUserName, setIsUserName] = useState(false);
  const [userInfoId, setUserInfoId] = useState('settings-user_info-active')
  const [profImgId, setProfImgId] = useState('settings-profile_image')
  const [userNameId, setUserNameId] = useState('settings-user_name')
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
  }, [user.id])

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
  const [basicInfoErrors, setBasicInfoErrors] = useState([]);
  const [userNameErrors, setUserNameErrors] = useState([]);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [userNameUpdated, setUserNameUpdated] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [uploadErrors, setUploadErrors] = useState([]);
  const [imgName, setImgName] = useState("");
  const [profWidth, setProfWidth] = useState(0);
  const [profHeight, setProfHeight] = useState(0);
  const [otherWidth, setOtherWidth] = useState(0);
  const [otherHeight, setOtherHeight] = useState(0);
  const [otherPercentagePort, setOtherPercentPort] = useState(0);
  const [otherPercentageLan, setOtherPercentLan] = useState(0);
  
  const userInfoBtn = document.getElementById("settings-user_info-active")
  const profImgBtn = document.getElementById("settings-profile_image")
  let proImgName = document.getElementById("profileimg__input")

  const largerMeasurePort = 446.4;  
  const largerMeasureLan = 372;  

  // for Other Profile //
  const otherImgContainer = new Image();
  // var otherPercentagePort
  // var otherPercentageLan
  
  
  otherImgContainer.onload = function() {
    setOtherWidth(this.width)
    setOtherHeight(this.height)
  }
  
  otherImgContainer.src = otherProfPic;
  
  // -------------------------------//
  

  // ----- For User Profile -------//
  const imgContainer = new Image();
  
  imgContainer.onload = function(){
    setProfWidth(this.width);
    setProfHeight(this.height);
  }
  imgContainer.src = user.profile_pic;


  //---------------------------------------//
  
  const checkLocation = () => {
    if(pathname === `/${user.username}/profile`){
      if(!authenticated){
        visitor = true;
      }
      else {
        visitor = false;
      }
    }
    
    else if(pathname === `/profile/${userId}`){
      if(!authenticated){
        visitor = true;
      }
      if(authenticated){
        if(user.id.toString() === userId){
          history.push(`/${user.username}/profile`);
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
    if(isUserName){
      setIsUserName(false)
    }
    setUserInfoId('settings-user_info')
    setUserNameId('settings-user_name')
    setProfImgId('settings-profile_image-active')
    setIsProfileImage(true);
  }

  const displayUserInfo = (e) => {
    e.preventDefault();
    if(isProfileImage){
      setIsProfileImage(false);
    }
    if(isUserName){
      setIsUserName(false);
    }
    setUserNameId('settings-user_name')
    setProfImgId('settings-profile_image')
    setUserInfoId('settings-user_info-active')
    setIsUserInfo(true);
  }

  const displayUserName = (e) => {
    e.preventDefault();
    if(isUserInfo){
      setIsUserInfo(false);
    }
    if(isProfileImage){
      setIsProfileImage(false);
    }
    setUserNameId('settings-user_name-active')
    setUserInfoId('settings-user_info')
    setProfImgId('settings-profile_image')
    setIsUserName(true)
  }


  const setUsername = (e) => {
    setCurrentUsername(e.target.value);
  }

  const setFirstName = (e) => {
    setCurrentFirstName(e.target.value);
  }

  const setLastName = (e) => {
    setCurrentLastName(e.target.value);
  }

  const setWebsite = (e) => {
    setCurrentWebsite(e.target.value)
  }

  const setBio = (e) => {
    setCurrentBio(e.target.value)
  }

  const changeBasicInfo = async (e) => {
    e.preventDefault();
    const basicInfoData = new FormData();
    basicInfoData.append('username', currentUsername)
    basicInfoData.append('first_name', currentFirstName)
    basicInfoData.append('last_name', currentLastName)
    basicInfoData.append('website', currentWebsite)
    basicInfoData.append('bio', currentBio)
    const basicInfo = await editBasicInfo(basicInfoData, user.id);
  
    if(basicInfo.errors){
      setBasicInfoErrors(basicInfo.errors);
    }
    else {
      setUpdateSuccess(true);
      setTimeout(()=>{
        setUpdateSuccess(false);
      }, 5000)
    }
  }

  const changeUsername = async (e) => {
    e.preventDefault();
    const userNameData = new FormData()
    userNameData.append('username', currentUsername)
    const userName = await editUserName(userNameData, user.id)
    if(userName.errors){
      setUserNameErrors(userName.errors);
    }
    else {
      setUserNameUpdated(true);
      setTimeout(() => {
        setUserNameUpdated(false);
      }, 5000)
    }
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
                  { profWidth > profHeight &&
                        <img id="prof-pic__landscape" loading="eager" src={user.profile_pic}></img>
                  }
                    { profHeight > profWidth &&
                      <img id="prof-pic__portrait" loading="eager" src={user.profile_pic}
                      ></img>
                    }

                    {profWidth === profHeight &&
                      <img id="prof-pic__square" loading="eager" src={user.profile_pic} />
                    }


                    </div>
              </div>
              <h1 id="profile-username">
                {currentUsername}
              </h1>
              <h1 id="profile-location">
                {user.location}
              </h1>
              <a href={currentWebsite} id="profile-website">
                <p>Website</p>
              </a>
              <div id="profcard-divider1"></div>
              </div>
              <div id="profile-aboutme">
              <h1 id="about-me__title">Bio</h1>
              <p id="profile-bio">
                {currentBio}
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
                      <button id={userNameId} onClick={displayUserName}>Username</button>
                      <button id={profImgId} onClick={displayProfImgSettings}>Profile Image</button>
                      <div className="settings-window settings-tab__divider"/>
                    </div>
                  { isUserInfo &&
                    <>
                    <BasicInfoForm 
                      changeBasicInfo={changeBasicInfo}
                      updateSuccess={updateSuccess}
                      basicInfoErrors={basicInfoErrors}
                      currentFirstName={currentFirstName}
                      setFirstName={setFirstName}
                      currentLastName={currentLastName}
                      setLastName={setLastName}
                      currentWebsite={currentWebsite}
                      setWebsite={setWebsite}
                      currentBio={currentBio}
                      setBio={setBio}
                    />
                    <button id="basic-info__save" form="basicinfo-update__form">Save</button>
                    {/* <input id="basic-info__reset" form="basicinfo-update__form" type="reset"></input> */}
                    </>
                  }
                  { isUserName &&
                    <>
                      <UserNameForm 
                        changeUsername={changeUsername}
                        userNameErrors={userNameErrors}
                        currentUsername={currentUsername}
                        setUsername={setUsername}
                        userNameUpdated={userNameUpdated}
                      />
                      <button id="username_save" form="username-update__form">Save</button>
                    </>
                  }

                  {
                    isProfileImage &&
                    <div className="settings-page settings-profileimg">
                      <div className="settings-page settings-img__display">
                        <div className="settings-img__display img-container">
                          <div id="img-container__img">
                            <img src={profileImg}/>
                          </div>
                        </div>
                      </div>
                      <div className="settings-page setting-profileimg__form">
                        <ProfileImageForm 
                        setProfileImg={setProfileImg} 
                        profileImg={profileImg}
                        imgFile={imgFile} 
                        setImgFile={setImgFile} 
                        imgName={imgName}
                        setImgName={setImgName}
                        user={user}
                        />
                      </div>
                    </div>
                  }
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
                    { otherWidth > otherHeight &&
                      <img id="otherprof-pic__landscape" loading="lazy"  src={otherProfPic} width="375"></img>
                    }
                    {
                     otherHeight > otherWidth  &&
                      <img id="otherprof-pic__portrait" height="375" loading="lazy"  src={otherProfPic}></img>
                    }
                    {
                      otherWidth === otherHeight &&
                      <img id="otherprof-pic__square" loading="lazy" src={otherProfPic}></img>
                    }
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