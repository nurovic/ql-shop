import React from "react";
import Image from "next/image";

const SearchList = ({ items }) => {
  return (
    <div className="h-[75px] flex  mb-8 rounded-xl border-b-2 w-full ">
      <Image
        src="/images/product.jpg"
        width={70}
        height={70}
        className="object-cover rounded-xl mb-2"
        alt="Picture of the author"
      />
      <div className="text-[24px] ml-8">{items.name} </div>
    </div>
  );
};

export default SearchList;
