import React from "react";
import Image from "next/image";
const ImageSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Image
        src="/bs/product.jpg"
        width={500}
        height={500}
        className="h-full w-4/5 object-cover"
        alt="Picture of the author"
      />
      <div className="flex mt-2 h-32 overflow-auto">
        <Image
          src="/images/product.jpg"
          className="object-cover	h-24 w-24 mr-2"
          width={180}
          height={180}
          alt="Picture of the author"
        />
        <Image
          src="/images/product.jpg"
          className="object-cover	h-24 w-24 mr-2"
          width={180}
          height={180}
          alt="Picture of the author"
        />
        <Image
          src="/images/product.jpg"
          className="object-cover	h-24 w-24 mr-2"
          width={180}
          height={180}
          alt="Picture of the author"
        />
        <Image
          src="/images/product.jpg"
          className="object-cover	h-24 w-24 mr-2"
          width={180}
          height={180}
          alt="Picture of the author"
        />
        <Image
          src="/images/product.jpg"
          className="object-cover	h-24 w-24 mr-2"
          width={180}
          height={180}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default ImageSlide;
