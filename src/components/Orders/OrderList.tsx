import React from "react";
import OrderListItem from "./OrderListItem";
import { ProductType } from "../../helpers/types";

const OrderList = ({ orderCardList }: { orderCardList: ProductType[] }) => {
  return (
    <div className="w-[950px] overflow-auto h-[53%] border-[2px] rounded-[15px] px-4 pt-4">
      {orderCardList?.map((item: any) => {
        return <OrderListItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default OrderList;
