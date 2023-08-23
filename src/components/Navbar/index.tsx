import React from "react";
import ProfilNav from "./ProfilNav";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import sliceProductSearchModal from "@/store/ProductSearchModalSlice";

import { GET_ME } from "../../graphQl/Query/users";
import sliceAuthModal from "@/store/AuthModalSlice";

const index: React.FC = () => {
  const authModal = sliceAuthModal();
  const searchModal = sliceProductSearchModal();

  const { error, loading, data } = useQuery(GET_ME);
  if (data) {
    authModal.auth.name = data?.getMe?.name;
  }
  // (data === undefined) ?? (authModal.auth.name =  '')
  return (
    <div className="border-b-2 bg-mainColor z-50">
      <div className="container mx-auto bg-main-color flex justify-between h-12 items-center text-white">
        <Link href="/">Logo</Link>
        <div className="flex w-72 justify-between">
          <Link href="/products">Products</Link>
          <div
          onClick={() => searchModal.onOpen()}
          >
            <Image
              src={"/search.svg"}
              width={25}
              height={25}
              className="object-cover rounded-xl cursor-pointer"
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex">
          <ProfilNav />
        </div>
      </div>
    </div>
  );
};

export default index;
