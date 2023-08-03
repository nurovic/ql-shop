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
            <div className="flex items-center">
              <div onClick={handleShowNavbar}>{authModal?.auth?.name}</div>
              <div className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
            <div className="absolute">
            </div>
              </div>
            </div>

            {viewNavbarModal.isOpen ? (
              <div className="absolute text-xl  mt-3 font-semibold text-black">
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
