import React from "react";
import OrderList from "../../components/Orders/OrderList";
import OrderListDetail from "../../components/Orders/OrderListDetail";

const index = () => {
  return (
    <div className="flex container mx-auto flex-col">
      <div className="text-[50px] text-center my-6 text-[#2c2c2c] font-[500]">
        Orders
      </div>
    <div className="flex  justify-center h-screen ">
    <OrderList />
      <OrderListDetail />
    </div>
    </div>
  );
};

export default index;
