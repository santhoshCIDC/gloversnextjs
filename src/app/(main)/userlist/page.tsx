"use client";
import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import "./style.css";
import Pagination from "@/components/Pagination";
import { AiOutlineIdcard, AiOutlineFileText } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
const UserList = () => {
  const coachData = [
    {
      id: "1",
      first_name: "Amit",
      last_name: "Amit",
      email: "amit@gmail.com",
      subscription_status: "Active",
      team_name: "Royal",
      user_status: true,
    },
    {
      id: "2",
      first_name: "Amit",
      last_name: "Sonic",
      email: "amitsonic@gmail.com",
      subscription_status: "Active",
      team_name: "CSK",
      user_status: true,
    },
    {
      id: "3",
      first_name: "santhosh",
      last_name: "kumar",
      email: "santhosh@gmail.com",
      subscription_status: "Active",
      team_name: "Lions",
      user_status: false,
    },
    {
      id: "4",
      first_name: "Dhivya",
      last_name: "Dhivya",
      email: "dhivya@gmail.com",
      subscription_status: "Active",
      team_name: "Tigers",
      user_status: false,
    },
    {
      id: "5",
      first_name: "Sugu",
      last_name: "Surya",
      email: "amit@gmail.com",
      subscription_status: "Active",
      team_name: "King",
      user_status: true,
    },
  ];
  const staffData = [
    {
      id: "1",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      subscription_status: "Active",
      team_name: "King",
      user_status: true,
    },
    {
      id: "2",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      subscription_status: "Active",
      team_name: "Tigers",
      user_status: false,
    },
    {
      id: "3",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      subscription_status: "Active",
      team_name: "Tigers",
      user_status: false,
    },
    {
      id: "4",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      subscription_status: "Active",
      team_name: "Royal",
      user_status: true,
    },
    {
      id: "5",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      subscription_status: "Active",
      team_name: "Royal",
      user_status: true,
    },
    {
      id: "6",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      subscription_status: "Active",
      team_name: "CSK",
      user_status: true,
    },
    {
      id: "7",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      subscription_status: "Active",
      team_name: "CSK",
      user_status: true,
    },
    {
      id: "8",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      subscription_status: "Active",
    },
    {
      id: "9",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      subscription_status: "Active",
    },
    {
      id: "10",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      subscription_status: "Active",
    },
    {
      id: "11",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      subscription_status: "Active",
    },
  ];
  const playerData = [
    {
      id: "1",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      team_name: "Royal",
      jersey_no: "01",
      batting: "Right",
      throwing: "Left",
      user_status: true,
    },
    {
      id: "2",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      team_name: "Kings",
      jersey_no: "01",
      batting: "Right",
      throwing: "Both",
      user_status: true,
    },
    {
      id: "3",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      team_name: "Tigers",
      jersey_no: "01",
      batting: "Right",
      throwing: "Right",
      user_status: true,
    },
    {
      id: "4",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      team_name: "CSK",
      jersey_no: "01",
      batting: "Left",
      throwing: "Left",
      user_status: true,
    },
    {
      id: "5",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      team_name: "Royal",
      jersey_no: "01",
      batting: "Right",
      throwing: "Left",
      user_status: true,
    },
    {
      id: "6",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      team_name: "Kings",
      jersey_no: "01",
      batting: "Right",
      throwing: "Both",
      user_status: true,
    },
    {
      id: "7",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      team_name: "Tigers",
      jersey_no: "01",
      batting: "Right",
      throwing: "Right",
      user_status: true,
    },
    {
      id: "8",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      team_name: "CSK",
      jersey_no: "01",
      batting: "Left",
      throwing: "Left",
      user_status: true,
    },
    {
      id: "9",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      team_name: "Royal",
      jersey_no: "01",
      batting: "Right",
      throwing: "Left",
      user_status: true,
    },
    {
      id: "10",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      team_name: "Kings",
      jersey_no: "01",
      batting: "Right",
      throwing: "Both",
      user_status: true,
    },
    {
      id: "11",
      first_name: "Surya",
      last_name: "Surya",
      email: "surya@gmail.com",
      team_name: "Tigers",
      jersey_no: "01",
      batting: "Right",
      throwing: "Right",
      user_status: true,
    },
    {
      id: "12",
      first_name: "santhosh",
      last_name: "1234",
      email: "san@gmail.com",
      team_name: "CSK",
      jersey_no: "01",
      batting: "Left",
      throwing: "Left",
      user_status: true,
    },
  ];
  const fanData = [
    {
      id: "1",
      first_name: "Amit",
      last_name: "Amit",
      email: "amit@gmail.com",
      subscription_status: "Active",
      team_name: "Royal",
      user_status: true,
    },
    {
      id: "2",
      first_name: "Amit",
      last_name: "Sonic",
      email: "amitsonic@gmail.com",
      subscription_status: "Active",
      team_name: "Royal",
      user_status: true,
    },
    {
      id: "3",
      first_name: "santhosh",
      last_name: "kumar",
      email: "santhosh@gmail.com",
      subscription_status: "Active",
      team_name: "King",
      user_status: true,
    },
    {
      id: "4",
      first_name: "Dhivya",
      last_name: "Dhivya",
      email: "dhivya@gmail.com",
      subscription_status: "Active",
      team_name: "Tigers",
      user_status: true,
    },
    {
      id: "5",
      first_name: "Sugu",
      last_name: "Surya",
      email: "amit@gmail.com",
      subscription_status: "Active",
      team_name: "CSK",
      user_status: true,
    },
  ];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [tabName, setTabName] = useState("coach");
  const [datas, setDatas] = useState(coachData);
  const [modalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState("");
  const handlePageChange = async (page) => {
    setCurrentPage(page);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = datas.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (tabName === "coach") {
      setDatas(coachData);
    } else if (tabName === "staff") {
      setDatas(staffData);
    } else if (tabName === "player") {
      setDatas(playerData);
    } else {
      setDatas(fanData);
    }
  }, [tabName]);

  const renderModalPopup = () => {
    return (
      <div>
        {modalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Team Name
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Responsibility
                      </th>
                      <th scope="col" class="px-6 py-4">
                        User Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-3">{items.team_name}</td>
                      <td className="px-6 py-3">san</td>
                      <td className="px-6 py-3">
                        <input
                          type="checkbox"
                          role="switch"
                          className={`pearl ${isChecked ? "checked" : ""}`}
                          onChange={handleCheckboxChange}
                          checked={items.user_status}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      onClick={() => setModalOpen(false)}
                    >
                      Close
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
    <div className="grow">
      <div className="flex sm:justify-end justify-center sm:px-4 sm:py-6  sm:my-0 my-2">
        <Dropdown />
      </div>
      <h5 className="border-t p-4">Users</h5>

      <div className="border mx-3 my-2 h-min">
        <div className="sm:flex mx-6 justify-between border-b py-3 items-center">
          <div className="sm:mb-0 mb-1">
            <div className="text-center text-sm">
              <div className="flex border items-center rounded-3xl">
                <span
                  className={`tab ${tabName === "coach" ? "active" : ""}`}
                  onClick={() => setTabName("coach")}
                >
                  Coaches
                </span>
                <span
                  className={`tab ${tabName === "staff" ? "active" : ""}`}
                  onClick={() => setTabName("staff")}
                >
                  Staffs
                </span>
                <span
                  className={`tab ${tabName === "player" ? "active" : ""}`}
                  onClick={() => setTabName("player")}
                >
                  Players
                </span>
                <span
                  className={`tab ${tabName === "fan" ? "active" : ""}`}
                  onClick={() => setTabName("fan")}
                >
                  Fans
                </span>
              </div>
            </div>
          </div>
          <div className="sm:flex items-center">
            <SearchBar />
            <div className="flex justify-center sm:my-0 my-1">
              <button className="user-status px-3 py-2 ms-3 flex items-center rounded-md">
                <AiOutlineIdcard className="button-icon" />
                User Status
              </button>
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
                  First Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Email
                </th>
                {tabName === "coach" && (
                  <th scope="col" className="px-6 py-4">
                    Subscription Status
                  </th>
                )}
                {(tabName === "staff" || tabName === "coach") && (
                  <th scope="col" className="px-6 py-4">
                    Team Details
                  </th>
                )}
                {tabName === "player" && (
                  <>
                    <th scope="col" className="px-6 py-4">
                      Team Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Jersey #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Batting
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Throwing
                    </th>
                    <th scope="col" className="px-6 py-4">
                      User Status
                    </th>
                  </>
                )}
                {tabName === "fan" && (
                  <>
                    <th scope="col" className="px-6 py-4">
                      Team Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Subscription Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      User Status
                    </th>
                  </>
                )}
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
                    <td className="px-6 py-3">{item.first_name}</td>
                    <td className="px-6 py-3">{item.last_name}</td>
                    <td className="px-6 py-3">{item.email}</td>
                    {tabName === "coach" && (
                      <td className="px-6 py-3">{item.subscription_status}</td>
                    )}
                    {tabName === "player" && (
                      <>
                        <td className="px-6 py-3">{item.team_name}</td>
                        <td className="px-6 py-3">{item.jersey_no}</td>
                        <td className="px-6 py-3">{item.batting}</td>
                        <td className="px-6 py-3">{item.throwing}</td>
                        <td className="px-6 py-3">{item.user_status}</td>
                      </>
                    )}
                    {tabName === "fan" && (
                      <>
                        <td className="px-6 py-3">
                          {item.subscription_status}
                        </td>
                        <td className="px-6 py-3">{item.user_status}</td>
                      </>
                    )}
                    {(tabName === "coach" || tabName === "staff") && (
                      <td className="px-6 py-3">
                        <button
                          className="view-button px-3 py-1 rounded-md"
                          onClick={() => {
                            setModalOpen(true);
                            setItems(item);
                          }}
                        >
                          View
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {renderModalPopup()}
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

export default UserList;
