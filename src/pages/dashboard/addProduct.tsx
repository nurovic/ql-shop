import React, { useState } from "react";
import DashboardLayout from "@/Layouts/Dashboard";
const addProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState("");
  const [price, setPrice] =  useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productName);
  };
  return (
    <div>
      <form 
      className="flex flex-col"
      onSubmit={handleSubmit}>
        <label htmlFor="title"> Product Name : 
          <input
            type="text"
            id="title"
            value={productName}
            className="ml-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label htmlFor="description">
          <input
            type="text"
            id="description"
            value={description}
            className=" px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="count">
          <input
            type="text"
            id="count"
            value={count}
            className=" px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

            onChange={(e) => setCount(e.target.value)}
          />
        </label>
        <label htmlFor="price">
          <input
            type="text"
            id="price"
            value={price}
            className=" px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button 
                className="px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"

        type="submit">Send</button>
      </form>
    </div>
  );
};
addProduct.getLayout = DashboardLayout;

export default addProduct;
