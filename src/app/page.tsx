"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const route = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      route.push("/login");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [route]);

  return (
    <div className="splash-main">
      <Image
        className="logo"
        src={require("../../public/assets/logo.png")}
        alt="Logo"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Home;
