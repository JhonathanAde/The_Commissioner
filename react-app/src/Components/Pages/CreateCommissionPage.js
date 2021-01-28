import React from 'react';
import CommissionForm from '../Forms/CommissionForm';

const CreateCommissionPage = ({authenticated, user}) => {
  return (
    <>
    <div>
      <h1>Create A Commission</h1>
    </div>
    <div className="commform-container">
    <div className="commform-display">
    </div>
    <div className="commform-component">
      <CommissionForm authenticated={authenticated} user={user}/>
    </div>
    </div>
    </>
  )
}

export default CreateCommissionPage;