import React, {ReactNode} from 'react'
import Navbar from '../components/Navbar'
import LoginModal from '@/components/Modals/LoginModal';
import RegisterModal from '@/components/Modals/RegisterModal';
import sliceLoginModal from "@/store/LoginModalSlice";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({children}: LayoutProps) => {
  const loginModal = sliceLoginModal();
  return (
    <div>
        <Navbar />
        {loginModal.isOpen ? <LoginModal />:false}
        <main>{children}</main>
    </div>
  )
}

export default Layout