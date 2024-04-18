"use client";
import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import "./style.css";
import Pagination from "@/components/Pagination";
import { BsFileEarmarkText } from "react-icons/bs";
import { useLazyTeamListQuery } from "@/redux/services/TeamListService";
import Loading from "@/components/Loading";

const TeamList = () => {
  const [teamList, { data: isTeamListData, isFetching: isTeamListFetching }] =
    useLazyTeamListQuery();

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = async (page: any) => {
    setCurrentPage(page);
  };
  const [searchText, setSearchText] = useState("");
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = isTeamListData?.data?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    async function _teamListApiCall() {
      teamList({ search: searchText });
    }
    _teamListApiCall();
  }, [searchText, teamList]);

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
            <SearchBar
              value={searchText}
              onChange={(text: any) => setSearchText(text.target.value)}
              clearButton={() => {
                setSearchText("");
              }}
            />
            <div className="flex justify-center sm:my-0 my-1">
              <button className="export-report px-3 py-2 ms-3 flex items-center rounded-md">
                <BsFileEarmarkText className="button-icon" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto m-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sm:relative">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-4">
                  S No.
                </th>
                <th scope="col" className="px-6 py-4">
                  Team Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Team Type
                </th>
                <th scope="col" className="px-6 py-4">
                  Age Group
                </th>
                <th scope="col" className="px-6 py-4">
                  Season
                </th>
                <th scope="col" className="px-6 py-4">
                  Location
                </th>
              </tr>
            </thead>
            {isTeamListFetching ? (
              <div className="flex justify-center items-center h-96 ">
                <Loading />
              </div>
            ) : (
              <tbody>
                {displayedData?.map((item: any, index: any): any => {
                  const serialNumber =
                    (currentPage - 1) * itemsPerPage + index + 1;
                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {serialNumber}
                      </th>
                      <td className="px-6 py-3">{item.team_name}</td>
                      <td className="px-6 py-3">{item.team_type}</td>
                      <td className="px-6 py-3">{item.age_value}</td>
                      <td className="px-6 py-3">{item.season_name}</td>
                      <td className="px-6 py-3">{item.address}</td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
          {!isTeamListFetching && isTeamListData?.data?.length === 0 && (
            <span className="flex justify-center items-center h-96 ">
              Teams are not found
            </span>
          )}

          {!isTeamListFetching &&
            isTeamListData?.data !== undefined &&
            isTeamListData?.data.length > 10 && (
              <div className="grid grid-cols-2">
                <div />
                <div className="ml-auto">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(
                      isTeamListData?.data.length / itemsPerPage
                    )}
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
