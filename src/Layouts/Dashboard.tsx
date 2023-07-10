import React, { ReactNode } from "react";
import DashboaradNavbar from "../components/Navbar/DashboardNavbar";
interface LayoutProps {
  children: ReactNode;
}
const Dashboard = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto flex">
      <DashboaradNavbar />
      <div className="h-screen w-screen overflow-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
