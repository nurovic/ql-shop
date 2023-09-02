import React from "react";
import Button from "../Button";

const OrderListDetail = ({amount, piece}) => {
  console.log(amount, piece)
  const completeShopping = () => {
    return alert("complete Shopping");
  };
  return (
    <div className="border-2 border-gray-100 rounded-[20px] p-[15px] w-[450px] h-[30%] ml-12">
      <div className="text-[30px] text-gray-400">Selected Products({piece})</div>
      <div className="text-[40px] font-[500] mb-12"> {amount?.toLocaleString('TR-tr')} ₺</div>
      <Button onClick={completeShopping} label="Complete Shopping" />
    </div>
  );
};

export default OrderListDetail;
