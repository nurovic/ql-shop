import React from 'react'
import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
            <Image
        src={"/loading.svg"}
        width={150}
        height={150}
        className="object-cover rounded-xl"
        alt=""
      />
    </div>
  )
}

export default Loading