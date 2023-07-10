import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-56 items-center mt-16 mr-4">
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
