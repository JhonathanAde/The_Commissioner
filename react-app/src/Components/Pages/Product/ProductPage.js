import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getACommission} from "../../services/commission";
import ProductCard from "./ProductCard";

const ProductPage = () => {

  const [commissionData, setCommissionData] = useState(null)

  const {commissionId} = useParams()

  console.log(commissionId)

  useEffect(() => {
    (async () => {
      const product = await getACommission(commissionId)
      setCommissionData(product)
    })()
  }, [commissionId])

  console.log(commissionData)
  

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