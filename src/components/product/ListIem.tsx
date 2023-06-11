import React from "react";
import Image from "next/image";
import Button from "../Button";
const ListIem = () => {
  const handleAddToFavourite = () => {
    console.log("Add To Favourite");
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
      <div className="flex flex-col mt-2">
        <div>Product Name</div>
        <div className="mb-2">Price</div>
        <Button
          small
          label={"Add To Favourite"}
          onClick={handleAddToFavourite}
        />
      </div>
    </div>
  );
};

export default ListIem;
