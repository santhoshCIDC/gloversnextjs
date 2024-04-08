"use client";

import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { CgSandClock } from "react-icons/cg";
import {
  RiCalendar2Fill,
  RiCalendarTodoFill,
  RiCheckLine,
} from "react-icons/ri";
import { ImMobile } from "react-icons/im";
import { TiGroup } from "react-icons/ti";
import { FaBaseballBatBall } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import "./style.css";
import DashboardCard from "@/components/DashboardCard";
import SearchBar from "@/components/SearchBar";
import Dropdown from "@/components/Dropdown";
import DashboardChart from "@/components/DashboardChart";

const Dashboard = () => {
  const eventsTabColors = ["#1E9F4D", "#E2922F", "#E573A4"];
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  let live = false;
  return (
    <div className="grow">
      <div className="md:flex justify-between sm:px-4 sm:py-6">
        <SearchBar />
        <Dropdown />
      </div>
      <h5 className="border-y p-4">Dashboard</h5>
      <div className="flex justify-between mx-6 border-b py-3">
        <span>Events</span>
        <div className="flex">
          {live ? (
            <GoDotFill className="delay1" style={{ color: "red" }} />
          ) : (
            <GoDotFill
              style={{ color: "red", height: "16px", width: "16px" }}
            />
          )}
          <span className="text-xs">Live:</span>
          {live && (
            <span className="text-xs ml-2" style={{ color: "#0d6efd" }}>
              Royal vs Tigers
            </span>
          )}
          <span className="text-xs ml-3" style={{ color: "#0d6efd" }}>
            View all
          </span>
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-none ">
          <DashboardCard
            data={[
              {
                id: 1,
                boxStyle: "dashboardBox1",
                value: "0",
                text: "Today",
                icons: <RiCalendar2Fill className="dashboardBoxIconSize" />,
              },
              {
                id: 1,
                boxStyle: "dashboardBox2",
                value: "1",
                text: "Tomorrow",
                icons: <RiCalendarTodoFill className="dashboardBoxIconSize" />,
              },
              {
                id: 1,
                boxStyle: "dashboardBox3",
                value: "2",
                text: "Completed",
                icons: <RiCheckLine className="dashboardBoxIconSize" />,
              },
              {
                id: 1,
                boxStyle: "dashboardBox4",
                value: "3",
                text: "Scheduled",
                icons: <CgSandClock className="dashboardBoxIconSize" />,
              },
            ]}
          />
        </div>
        <div className="sm:grid lg:grid-cols-2">
          <DashboardChart
            title={"Events Graph"}
            colors={eventsTabColors}
            categories={[`Live 0`, `Recent 1`, `Upcoming 2`]}
            data={[0, 1, 2]}
          />
          <DashboardChart
            title={"Users Graph"}
            colors={eventsTabColors}
            categories={[`Live 0`, `Recent 1`, `Upcoming 2`]}
            data={[0, 1, 2]}
          />
        </div>
        <div className="sm:grid lg:grid-cols-2">
          <div className="border mx-3 my-2 h-min">
            <div className="flex justify-between border-b py-3 px-5">
              <h5>Team Matrics</h5>
              <h5>Total Items: 130</h5>
            </div>
            <div className="overflow-x-auto m-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-4">
                      No. of teams
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Legal League
                    </th>

                    <td className="px-6 py-3">$2999</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Travel
                    </th>
                    <td className="px-6 py-3">$1999</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Schools
                    </th>
                    <td className="px-6 py-3">$99</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      - Elementary
                    </th>
                    <td className="px-6 py-3">$99</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      - Middle School
                    </th>
                    <td className="px-6 py-3">$99</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      - High School
                    </th>
                    <td className="px-6 py-3">$99</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      - College
                    </th>
                    <td className="px-6 py-3">$99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border mx-3 my-2 h-min">
              <div className="sm:flex justify-between items-center border-b py-3 px-5">
                <h5>Users Matrics</h5>
                <div className="text-center text-sm">
                  <div className="flex border items-center rounded-3xl">
                    <span
                      className={`tab ${activeTab === "All" ? "active" : ""}`}
                      onClick={() => handleTabClick("All")}
                    >
                      All
                    </span>
                    <span
                      className={`tab ${
                        activeTab === "Invited" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("Invited")}
                    >
                      Invited
                    </span>
                    <span
                      className={`tab ${
                        activeTab === "Signedup" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("Signedup")}
                    >
                      Signedup
                    </span>
                  </div>
                </div>
              </div>
              <div class="relative overflow-x-auto m-5">
                <div className="flex justify-between light-grey py-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <TiGroup />
                    <span className="ps-2">Coaches</span>
                  </div>
                  <span>20</span>
                </div>
                <div className="flex justify-between light-grey py-3 my-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <ImMobile />
                    <span className="ps-2">Staffs</span>
                  </div>
                  <span>10</span>
                </div>
                <div className="flex justify-between light-grey py-3 my-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <FaBaseballBatBall />
                    <span className="ps-2">Players</span>
                  </div>
                  <span>30</span>
                </div>
                <div className="flex justify-between light-grey py-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <FaUsers />
                    <span className="ps-2">Fans</span>
                  </div>
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className="border mx-3 my-2 h-min">
              <div className="sm:flex justify-between items-center border-b py-3 px-5">
                <h5>Role Matrics</h5>
              </div>
              <div class="overflow-x-auto m-5">
                <div className="flex justify-between light-grey py-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <TiGroup />
                    <span className="ps-2">Video Streamer</span>
                  </div>
                  <span>20</span>
                </div>
                <div className="flex justify-between light-grey py-3 my-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <ImMobile />
                    <span className="ps-2">Scorer</span>
                  </div>
                  <span>10</span>
                </div>
                <div className="flex justify-between light-grey py-3 my-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <FaBaseballBatBall />
                    <span className="ps-2">PC Keeper</span>
                  </div>
                  <span>30</span>
                </div>
                <div className="flex justify-between light-grey py-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <FaUsers />
                    <span className="ps-2">Keeper</span>
                  </div>
                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
