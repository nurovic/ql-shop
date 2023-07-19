import React from "react";
import Image from "next/image";

const Reviews = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1  gap-2 mt-12 mb-12">
      {reviews?.toReversed().map((review) => {
        return (
          <div 
          key={review._id}
          className="border rounded-xl pb-4 flex mb-6 min-h-32">
            <div className="flex mr-4 mt-4 w-32 justify-center border-r-2">
              <Image
                src="/images/profil.jpg"
                width={200}
                height={200}
                className="h-12 w-12 object-cover rounded-full"
                alt="Picture of the author"
              />
            </div>
            <div className="mt-4 w-full">
              <div className="font-extrabold"> {review?.userId?.name} </div>
              <div className="">
              {review?.comment} 
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
