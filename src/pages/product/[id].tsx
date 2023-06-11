import React, { useEffect } from "react";
import ImageSlide from "../../components/product/ImageSlide";
import ProductInfo from "../../components/product/ProductInfo";
import OrderCart from "../../components/product/OrderCart";
import { useQuery} from '@apollo/client';
import { GET_PRODUCT_ID} from '../../graphQl/Query/product'
import { useRouter } from "next/router";

const index = () => {

  const router = useRouter();
  const {id} = router.query


  const { error, loading, data } = useQuery(GET_PRODUCT_ID, {
    variables: {
       id
    },
  });

  return (
    <div className="container mx-auto ">
      <div className="flex mt-4 h-[70vh] ">
        <ImageSlide />
        <ProductInfo
        item={data?.productById}  
        />
        <OrderCart />
      </div>
    </div>
  );
};

export default index;
