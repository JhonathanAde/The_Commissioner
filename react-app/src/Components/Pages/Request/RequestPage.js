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
    <div className="requestpage-maindiv">
      <h1 className="requestpage-header">Requests</h1>
      {requestInfo && requestInfo.requests.map((info, idx) => {
          return <RequestCards info={info} key={idx} />
      })}
      {/* <RequestCards/> */}
    </div>
  )
}

export default ReqeustsPage;