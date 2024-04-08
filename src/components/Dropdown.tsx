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

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const Dropdown = () => {
  const route = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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

  const renderModalPopup = () => {
    return (
      <div>
        {modalOpen && (
          <div class="fixed z-20 inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      class="h-6 w-6 text-green-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium">Logout</h3>
                    <div class="mt-2">
                      <p class="text-sm leading-5 flex">
                        Are you sure want to
                        <p class="text-sm leading-5 ms-1 font-bold">Logout?</p>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      onClick={() => {
                        setModalOpen(false);
                        route.push("/login");
                      }}
                    >
                      Logout
                    </button>
                  </span>
                  <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      onClick={() => setModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <nav ref={scope} className="flex justify-center md:my-0 my-3">
        <motion.button
          className="flex h-10 px-5 items-center light-grey rounded-md"
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <PiUserCircleFill style={{ height: "22px", width: "22px" }} />
          <h4 className="mx-3">Glovers admin</h4>
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
          className="absolute light-grey mt-11 w-fit rounded-md"
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
            onClick={() => setModalOpen(true)}
          >
            <IoLogOut className="mr-1 h-6 w-6" />
            Logout
          </li>
        </ul>
      </nav>
      {renderModalPopup()}
    </div>
  );
};

export default Dropdown;
