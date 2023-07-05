import React from "react";
import sliceLoginModal from "@/store/LoginModalSlice";
import sliceRegisterModal from "@/store/RegisterModalSlice";
import sliceAuthModal from "@/store/AuthModalSlice";
import sliceNavbar from "@/store/NavbarViewSlice";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import ProfilSubNavbar from "./ProfilSubNavbar";

const ProfilNav = () => {
  const loginModal = sliceLoginModal();
  const registerModal = sliceRegisterModal();
  const authModal = sliceAuthModal();
  const viewNavbarModal = sliceNavbar();
  const handleShowNavbar = () => {
    viewNavbarModal.toggle();
  };

  return (
    <div>
      {authModal?.auth.name === "" ? (
        <div>
          <button onClick={loginModal.onOpen} className="mr-2">
            Login
          </button>
          <button onClick={registerModal.onOpen}>Register</button>
        </div>
      ) : (
        <>
          <button className="font-semibold cursor-pointer">
            <div onClick={handleShowNavbar}>{authModal?.auth?.name}</div>

            {viewNavbarModal.isOpen ? (
              <div className="absolute text-xl right-24 mt-3 font-semibold text-black">
                <ProfilSubNavbar />
              </div>
            ) : null}
          </button>
        </>
      )}
    </div>
  );
};

export default ProfilNav;
