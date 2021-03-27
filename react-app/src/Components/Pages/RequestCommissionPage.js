import React, {useState, useEffect} from "react";
import RequestForm from "../Forms/RequestForm";
import {useParams} from "react-router-dom"
import { getACommission } from "../services/commission";

import './RequestCommissionPage.css'

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
    <div className="requestcomm-page">
      <div className="requestcomm-page reqcommcontent-wrapper">
        { comData &&
          <div className="requestcomm-page reqcommform-container">
            <section className="requestcomm-page reqcommform-imgdisplay">
              <div>

              </div>
            </section>
            <section className="requestcomm-page reqcommform-component">
              <RequestForm currentUser={user} commissionId={commissionId} commission={comData.commission}/>
            </section>
          </div>
        }
      </div>
    </div>
  )
}

export default RequestCommissionPage;