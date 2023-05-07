import React from "react";
import ProfilNav from './ProfilNav'
import Link from 'next/link';


const index : React.FC  = () => {

  return (
    <div className="border-b-2 bg-mainColor">
      <div className="container mx-auto bg-main-color flex justify-between h-12 items-center text-white">
        <Link href="/">Logo</Link>
        <div className="flex">
          <Link href="/products">ürünler</Link>
          <div>ARA</div>
        </div>
        <div className="flex">
        <ProfilNav />
        </div>
      </div>
    </div>
  );
};

export default index;
