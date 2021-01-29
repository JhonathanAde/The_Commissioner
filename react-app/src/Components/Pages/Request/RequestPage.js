import React, {useEffect, useState} from 'react';
import { getRequestsById } from '../../services/request';
import RequestCards from './RequestCards';

const ReqeustsPage = ({user}) => {

  const {id} = user
  const [requestInfo, setRequestInfo] = useState('')

  useEffect(() => {
    (async () => {
      const requests = await getRequestsById(id)
      setRequestInfo(requests)
    })()
  }, [])

  // console.log(requestInfo)

  return (
    <div>
      {requestInfo && requestInfo.requests.map((info, idx) => {
          <RequestCards info={info} key={idx} />
      })}
      {/* <RequestCards/> */}
    </div>
  )
}

export default ReqeustsPage;