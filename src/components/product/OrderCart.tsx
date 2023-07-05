import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";
type ProductByIdI = {
  count: number
  description:string
  price:number
  productName: string
  reviews: []
  user: string
  _id:string
}
type Item = {
  item : ProductByIdI
}
const OrderCart: React.FC<Item>  = ({ item }) => {
  const route = useRouter();

  function handleToOrder() {
    console.log(route.query.id);
  }

  function handleAddToFavourite() {
    console.log(route.query.id);
  }
  return (
    <div className="flex flex-col items-center w-1/3 border-2 rounded-xl p-2">
      <div className="w-1/3  flex flex-col mb-8 w-full items-start">
        <h1 className="font-extrabold text-xl"> {item?.productName} </h1>
        <h1 className="text-gray-600 font-semibold"> {item?.description} </h1>
        <h3>{item?.reviews.length} Reviews</h3>
      </div>
      <div className="font-bold text-xl flex flex-start w-full">{item?.price.toLocaleString('en')} $</div>
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
