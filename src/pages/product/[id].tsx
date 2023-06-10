import React from "react";
import ImageSlide from "../../components/product/ImageSlide";
import ProductInfo from "../../components/product/ProductInfo";
import OrderCart from "../../components/product/OrderCart";
const index = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex mt-4 h-[70vh] ">
        <ImageSlide />
        <ProductInfo />
        <OrderCart />
      </div>
    </div>
  );
};

export default index;
