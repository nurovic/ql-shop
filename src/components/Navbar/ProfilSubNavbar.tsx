import Dashboard from "@/Layouts/Dashboard";
import React from "react";

const ProfilSubNavbar = () => {
  const navList = [
    { name: "Dashboard" },
    { name: "Favourite" },
    { name: "OrderCart" },
  ];
  return (
    <div className="bg-mainColor border-2 border-gray-200 px-12 rounded-xl">
      {navList?.map((list, index) => (
        <div key={index}>
          <div className="pt-2 text-white"> {list.name} </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilSubNavbar;
