"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiTachometer, BiUserCircle, BiCalendar } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineDollar, AiOutlineSetting } from "react-icons/ai";
import { IMAGES } from "@/utils/SharedImages";
import Link from "next/link";

const navData = [
  {
    id: 1,
    title: "Dashboard",
    nav: "dashboard",
    icon: <BiTachometer className="dashboardIconSize" />,
  },
  {
    id: 2,
    title: "User Lists",
    nav: "userlist",
    icon: <BiUserCircle className="dashboardIconSize" />,
  },
  {
    id: 3,
    title: "Team Lists",
    nav: "teamlist",
    icon: <HiOutlineUserGroup className="dashboardIconSize" />,
  },
  {
    id: 4,
    title: "Event Lists",
    nav: "eventlist",
    icon: <BiCalendar className="dashboardIconSize" />,
  },
  {
    id: 5,
    title: "Seasons",
    nav: "season",
    icon: <HiOutlineUserGroup className="dashboardIconSize" />,
  },
  {
    id: 6,
    title: "Subscription Plan",
    nav: "subscriptionplan",
    icon: <AiOutlineDollar className="dashboardIconSize" />,
  },
  {
    id: 7,
    title: "Settings",
    nav: "settings",
    icon: <AiOutlineSetting className="dashboardIconSize" />,
  },
];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("/dashboard");

  const activeclassName =
    "flex items-center space-x-2 p-4 transition duration-200 dashboard activeTab";
  const inActiveclassName =
    "flex items-center space-x-2 p-4 transition duration-200 dashboard inActiveTab";

  useEffect(() => {
    setActiveTab(window.location.pathname.substring(1));
  }, []);

  return (
    <div className="lg:flex">
      <input type="checkbox" id="menu-open" className="hidden" />
      <header
        className="text-gray-100 flex justify-between lg:hidden fixed z-20"
        data-dev-hint="mobile menu bar"
        style={{ backgroundColor: "#005dab", width: "-webkit-fill-available" }}
      >
        <a
          href="#"
          className="block p-4 text-white font-bold whitespace-nowrap truncate"
        >
          <Image
            src={IMAGES.app_logo}
            alt=""
            style={{ height: "50px", width: "100px" }}
          />
        </a>

        <label
          htmlFor="menu-open"
          id="mobile-menu-button"
          className="m-2 p-2 focus:outline-none hover:text-white h-10 w-10 dashboard rounded-md"
        >
          <svg
            id="menu-open-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            id="menu-close-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </header>

      <aside
        id="sidebar"
        className={`min-h-screen fixed z-20 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 inset-y-0 left-0 transform g:translate-x-0
           duration-500 ease-in-out lg:flex lg:flex-col lg:justify-between overflow-y-auto`}
        data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        style={{ backgroundColor: "#005dab" }}
        for="menu-open"
      >
        <div
          className="flex flex-col space-y-6"
          data-dev-hint="optional div for having an extra footer navigation"
        >
          <Link href={"/dashboard"}>
            <label
              htmlFor="menu-open"
              className="text-white flex items-center space-x-2 px-4"
              onClick={() => {
                setActiveTab("dashboard");
              }}
            >
              <Image src={IMAGES.app_logo} alt="" className="w-full" />
            </label>
          </Link>
          <span className="px-4 text-sm">Main Menu</span>
          <nav data-dev-hint="main navigation">
            {navData.map((item) => {
              return (
                <Link key={item.id} href={item.nav}>
                  <label
                    htmlFor="menu-open"
                    className={
                      activeTab === item.nav
                        ? activeclassName
                        : inActiveclassName
                    }
                    onClick={() => {
                      setActiveTab(item.nav);
                    }}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </label>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
