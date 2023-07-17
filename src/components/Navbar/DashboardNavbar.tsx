import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-56 items-center mr-4 border-r-4 bg">
      <Link className="my-4" href="/dashboard/profile">
        Profile
      </Link>
      <Link className="my-4" href="/dashboard/addProduct">
        Add Product
      </Link>
      <Link className="my-4" href="/dashboard/products">
        Products
      </Link>
    </div>
  );
};

export default Dashboard;
