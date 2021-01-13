import React from 'react';
import CommissionForm from '../Forms/CommissionForm';

const CreateCommissionPage = ({authenticated, user}) => {
  return (
    <>
    <div>
      <h1>Create A Commission</h1>
    </div>
    <div>
      <CommissionForm authenticated={authenticated} user={user}/>
    </div>
    </>
  )
}

export default CreateCommissionPage;