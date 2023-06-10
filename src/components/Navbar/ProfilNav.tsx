import React from "react";
import sliceLoginModal from "@/store/LoginModalSlice";
import sliceRegisterModal from "@/store/RegisterModalSlice";
import sliceAuthModal from "@/store/AuthModalSlice";
import LoginModal from '@/components/Modals/LoginModal';
import RegisterModal from '@/components/Modals/RegisterModal';

const ProfilNav = () => {
  const loginModal = sliceLoginModal();
  const registerModal = sliceRegisterModal();
  const authModal = sliceAuthModal();

  return (
    <div>
      {authModal?.auth.name === "" ? 
        <div>
          <button onClick={loginModal.onOpen} className="mr-2">
            Login
          </button>
          <button onClick={registerModal.onOpen}>Register</button>
        </div>
       : (
        <button className="font-semibold cursor-pointer">
          {authModal?.auth?.name}
        </button>
      )}

    </div>
  );
};

export default ProfilNav;
