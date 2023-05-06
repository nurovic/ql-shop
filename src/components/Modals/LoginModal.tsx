import { useCallback, useState } from "react";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";

import Modal from "./Modal";
import Input from "../Input";

import Button from "../Button";
import sliceRegisterModal from '@/store/RegisterModalSlice'
import sliceLoginModal from '@/store/LoginModalSlice'

const LoginModal= () => {
  const registerModal = sliceRegisterModal();
  const loginModal = sliceLoginModal();

  const [isLoading, setIsLoading] = useState(false);
  function devNull(){
    alert("13123")
  }
  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

  }

  const onToggle = useCallback(() => {
    registerModal.onOpen();
    loginModal.onClose();
  }, [registerModal, loginModal])

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
  )

  const footerContent = (
    <div className="
    text-neutral-500 text-center mt-4 font-light">
      <p>First time using Airbnb?
        <span 
          onClick={onToggle} 
          className="
            text-neutral-800
            cursor-pointer 
            hover:underline
          "
          > Create an account</span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Login"
      onClose={loginModal.onClose}
      onSubmit={devNull}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
