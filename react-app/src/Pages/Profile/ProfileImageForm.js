import React, {useState, useRef, useEffect} from 'react';
import { uploadProfilePic, editProfilePic } from '../../services/auth';

const ProfileImageForm = ({setImgFile, imgFile, imgName, setImgName, setProfileImg, profileImg, user}) => {

  const [uploadErrors, setUploadErrors] = useState([]);
  const [updatePicErrors, setUpdatePicErrors] = useState([]);
  
  let inputEl = useRef(null)


  useEffect(() => {
    let proImgFile = document.getElementById("profileimg__input")
    let proImgName = document.getElementById("profileimg__input")
    setImgFile(proImgFile.files.item(0))
  }, [])


  
  
  const updateFile = (e) => {
    e.preventDefault()
    setImgFile(e.target.files.item(0))
    setImgName(e.target.files.item(0).name);
  }

   const uploadProfileImg = async (e) => {
    e.preventDefault();
    const uploadForm = new FormData();
    uploadForm.append('file_path', imgFile)
    const uploadImg = await uploadProfilePic(uploadForm);
    if(uploadImg.errors){
      setUploadErrors(uploadImg.errors)
    }
    else {
      setProfileImg(`https://commissioner-profilepics.s3.amazonaws.com/${imgName}`)
    }
  }

  const updateProfilePic = async (e) => {
    e.preventDefault();
    const proPicData = new FormData();
    proPicData.append('profile_pic', profileImg)
    const newProfilePic = await editProfilePic(proPicData, user.id)
    if(newProfilePic.errors){
      setUploadErrors(newProfilePic.errors);
    }
    else {
      window.location.reload()
    }
  }

  return (
    <div>
      <form id="profileimg-form" onSubmit={updateProfilePic}>
        <div className="profileimg-form__container">
          <label id="profileimg__label" htmlFor="profileimg__upload">Profile Picture</label>
          <div>
            <input id="profileimg__input" name="profileimg__upload" type="file" accept=".jpeg, .jpg, .png" onChange={updateFile}></input>
            <button id="profileimg__upload-button" onClick={uploadProfileImg}>Upload</button>
          </div>
        </div>
        <button id="profileimg__save" form="profileimg-form" type="submit">Save</button>
      </form>
    </div>
  )
}

export default ProfileImageForm;