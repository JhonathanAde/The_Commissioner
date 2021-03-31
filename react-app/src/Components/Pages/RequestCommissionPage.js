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
              <div className="reqcommform-imgdisplay reqimg-info">
                <h1>
                  {comData.commission.title}
                </h1>
              </div>
              <div className="reqcommform-imgdisplay reqimg-container">
                <img src={comData.commission.image_url}/>
              </div>
               <div className="reqcommform-imgdisplay reqimg-info">
                 <div className="reqcommform-imgdisplay reqimg-userprice">
                <h1>
                  {`${comData.commission.user.username}`}
                </h1>
                <h1 className="req-price">
                  {`$${comData.commission.price}`}
                </h1>
                 </div>
                <p>
                  {`${comData.commission.description}`}
                </p>
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