import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";

const ListIem = ({ product }) => {
  const handleAddToFavourite = () => {
    console.log("Add To Favourite", product._id);
  };
  return (
    <div className="rounded-lg border border-gray-200 mr-6 mb-8">
      <div>
        <Image
          src="/images/product.jpg"
          width={500}
          height={500}
          className="h-72 w-56 object-cover rounded-lg"
          alt="Picture of the author"
        />
      </div>
      <Link href={'/product/' + `${product._id}`} className="flex flex-col mt-2">
        <div className="pl-2">{product.productName}</div>
        <div className="pl-2 mb-2">{product.price.toLocaleString("en")} </div>
        <Button
          small
          label={"Add To Favourite"}
          onClick={(e) => {
            e.preventDefault();
            handleAddToFavourite();
          }}
        />
      </Link>
    </div>
  );
};

export default ListIem;
