import React, {useState, useEffect} from "react";
import RequestForm from "../Forms/RequestForm";
import {useParams} from "react-router-dom"
import { getACommission } from "../services/commission";

const RequestCommissionPage = ({user}) => {

  const {commissionId} = useParams()

  const [comData, setComData] = useState(null)

  console.log(commissionId)

  useEffect(() => {
    (async () => {
      const res = await getACommission(commissionId)
      setComData(res)
    })()
  }, [commissionId])

  console.log(comData)

  return (
    <>
    { comData &&
      <div>
        <RequestForm currentUser={user} commissionId={commissionId} commission={comData.commission}/>
      </div>
    }
    </>
  )
}

export default RequestCommissionPage;