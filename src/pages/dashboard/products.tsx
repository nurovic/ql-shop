import React from "react";
import { useQuery } from "@apollo/client";
import { GET_OWN_PRODUCTS } from "../../graphQl/Query/users";
import DashboardLayout from "@/Layouts/Dashboard";
import OwnProductListIem from "../../components/product/OwnProductListIem";
import {ProductType} from '../../helpers/types'
const products = () => {
  const { error, loading, data } = useQuery(GET_OWN_PRODUCTS);

  return (
    <div className="container mx-auto mt-4 min-h-screen">
      <div className="flex justify-between flex-wrap">
        {data?.ownProducts?.map((product: ProductType) => {
          return <OwnProductListIem product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

products.getLayout = DashboardLayout;

export default products;
