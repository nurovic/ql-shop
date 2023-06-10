import React from "react";
import Button from "../Button";
const OrderCart = () => {
  return (
    <div className="flex flex-col items-center w-1/3 border-2 rounded-xl p-2">
      <div className="font-bold text-xl flex flex-start w-full">120.00 TL</div>
      <div className="mt-4">
        <Button
          disabled={"disabled"}
          label={"Add To Order"}
          onClick={"handleSecondaryAction"}
          wfull={"w-64"}
        />
      </div>
      <div className="mt-4">
        <Button
          disabled={"disabled"}
          label={"Add To Favorite"}
          onClick={"handleSecondaryAction"}
          wfull={"w-64"}
          outline
        />
      </div>
    
    </div>
  );
};

export default OrderCart;
