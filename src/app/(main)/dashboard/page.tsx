"use client";

import React, { useEffect, useState } from "react";
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
import {
  useLazyEventMatricsQuery,
  useLazyEventTabsQuery,
  useLazyRoleMatricsQuery,
  useLazyTeamMatricsQuery,
  useLazyUserMatricsQuery,
} from "@/redux/services/DashboardService";
import Link from "next/link";

const Dashboard = () => {
  const eventGraphColors = ["#1E9F4D", "#E2922F", "#E573A4"];
  const userGraphColors = ["#f87979", "#8843EC", "#B250FF", "#38A6DA"];
  const [activeTab, setActiveTab] = useState("All");
  const [teamMatric, { data: isTeamMatricsData }] = useLazyTeamMatricsQuery();
  const [roleMatric, { data: isRoleMatricsData }] = useLazyRoleMatricsQuery();
  const [userMatric, { data: isUserMatricsData }] = useLazyUserMatricsQuery();
  const [eventTabs, { data: isEventTabsData }] = useLazyEventTabsQuery();
  const [eventMatric, { data: isEventMaticsData }] = useLazyEventMatricsQuery();

  const [userMatrisData, setUserMatricsData] = useState(0);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  let live = false;

  useEffect(() => {
    async function _matricsApiCall() {
      teamMatric({});
      roleMatric({});
      eventTabs({});
      eventMatric({});
      if (activeTab === "All") {
        userMatric({});
      } else if (activeTab === "PENDING") {
        userMatric({ type: "PENDING" });
      } else {
        userMatric({ type: "ACCEPTED" });
      }
    }
    _matricsApiCall();
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === "All") {
      setUserMatricsData(isUserMatricsData?.data);
    }
  }, [isUserMatricsData]);

  let totalSchools =
    isTeamMatricsData?.data?.["Middle schools"] +
    isTeamMatricsData?.data?.["High schools"] +
    isTeamMatricsData?.data?.["Elementary"] +
    isTeamMatricsData?.data?.["Schools"];

  let totalTeams =
    isTeamMatricsData?.data?.["Local Leagues"] +
    isTeamMatricsData?.data?.["Travel"] +
    totalSchools;

  let liveEventLength = isEventTabsData
    ? isEventTabsData?.data?.live.length
    : 0;
  let recentEventLength = isEventTabsData
    ? isEventTabsData?.data?.recent.length
    : 0;
  let upcomingEventLength = isEventTabsData
    ? isEventTabsData?.data?.upcoming.length
    : 0;
  let totalEventLength =
    liveEventLength + recentEventLength + upcomingEventLength;
  let staffCount = userMatrisData ? userMatrisData[0]?.count : 0;
  let coachCount = userMatrisData ? userMatrisData[1]?.count : 0;
  let playerCount = userMatrisData ? userMatrisData[3]?.count : 0;
  let fanCount = userMatrisData ? userMatrisData[2]?.count : 0;
  let completedPercentage = (
    (recentEventLength * 100) /
    totalEventLength
  ).toFixed(0);
  let scheduledPercentage = (
    ((liveEventLength + upcomingEventLength) * 100) /
    totalEventLength
  ).toFixed(0);

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
          {isEventTabsData?.data?.live.length >= 1 ? (
            <GoDotFill className="delay1" style={{ color: "red" }} />
          ) : (
            <GoDotFill
              style={{ color: "red", height: "16px", width: "16px" }}
            />
          )}
          <span className="text-xs">Live:</span>
          {isEventTabsData?.data?.live.length >= 1 && (
            <span
              className="text-xs ml-2 underline"
              style={{ color: "#0d6efd" }}
            >
              {`${isEventTabsData?.data?.live[0]?.playing_team} vs ${isEventTabsData?.data?.live[0]?.opponent_team}`}
            </span>
          )}
          <Link
            href={"/eventlist"}
            className="text-xs ml-2 hover:underline cursor-pointer"
            style={{ color: "#0d6efd" }}
          >
            <span className="text-xs ml-3" style={{ color: "#0d6efd" }}>
              View all
            </span>
          </Link>
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-none ">
          <DashboardCard
            data={[
              {
                id: 1,
                boxStyle: "dashboardBox1",
                value: isEventMaticsData?.data[0]?.count,
                text: "Today",
                icons: <RiCalendar2Fill className="dashboardBoxIconSize" />,
              },
              {
                id: 2,
                boxStyle: "dashboardBox2",
                value: isEventMaticsData?.data[1]?.count,
                text: "Tomorrow",
                icons: <RiCalendarTodoFill className="dashboardBoxIconSize" />,
              },
              {
                id: 3,
                boxStyle: "dashboardBox3",
                value: `${completedPercentage} %`,
                text: "Completed",
                icons: <RiCheckLine className="dashboardBoxIconSize" />,
              },
              {
                id: 4,
                boxStyle: "dashboardBox4",
                value: `${scheduledPercentage} %`,
                text: "Scheduled",
                icons: <CgSandClock className="dashboardBoxIconSize" />,
              },
            ]}
          />
        </div>
        <div className="sm:grid lg:grid-cols-2">
          <DashboardChart
            title={"Events Graph"}
            colors={eventGraphColors}
            categories={[
              `Live ${liveEventLength}`,
              `Recent ${recentEventLength}`,
              `Upcoming ${upcomingEventLength}`,
            ]}
            data={[liveEventLength, recentEventLength, upcomingEventLength]}
          />
          <DashboardChart
            title={"Users Graph"}
            colors={userGraphColors}
            categories={[
              `Coach ${coachCount}`,
              `Staff ${staffCount}`,
              `Player ${playerCount}`,
              `Fan ${fanCount}`,
            ]}
            data={[coachCount, staffCount, playerCount, fanCount]}
          />
        </div>
        <div className="sm:grid lg:grid-cols-2">
          <div className="border mx-3 my-2 h-min">
            <div className="flex justify-between border-b py-3 px-5">
              <h5>Team Matrics</h5>
              <h5>{`Total Items: ${totalTeams}`}</h5>
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
                    <td className="px-6 py-3">
                      {isTeamMatricsData?.data?.["Local Leagues"]}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Travel
                    </th>
                    <td className="px-6 py-3">
                      {isTeamMatricsData?.data?.["Travel"]}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Schools
                    </th>
                    <td className="px-6 py-3">{totalSchools}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      - Elementary
                    </th>
                    <td className="px-6 py-3">
                      {isTeamMatricsData?.data?.["Elementary"]}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      - Middle School
                    </th>
                    <td className="px-6 py-3">
                      {isTeamMatricsData?.data?.["Middle schools"]}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      - High School
                    </th>
                    <td className="px-6 py-3">
                      {isTeamMatricsData?.data?.["High schools"]}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      - College
                    </th>
                    <td className="px-6 py-3">
                      {isTeamMatricsData?.data?.["Schools"]}
                    </td>
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
                        activeTab === "PENDING" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("PENDING")}
                    >
                      Invited
                    </span>
                    <span
                      className={`tab ${
                        activeTab === "ACCEPTED" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("ACCEPTED")}
                    >
                      Signedup
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative overflow-x-auto m-5">
                <div className="flex justify-between light-grey py-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <TiGroup />
                    <span className="ps-2">Coaches</span>
                  </div>
                  <span>{isUserMatricsData?.data[1]?.count}</span>
                </div>
                <div className="flex justify-between light-grey py-3 my-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <ImMobile />
                    <span className="ps-2">Staffs</span>
                  </div>
                  <span>{isUserMatricsData?.data[0]?.count}</span>
                </div>
                <div className="flex justify-between light-grey py-3 my-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <FaBaseballBatBall />
                    <span className="ps-2">Players</span>
                  </div>
                  <span>{isUserMatricsData?.data[3]?.count}</span>
                </div>
                <div className="flex justify-between light-grey py-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <FaUsers />
                    <span className="ps-2">Fans</span>
                  </div>
                  <span>{isUserMatricsData?.data[2]?.count}</span>
                </div>
              </div>
            </div>
            <div className="border mx-3 my-2 h-min">
              <div className="sm:flex justify-between items-center border-b py-3 px-5">
                <h5>Role Matrics</h5>
              </div>
              <div className="overflow-x-auto m-5">
                <div className="flex justify-between light-grey py-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <TiGroup />
                    <span className="ps-2">Video Streamer</span>
                  </div>
                  <span>{isRoleMatricsData?.data?.["videoStreamer"]}</span>
                </div>
                <div className="flex justify-between light-grey py-3 my-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <ImMobile />
                    <span className="ps-2">Scorer</span>
                  </div>
                  <span>{isRoleMatricsData?.data?.["scorer"]}</span>
                </div>
                <div className="flex justify-between light-grey py-3 my-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <FaBaseballBatBall />
                    <span className="ps-2">PC Keeper</span>
                  </div>
                  <span>{isRoleMatricsData?.data?.["pitchCountKeeper"]}</span>
                </div>
                <div className="flex justify-between light-grey py-3 pr-12 pl-6">
                  <div className="flex items-center">
                    <FaUsers />
                    <span className="ps-2">Keeper</span>
                  </div>
                  <span>{isRoleMatricsData?.data?.["battingInfoKeeper"]}</span>
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
