"use client";
import React, { useEffect, useState } from "react";
import {
  PiCaretDownBold,
  PiUserCircleFill,
  PiLockKeyFill,
} from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";
import { useAnimate, stagger, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import ClosingModal from "./ClosingModal";
import { IMAGES } from "@/utils/SharedImages";
import { useSelector } from "react-redux";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const Dropdown = () => {
  const route = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const userDetails = useSelector((state) => state.authState?.userDetails);
  console.log( "dropdown",userDetails);
  
  const scope = useMenuAnimation(isOpen);
  function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

      animate(
        "ul",
        {
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 10px)"
            : "inset(10% 50% 90% 50% round 10px)",
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }
      );

      animate(
        "li",
        isOpen
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        }
      );
    }, [isOpen]);

    return scope;
  }

  return (
    <div>
      <nav ref={scope} className="flex justify-center md:my-0 my-3">
        <motion.button
          className="flex h-10 px-5 items-center light-grey rounded-md"
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <PiUserCircleFill style={{ height: "22px", width: "22px" }} />
          <h4 className="mx-3">{userDetails?.username}</h4>
          <PiCaretDownBold
            className="arrow"
            style={{
              height: "16px",
              width: "16px",
              transformOrigin: "50% 55%",
            }}
          />
        </motion.button>
        <ul
          className="absolute light-grey mt-11 w-fit rounded-md z-20"
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
        >
          <li
            className={`flex cursor-pointer rounded-md p-2 ${
              pathName.split("/")[1] === "editprofile" &&
              !modalOpen &&
              "dropdown-active"
            }`}
            onClick={() => route.push("editprofile")}
          >
            <PiUserCircleFill className="mr-1 h-6 w-6" />
            Edit Profile
          </li>
          <li
            className={`flex cursor-pointer rounded-md p-2 border-y ${
              pathName.split("/")[1] === "changepassword" &&
              !modalOpen &&
              "dropdown-active"
            }`}
            onClick={() => route.push("changepassword")}
          >
            <PiLockKeyFill className="mr-1 h-6 w-6" />
            Change Password
          </li>
          <li
            className={`flex cursor-pointer rounded p-2 ${
              modalOpen && "dropdown-active"
            }`}
            onClick={() => {
              setModalOpen(true);
              localStorage.clear();
            }}
          >
            <IoLogOut className="mr-1 h-6 w-6" />
            Logout
          </li>
        </ul>
      </nav>
      {modalOpen && (
        <ClosingModal
          image={IMAGES.sad_emoji}
          popTitle="Logout"
          popContent=" Are you sure want to"
          popBoldContent="logout?"
          buttonText="Logout"
          cancelButtonOnClick={() => {
            setModalOpen(false);
          }}
          buttonOnClick={() => {
            setModalOpen(false);
            route.push("/login");
          }}
        />
      )}
    </div>
  );
};

export default Dropdown;
