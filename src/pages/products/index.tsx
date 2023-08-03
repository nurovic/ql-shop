import React, { useState } from "react";
import ListItem from "../../components/product/ListIem";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphQl/Query/product";
import { ProductType } from "../../helpers/types";

const index = () => {
  const { error, loading, data } = useQuery(GET_PRODUCTS);
  return (
    <div className="container mx-auto z-10 mt-4 min-h-screen">
      <div className="flex justify-between flex-wrap">
        {data?.products?.map((product: ProductType) => {
          return <ListItem product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default index;
