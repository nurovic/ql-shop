import React, {ReactNode} from 'react'
import Navbar from '../components/Navbar'
import LoginModal from '@/components/Modals/LoginModal';
import RegisterModal from '@/components/Modals/RegisterModal';
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <Navbar />
        <LoginModal />
        <RegisterModal />
        <main>{children}</main>
    </div>
  )
}

export default Layout