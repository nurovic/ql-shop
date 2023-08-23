import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import sliceLoginModal from "@/store/LoginModalSlice";
import SearchModal from "@/components/Modals/SearchModal";
import sliceProductSearchModal from "@/store/ProductSearchModalSlice";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const searchModal = sliceProductSearchModal();
  const loginModal = sliceLoginModal();
  return (
    <div>
      <Navbar />

      {searchModal.isOpen ? <SearchModal /> : false}
      {loginModal.isOpen ? <LoginModal /> : false}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
