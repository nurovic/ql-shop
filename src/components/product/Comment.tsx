import React from "react";
import { useRouter } from "next/router";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MakeComment } from "../../graphQl/Mutations/reviews.ts";
import { useMutation } from "@apollo/client";

const Reviews = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      comment: "",
      productId: props.productId,
    },
  });

  const [handleProductInfo] = useMutation(MakeComment);

  const onSubmit: SubmitHandler<FieldValues> = async (productData: any) => {
    const res = await handleProductInfo({
      variables: productData,
    });
    productData.comment = "";
    reset(productData);
    await props.refetch();
  };

  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="w-2/4 mt-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Comment:
          <input
            className="w-full p-2 border-2 resize-none rounded-md"
            {...register("comment")}
          />
        </label>
        <button
          className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md"
          type="submit"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Reviews;
