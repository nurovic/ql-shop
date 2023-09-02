import React from "react";
import OrderList from "../../components/Orders/OrderList";
import OrderListDetail from "../../components/Orders/OrderListDetail";
import { GET_ORDER_CARD } from "../../graphQl/Query/orderCard";
import { useQuery } from "@apollo/client";
import Loading from '@/components/Loading'

const index = () => {
  const { error, loading, data, refetch } = useQuery(GET_ORDER_CARD);

  if (loading) return <Loading />;

  return (
    <div className="flex container mx-auto flex-col">
      <div className="text-[50px] text-center my-6 text-[#2c2c2c] font-[500]">
        Orders
      </div>
      <div className="flex  justify-center h-screen ">
        <OrderList orderCardList={data?.getOrderCard?.product} />
        <OrderListDetail 
        amount={data?.getOrderCard?.amount} 
        piece={data?.getOrderCard?.piece}
        />
      </div>
    </div>
  );
};

export default index;
