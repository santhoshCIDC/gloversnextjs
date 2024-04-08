"use client";
import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";
import "./style.css";
import Pagination from "@/components/Pagination";
import { BsFileEarmarkText } from "react-icons/bs";
const TeamList = () => {
  const data = [
    {
      id: "1",
      team_name: "Royal",
      team_type: "Local League / Rec / Other",
      age_group: "Under 13",
      season_name: "Fall 2024",
      location: "Denver,CO",
    },
    {
      id: "2",
      team_name: "Tigers",
      team_type: "School",
      age_group: "Elementary",
      season_name: "Winter 2024-2025",
      location: "Galveston,TX",
    },
    {
      id: "3",
      team_name: "Chennai Super Kings",
      team_type: "Local League / Rec / Other",
      age_group: "College",
      season_name: "Summer 2026",
      location: "San Francisco,CA",
    },
    {
      id: "4",
      team_name: "Royal Tigers",
      team_type: "School",
      age_group: "Middle School",
      season_name: "Spring 2023",
      location: "Fresno,CA",
    },
    {
      id: "5",
      team_name: "Mumbai Indians",
      team_type: "Local League / Rec / Other",
      age_group: "High School",
      season_name: "Summer 2024",
      location: "New York,NY",
    },
    {
      id: "6",
      team_name: "Royal",
      team_type: "Local League / Rec / Other",
      age_group: "Under 13",
      season_name: "Fall 2024",
      location: "Denver,CO",
    },
    {
      id: "7",
      team_name: "Tigers",
      team_type: "School",
      age_group: "Elementary",
      season_name: "Winter 2024-2025",
      location: "Galveston,TX",
    },
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = async (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="grow">
      <div className="flex sm:justify-end justify-center sm:px-4 sm:py-6  sm:my-0 my-2">
        <Dropdown />
      </div>
      <h5 className="border-t p-4">Teams</h5>

      <div className="border mx-3 my-2 h-min">
        <div className="sm:flex mx-6 justify-between border-b py-3 items-center">
          <div className="sm:mb-0 mb-1">
            <span className="border-b-2 borderBottomColor">Team List</span>
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
        
        <div class="overflow-x-auto m-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-4">
                  S No.
                </th>
                <th scope="col" class="px-6 py-4">
                  Team Name
                </th>
                <th scope="col" class="px-6 py-4">
                  Team Type
                </th>
                <th scope="col" class="px-6 py-4">
                  Age Group
                </th>
                <th scope="col" class="px-6 py-4">
                  Season
                </th>
                <th scope="col" class="px-6 py-4">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item) => {
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
                    <td className="px-6 py-3">{item.team_name}</td>
                    <td className="px-6 py-3">{item.team_type}</td>
                    <td className="px-6 py-3">{item.age_group}</td>
                    <td className="px-6 py-3">{item.season_name}</td>
                    <td className="px-6 py-3">{item.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {data !== undefined && data.length > 10 && (
            <div className="grid grid-cols-2">
              <div />
              <div className="ml-auto">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(data.length / itemsPerPage)}
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

export default TeamList;
