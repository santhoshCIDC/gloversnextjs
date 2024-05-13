"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IMAGES } from "@/utils/SharedImages";
import { useRefreshTokenMutation } from "@/redux/services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "@/redux/slices/AuthSlice";

const Splash = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [refreshToken, { data }] = useRefreshTokenMutation();
  const token = useSelector((state) => state.authState?.tokenDetails);

  async function _apiCall() {
    refreshToken({ refresh_token: token?.refresh_token });
  }
  useEffect(() => {
    if (token !== null && token !== undefined) {
      _apiCall();
    }
  }, [refreshToken]);

  useEffect(() => {
    if (data?.code === 0) {
      dispatch(userDetails(data?.data));
    }
  }, [data?.code, data?.data, dispatch]);

  useEffect(() => {
    if (token) {
      route.push("/dashboard");
    } else {
      setTimeout(() => {
        route.push("/login");
      }, 2000);
    }
  }, []);
  return (
    <div className="grid place-items-center h-screen">
      <div className="box">
        <span>
          <Image className="logo" src={IMAGES.app_logo} alt="Logo" />
        </span>
      </div>
    </div>
  );
};

export default Splash;
