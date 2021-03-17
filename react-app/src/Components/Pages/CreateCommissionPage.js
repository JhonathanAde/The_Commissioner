import React from 'react';
import CommissionForm from '../Forms/CommissionForm';

const CreateCommissionPage = ({authenticated, user}) => {
  return (
    <div className="commission-page">
      <div className="commission-page commcontent-wrapper">
        <div className="commission-page commform-container">
          <div className="commission-page commform-imgdisplay">
            <div className="commission-page comm-header">
              <h1>Create A Commission</h1>
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