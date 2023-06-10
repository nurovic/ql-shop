 import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useMutation} from '@apollo/client';
import { LogIn } from "@/graphQl/Mutations/auth";
import Modal from "./Modal";
import Input from "../Input";

import sliceRegisterModal from "@/store/RegisterModalSlice";
import sliceLoginModal from "@/store/LoginModalSlice";
import sliceAuthModal from "@/store/AuthModalSlice";
import { headers } from "next/dist/client/components/headers";

function LoginModal () {
  const registerModal = sliceRegisterModal();
  const loginModal = sliceLoginModal();
  const authModal = sliceAuthModal();

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });


const [loginPost ,{ data, loading, error} ] = useMutation(LogIn);
authModal.auth.name = data?.signin?.user?.name
console.log("LOGIN MODAL")
const onSubmit: SubmitHandler<FieldValues> = (loginData: any ) => {
  setIsLoading(true);
  loginPost({
    variables : loginData
  })
  console.log("LOGIN MODAL2")
  setIsLoading(false);
    // if (loading) return 'Submitting...';
    // if (error) return `Submission error! ${error.message}`;
  
  };
  const onToggle = useCallback(() => {
    registerModal.onOpen();
    loginModal.onClose();
  }, [registerModal, loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div
      className="
    text-neutral-500 text-center mt-4 font-light"
    >
      <p>
        First time using qL Shop?
        <span
          onClick={onToggle}
          className="
            text-neutral-800
            cursor-pointer 
            hover:underline
          "
        >
          {" "}
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Login"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
