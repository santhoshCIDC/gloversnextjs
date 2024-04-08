"use client";
import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import "./style.css";
import Pagination from "@/components/Pagination";
import { BsFileEarmarkText } from "react-icons/bs";

const EventList = () => {
  const liveData = [
    {
      id: "1",
      event_type: "Game",
      scrimmage: true,
      playing_team: "Tigers",
      opponent_team: "Kings",
      location: "Chennai",
      progress: "LIVE",
      result: "In Progress",
      game_date: "10/20/2022",
    },
    {
      id: "2",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "Pothanur",
      progress: "LIVE",
      result: "In Progress",
      game_date: "10/28/2023",
    },
    {
      id: "3",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "Pothanur",
      progress: "LIVE",
      result: "In Progress",
      game_date: "10/28/2023",
    },
  ];
  const recentData = [
    {
      id: "1",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "Pothanur",
      progress: "Completed",
      result: "End",
      game_date: "10/28/2023",
    },
    {
      id: "2",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "Pothanur",
      progress: "Completed",
      result: "End",
      game_date: "10/28/2023",
    },
    {
      id: "3",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "Pothanur",
      progress: "Completed",
      result: "End",
      game_date: "10/28/2023",
    },
    {
      id: "4",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "Pothanur",
      progress: "Completed",
      result: "End",
      game_date: "10/28/2023",
    },
    {
      id: "5",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "Pothanur",
      progress: "Completed",
      result: "End",
      game_date: "10/28/2023",
    },
  ];
  const upcomingData = [
    {
      id: "1",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "New York, NY, USA",
      progress: "Completed",
      result: "End",
      game_date: "10/28/2023",
    },
    {
      id: "2",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "San Francisco, CA, USA",
      progress: "Completed",
      result: "End",
      game_date: "10/28/2023",
    },
    {
      id: "3",
      event_type: "Game",
      scrimmage: false,
      playing_team: "CSK",
      opponent_team: "Kings",
      location: "New York, NY, USA",
      progress: "Completed",
      result: "End",
      game_date: "10/28/2023",
    },
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [tabName, setTabName] = useState("live");
  const [datas, setDatas] = useState(liveData);

  const handlePageChange = async (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = datas.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (tabName === "live") {
      setDatas(liveData);
    } else if (tabName === "recent") {
      setDatas(recentData);
    } else if (tabName === "upcoming") {
      setDatas(upcomingData);
    }
  }, [tabName]);

  return (
    <div className="grow">
      <div className="flex sm:justify-end justify-center sm:px-4 sm:py-6  sm:my-0 my-2">
        <Dropdown />
      </div>
      <h5 className="border-t p-4">Events</h5>

      <div className="border mx-3 my-2 h-min">
        <div className="sm:flex mx-6 justify-between border-b py-3 items-center">
          <div className="sm:mb-0 mb-1">
            <div className="text-center text-sm">
              <div className="flex border items-center rounded-3xl">
                <span
                  className={`tab ${tabName === "live" ? "active" : ""}`}
                  onClick={() => setTabName("live")}
                >
                  Live
                </span>
                <span
                  className={`tab ${tabName === "recent" ? "active" : ""}`}
                  onClick={() => setTabName("recent")}
                >
                  Recent
                </span>
                <span
                  className={`tab ${tabName === "upcoming" ? "active" : ""}`}
                  onClick={() => setTabName("upcoming")}
                >
                  Upcoming
                </span>
              </div>
            </div>
          </div>
          <div className="sm:flex items-center">
            <SearchBar />
            <div className="flex justify-center sm:my-0 my-1">
              <button className="export-report px-3 py-2 ms-3 flex items-center rounded-md">
                <BsFileEarmarkText className="button-icon" />
                Export Report
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto m-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-4">
                  S No.
                </th>
                <th scope="col" className="px-6 py-4">
                  Event Type
                </th>
                <th scope="col" className="px-6 py-4">
                  Scrimmage
                </th>
                <th scope="col" className="px-6 py-4">
                  Playing Team
                </th>
                <th scope="col" className="px-6 py-4">
                  Opponent Team
                </th>
                <th scope="col" className="px-6 py-4">
                  Location
                </th>
                <th scope="col" className="px-6 py-4">
                  Progress
                </th>
                <th scope="col" className="px-6 py-4">
                  Result
                </th>
                <th scope="col" className="px-6 py-4">
                  Game Date
                </th>
                <th scope="col" className="px-6 py-4">
                  Time
                </th>
              </tr>
            </thead>

            <tbody>
              {displayedData !== 0 &&
                displayedData.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.id}
                      </th>
                      <td className="px-6 py-3">{item.event_type}</td>
                      <td className="px-6 py-3">
                        {item.scrimmage ? "Yes" : "No"}
                      </td>
                      <td className="px-6 py-3">{item.playing_team}</td>
                      <td className="px-6 py-3">{item.opponent_team}</td>
                      <td className="px-6 py-3">{item.location}</td>
                      <td
                        className={`px-6 py-3 ${
                          item.progress === "Completed"
                            ? "green"
                            : item.progress === "LIVE"
                            ? "red"
                            : null
                        } `}
                      >
                        {item.progress}
                      </td>
                      <td
                        className={`px-6 py-3 ${
                          item.result === "In Progress"
                            ? "blue"
                            : item.result === "End"
                            ? "red"
                            : null
                        } `}
                      >
                        {item.result}
                      </td>
                      <td className="px-6 py-3">{item.game_date}</td>
                      <td className="px-6 py-3">{"01.00 AM"}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {displayedData?.length === 0 && (
            <div className="flex items-center justify-center pt-5">
              <span className="font-serif">
                {tabName === "live"
                  ? "No live events found"
                  : tabName === "recent"
                  ? "No recent events found"
                  : "No upcoming events found"}
              </span>
            </div>
          )}
          {datas !== undefined && datas.length > 10 && (
            <div className="grid grid-cols-2">
              <div />
              <div className="ml-auto">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(datas.length / itemsPerPage)}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;