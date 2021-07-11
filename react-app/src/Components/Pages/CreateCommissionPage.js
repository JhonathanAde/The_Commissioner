import React from 'react';
import CommissionForm from '../Forms/CommissionForm';
import '../Forms/CSS/commission-page.css'

const CreateCommissionPage = ({authenticated, user}) => {
  return (
    <div className="commission-page">
      <div className="commission-page commcontent-wrapper">
        <div className="commission-page commform-container">
          <div className="commission-page commform-imgdisplay">
            <div className="commission-page commform-imgdisplay__content">
              <h5 id="commission-header">Create A Commission</h5>
              <div className="commform-imgdisplay commform-image__container">
                <div id="commform__image">
                  <img></img>
                </div>
              </div>
            </div>
          </div>
          <div className="commission-page commform-component">
            <CommissionForm authenticated={authenticated} user={user}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCommissionPage;