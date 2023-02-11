import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import "./profilepage.css";



const Profilepage = ({authenticated, user}) => {
  // const [artistId, setId] = useState(0);
  // const [isArtist, setArtist] = useState(false);
  const [artistInfo, setArtistInfo] = useState({});
  const [commissions, setCommissions] = useState([]);
  // const [current, setCurrent] = useState("user");
  let artistId = useParams().userId;
  let isUser = useParams().username;
  let current = "user";
  let currentId = user.id;
  // console.log(artistId);

  const checkUser = () => {
    if(artistId !== undefined){
      current = "visitor"
      currentId = artistId;
    }  else {
      current = "user";
      currentId = user.id;
    }
  }

  checkUser();

  
  useEffect(() => {
    const getArtistInfo = async (id) => {
        const artists = await fetch(`/api/users/user/${id}`)
        const json = await artists.json();
        setArtistInfo(json);
          // console.log(json)
        
      }
  
      const getComms = async (id) => {
        const result = await fetch(`/api/commissions/${id}/commission`);
        const json = await result.json();
        setCommissions(json.commissions);
      }
    

      getComms(currentId);
      getArtistInfo(currentId);

    console.log(current);
    
  }, [current]);

  // console.log(info);
  // console.log(typeof info.userId);
  

  return (
    <>
      {authenticated && current === "user" &&

        <div className='profilepage-user-main' data-page>
          
          <div className='profilepage-user-content'>


          </div>
        </div>
      }

      { current === "visitor" &&
        <div className='profilepage-visitor-main' data-page>
          <div className='profilepage-visitor-banner'></div>
          
          <div className='profilepage-visitor-content'>
              <div className='profilepage-visitor-artistcard'>
                <div className='artist-info'>
                  <picture>
                    <img src={artistInfo.profilePic}></img>
                  </picture>

                  <h1>{artistInfo.username}</h1>
                  <p>{artistInfo.bio}</p>
                  <a href={artistInfo.website}>Website</a>
                  <h3>{artistInfo.location}</h3>
                </div>
                <div className='profilepage-artistcard-btns'>
                  <button>Follow</button>
                  <button>Message</button>
                </div>
              </div>

              <div className='profilepage-visitor-body'>
                <div className='visitor-body-left'></div>
                <div className='visitor-body-right'>
                  <div className='visitor-action-bar'>
                    <button className='actionbar-btn'>Commissions</button>
                    <button className='actionbar-btn'>Gallery</button>
                  </div>
                  <div className='actionbar-display'>
                    {commissions && commissions.map((com, key) => {
                      let {title, image_url, user} = com

                      return(
                        <div key={key}>
                          <div className="profile-comm-cards">
                            <div className='profile-comm-card-wrapper'>
                              <div className='profile-comm-card-img'>
                                <picture>
                                  <img src={image_url} />
                                </picture>
                                <h1>{title}</h1>
                              </div>
                              <div className='profile-comm-card-info'>
                                <h3>{user.username}</h3>
                              </div>
                            </div>
                          </div>
                          </div>
                      )
                  })}
                  </div>
                </div>
              </div>

          </div>
        </div>
      }
    </>
  )
}

export default Profilepage;