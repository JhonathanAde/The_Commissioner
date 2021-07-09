import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getACommission} from "../../services/commission";
import { createRating, getRatingsByCommissionId } from "../../services/ratings";
import ProductCard from "./ProductCard";

const ProductPage = ({user, authenticated}) => {

  //--- State ---//
  const [commissionData, setCommissionData] = useState(null)
  const [reviewData, setReview] = useState(null);

  //--- User Info ---//
  const {commissionId} = useParams()

  //--- Fetch Call ---//
  useEffect(() => {
    (async () => {
      const product = await getACommission(commissionId);
      const review = await getRatingsByCommissionId(commissionId);
      setCommissionData(product)
      setReview(review);
    })()
  }, [commissionId])
  
  return (
    <>
      {commissionData && reviewData &&
      <>
        <ProductCard commission={commissionData.commission} currentUser={user} authenticated={authenticated} commissionId={commissionId}/>
      </>
      }
    </>
  )
}

export default ProductPage;