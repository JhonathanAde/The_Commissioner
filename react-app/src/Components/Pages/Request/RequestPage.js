import React, {useEffect, useState} from 'react';
import { getRequestsById } from '../../services/request';
import RequestCards from './RequestCards';

import "./RequestPage.css"

const ReqeustsPage = ({user}) => {

  const {id} = user
  const [requestInfo, setRequestInfo] = useState('')

  useEffect(() => {
    (async () => {
      const requests = await getRequestsById(id)
      setRequestInfo(requests)
    })()
  }, [])

  console.log(requestInfo.requests)

  return (
    <div className="request-page">
      <div className="request-page request-display">
        <div className="request-page header">
        <h1>Requests</h1>
        </div>
        {requestInfo && requestInfo.requests.map((info, idx) => {
            return <RequestCards info={info} key={idx} />
        })}
      </div>
      
    </div>
  )
}

export default ReqeustsPage;