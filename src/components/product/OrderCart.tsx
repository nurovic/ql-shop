import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";

const OrderCart = () => {
  const route = useRouter();

  function handleToOrder() {
    console.log(route.query.id);
  }

  function handleAddToFavourite() {
    console.log(route.query.id);
  }
  return (
    <div className="flex flex-col items-center w-1/3 border-2 rounded-xl p-2">
      <div className="font-bold text-xl flex flex-start w-full">120.00 TL</div>
      <div className="mt-4">
        <Button label={"Add To Order"} onClick={handleToOrder} wfull={"w-64"} />
      </div>
      <div className="mt-4">
        <Button
          label={"Add To Favorite"}
          onClick={handleAddToFavourite}
          wfull={"w-64"}
          outline
        />
      </div>
    </div>
  );
};

export default OrderCart;
