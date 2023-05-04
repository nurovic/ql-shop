import React from "react";

const index = () => {
  return (
    <div className="border-b-2 bg-mainColor">
      <div className="container mx-auto bg-main-color flex justify-between h-12 items-center text-white">
        <div>Logo</div>
        <div className="flex">
          <div>ürünler</div>
          <div>ARA</div>
        </div>
        <div className="flex">
          <div className="mr-2">Login</div>
          <div>Register</div>
        </div>
      </div>
    </div>
  );
};

export default index;
