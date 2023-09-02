import React from "react";
import OrderListItem from "./OrderListItem";

const OrderList = ({ orderCardList }) => {
  console.log(orderCardList);
  return (
    <div className="w-[950px] overflow-auto h-[80%] border-[2px] rounded-[15px] px-4 pt-4">
      {orderCardList?.map((item: any) => {
        return <OrderListItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default OrderList;
