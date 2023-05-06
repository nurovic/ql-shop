import React from "react";
import sliceLoginModal from '@/store/LoginModalSlice'
import sliceRegisterModal from '@/store/RegisterModalSlice'

const index = () => {
    const loginModal = sliceLoginModal();
    const registerModal = sliceRegisterModal();
    return (
    <div className="border-b-2 bg-mainColor">
      <div className="container mx-auto bg-main-color flex justify-between h-12 items-center text-white">
        <div>Logo</div>
        <div className="flex">
          <div>ürünler</div>
          <div>ARA</div>
        </div>
        <div className="flex">
          <button
          onClick={loginModal.onOpen}
          className="mr-2">Login</button>
          <button
          onClick={registerModal.onOpen}
          >Register</button>
        </div>
      </div>
    </div>
  );
};

export default index;
