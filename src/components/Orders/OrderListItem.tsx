import React, {useState} from "react";
import Image from "next/image";
import { ProductType } from "../../helpers/types";

const OrderListItem = ({ item }: {item: {product: ProductType}}) => {

  return (
    <div className="flex flex-col mb-4 bg-gray-50 rounded-2xl">
      <div className="pl-4">
        Satıcı: {item?.product?.user?.name.toUpperCase()}
      </div>
      <div className="h-[2px] w-56 bg-gray-400 my-2 "></div>
    <div className="flex w-full pl-4">
    <Image
        src={"/images/product.jpg"}
        width={150}
        height={150}
        className="object-cover rounded-xl"
        alt="Picture of the author"
      />
      <div className="flex flex-col justify-between ml-8 text-[20px] font-[500] ">
        <div>
        {item.product.productName}
        </div>
        <div className="flex w-[650px] justify-between">
          <div className="flex w-[100px] justify-between border-2 rounded-2xl px-2">
          <Image
          src={"/minus.svg"}
          width={25}
          height={25}
          className="object-cover rounded-xl"
          alt="Picture of the author"
        />
          <div>co</div>
          <Image
          src={"/plus.svg"}
          width={25}
          height={25}
          className="object-cover rounded-xl"
          alt="Picture of the author"
        />
          </div>
          <div> {item.product.price.toLocaleString('TR-tr')} ₺</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderListItem;
