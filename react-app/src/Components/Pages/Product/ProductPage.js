import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getACommission} from "../../services/commission";
import ProductCard from "./ProductCard";

const ProductPage = () => {

  //--- State ---//
  const [commissionData, setCommissionData] = useState(null)

  //--- User Info ---//
  const {commissionId} = useParams()

  //--- Fetch Call ---//
  useEffect(() => {
    (async () => {
      const product = await getACommission(commissionId)
      setCommissionData(product)
    })()
  }, [commissionId])
  
  return (
    <>
      {commissionData &&
      <>
        <ProductCard commission={commissionData.commission}/>
      </>
      }
    </>
  )
}

export default ProductPage;