import React, { useEffect } from "react";
import ImageSlide from "../../components/product/ImageSlide";
import ProductInfo from "../../components/product/ProductInfo";
import OrderCart from "../../components/product/OrderCart";
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_ID } from '../../graphQl/Query/product/id'
import { useRouter } from "next/router";

const index = () => {

  const productId = useRouter();
  const id = productId.query.id
 

  const getProductId = () => {
    const {data, loading, error} = useQuery(GET_PRODUCT_ID,{
      variables: {id:"643ba264e01526949ae2ec5c"}
    })
    console.log(data, loading, error)
  }
  getProductId()
  return (
    <div className="container mx-auto ">
      <div className="flex mt-4 h-[70vh] ">
        <ImageSlide />
        <ProductInfo />
        <OrderCart />
      </div>
    </div>
  );
};

export default index;
