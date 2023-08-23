import React from "react";
import Button from "../Button";
const OrderListDetail = () => {
  const completeShopping = () => {
    return alert("complete Shopping")
  }
  return <div className="border-2 border-gray-100 rounded-[20px] p-[15px] w-[450px] h-[30%] ml-12">
    <div className="text-[30px] text-gray-400">Selected Products(2)</div>
    <div className="text-[40px] font-[500] mb-12"> 212,00 TL</div>
    <Button 
    onClick={completeShopping}
    label="Complete Shopping"
    />
  </div>;
};

export default OrderListDetail;
