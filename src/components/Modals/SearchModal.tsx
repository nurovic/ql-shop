import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Input from "../Input";
import SearchList from "@/components/product/SearchList";
import sliceProductSearchModal from "@/store/ProductSearchModalSlice";

const SearchModal = () => {
  const searchModal = sliceProductSearchModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      search: "",
    },
  });

  const bodyContent = (
    <div>
      <Input
        id="search"
        label="Product Name"
        type="text"
        errors={errors}
        register={register}
      />

      <SearchList />
    </div>
  );
  const productSearch = () => {
    return alert("SEAR");
  };
  return (
    <Modal
      title="Search Product"
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      actionLabel="Product Search"
      body={bodyContent}
      onSubmit={productSearch}
    />
  );
};

export default SearchModal;
