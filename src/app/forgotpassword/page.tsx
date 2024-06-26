"use client";
import ButtonLoading from "@/components/ButtonLoading";
import { useForgotPasswordMutation } from "@/redux/services/AuthService";
import { IMAGES } from "@/utils/SharedImages";
import Utility, { ToastMessage } from "@/utils/Utility";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ForgotPassword = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [forgotPassword, { data, isSuccess, isLoading }] =
    useForgotPasswordMutation();

  useEffect(() => {
    if (data?.code === 0) {
      Utility.toastMessage(data?.data);
      setEmail("");
    } else {
      Utility.toastMessage(data?.message);
    }
  }, [isSuccess]);
  const onClickSubmit = async () => {
    if (email.trim().length === 0) {
      Utility.toastMessage("Please enter your email address");
    } else if (!Utility.validateEmail(email.trim())) {
      Utility.toastMessage("Please enter valid email");
    } else {
      let forgotObjReq = {
        email: email,
      };
      await forgotPassword(forgotObjReq);
    }
  };
  return (
    <div className="container-fluid">
      <div className="login-main h-screen grid sm:grid-cols-2 gap-2">
        <div className="hidden sm:flex flex-col w-full">
          <span className="word glovers md:text-5xl lg:text-7xl">Glovers</span>
          <span className="word scorebook md:text-5xl lg:text-7xl">
            Scorebooks
          </span>
        </div>
        <div className="card lg:3/4 xl:w-3/4 w-full md:w-11/12 justify-center p-6">
          <Image
            className="logo flex m-auto"
            src={IMAGES.app_logo}
            alt=""
          />
          <h4 className="ms-3">Forgot Password</h4>
          <div className="flex flex-col mt-6">
            <span className="ms-3">Email :</span>
            <input
              className="input-field rounded-md mx-10 ps-3"
              value={email}
              onChange={(text) => setEmail(text.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="flex mx-10 mt-6">
            <ButtonLoading
              loading={isLoading}
              onClickButton={() => onClickSubmit()}
              loadingLabel="Please wait..."
              buttonLabel="Submit"
            />
          </div>
          <span
            className="flex justify-center forgot-password mt-3"
            onClick={() => route.push("/login")}
          >
            Login
          </span>
        </div>
      </div>
      {ToastMessage()}
    </div>
  );
};

export default ForgotPassword;
