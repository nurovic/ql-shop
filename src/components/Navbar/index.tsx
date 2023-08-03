import React from "react";
import ProfilNav from './ProfilNav'
import Link from 'next/link';
import { useQuery } from "@apollo/client";

import { GET_ME } from '../../graphQl/Query/users'
import sliceAuthModal from "@/store/AuthModalSlice";

const index : React.FC  = () => {
  const authModal = sliceAuthModal();

  const { error, loading, data } = useQuery(GET_ME);
  if(data)  {
    authModal.auth.name = data?.getMe?.name
  } 
  // (data === undefined) ?? (authModal.auth.name =  '')
  return (
    <div className="border-b-2 bg-mainColor z-50">
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
