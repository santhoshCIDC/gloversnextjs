"use client";
// imports
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

// component
import { useLoginMutation } from "@/redux/services/AuthService";
import Utility, { ToastMessage } from "@/utils/Utility";
import ButtonLoading from "@/components/ButtonLoading";
import { useDispatch } from "react-redux";
import { userDetails } from "@/redux/slices/AuthSlice";
import { IMAGES } from "@/utils/SharedImages";

const Login = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, isSuccess, isLoading }] = useLoginMutation();

  useEffect(() => {
    if (data?.code === 0) {
      route.push("/dashboard");
      setEmail("");
      setPassword("");
      dispatch(userDetails(data?.data));
    } else {
      Utility.toastMessage(data?.message);
    }
  }, [isSuccess]);

  const onClickSubmit = async () => {
    if (email.trim().length === 0) {
      Utility.toastMessage("Please enter your email");
    } else if (!Utility.validateEmail(email.trim())) {
      Utility.toastMessage("Please enter valid email");
    } else if (password.trim().length === 0) {
      Utility.toastMessage("Please enter your password");
    } else if (!Utility.validatePassword(password.trim())) {
      Utility.toastMessage("Please enter valid password");
    } else {
      let loginReq = {
        email: email.trim().toLowerCase(),
        password: password.trim(),
      };

      await login(loginReq);
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
          <div className="flex flex-col mt-6">
            <span className="ms-3">Email :</span>
            <input
              className="input-field rounded-md mx-10 ps-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col mt-6">
            <span className="ms-3">Password :</span>
            <input
              className="input-field rounded-md mx-10 ps-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <span
            className="flex justify-end forgot-password mr-10 mt-3"
            onClick={() => route.push("/forgotpassword")}
          >
            Forgot Password?
          </span>
          <div className="flex mx-10">
            <ButtonLoading
              loading={isLoading}
              onClickButton={() => onClickSubmit()}
              loadingLabel="Please wait..."
              buttonLabel="Login"
            />
          </div>
          <div className="flex flex-row justify-center mt-6 gap-2">
            <span>Don&apos;t have an accout?</span>
            <span className="forgot-password ">SIGN UP</span>
          </div>
          {ToastMessage()}
        </div>
      </div>
    </div>
  );
};

export default Login;
