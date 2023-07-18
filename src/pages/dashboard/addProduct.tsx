import React, { useState } from "react";
import DashboardLayout from "@/Layouts/Dashboard";
import Input from "@/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CreateProduct } from "../../graphQl/Mutations/product";

const addProduct = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      productName: "",
      description: "",  
      count: 0,
      price: 0,
    },
  });
  const [handleProductInfo] = useMutation(CreateProduct);

  const onSubmit: SubmitHandler<FieldValues> = async (productData: any) => {
    console.log(productData)
    setIsLoading(true);
    const res = await handleProductInfo({variables : {
      productName: productData.productName,
      description: productData.description,
      price: Number(productData.price),
      count: Number(productData.count)
    }});
    console.log(res, "RES");
    setIsLoading(false);
  };

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
            disabled={isLoading}
            errors={errors}
            required
          />
        </div>
        <div className="mb-4 w-3/4">
          <Input
            id="count"
            label="Count"
            register={register}
            disabled={isLoading}
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
            disabled={isLoading}
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
          type="submit"
        >
          {" "}
          Send{" "}
        </button>
      </form>
    </div>
  );
};
addProduct.getLayout = DashboardLayout;

export default addProduct;
