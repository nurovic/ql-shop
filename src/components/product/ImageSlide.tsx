import React from "react";
import Image from "next/image";
const ImageSlide = () => {
  return (
    <div className="w-2/5 h-full flex flex-col items-center">
      <Image
        src="/images/product.jpg"
        width={500}
        height={500}
        className="h-96"
        alt="Picture of the author"
      />
      <div className="flex mt-2  overflow-auto">
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
