import React, { useState } from "react";
import DashboardLayout from "@/Layouts/Dashboard";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const addProduct = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      productName: "",
      description: "",
      count: "",
      price: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <div>
      <form
        className="flex flex-col items-center mt-24"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 w-3/4">
          <Input
            id="productName"
            label="Product Name"
            register={register}
            errors={errors}
            required
          />
        </div>
        <div className="mb-4 w-3/4">
          <Input
            id="count"
            label="Count"
            register={register}
            errors={errors}
            type="number"
            required
          />
        </div>

        <div className="mb-4 w-3/4">
          <Input
            id="price"
            label="Price"
            register={register}
            errors={errors}
            type="number"
            required
          />
        </div>
        <div className="mb-4 w-3/4">
          <Input
            id="description"
            label="Description"
            register={register}
            errors={errors}
            type="text"
            required
          />
        </div>
        <button 
        className="bg-rose-300 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded"
        type="submit"> Send </button>
      </form>
    </div>
  );
};
addProduct.getLayout = DashboardLayout;

export default addProduct;
