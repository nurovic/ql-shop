import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import sliceLoginModal from "@/store/LoginModalSlice";
import OrderCart from "@/components/Modals/OrderCart";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const loginModal = sliceLoginModal();
  return (
    <div>
      <div className="fixed w-full inset-0">
      <Navbar  />
      </div>
      {loginModal.isOpen ? <LoginModal /> : false}
      {/* <OrderCart /> */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
