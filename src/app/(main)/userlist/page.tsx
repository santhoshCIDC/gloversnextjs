"use client";
import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import "./style.css";
import Pagination from "@/components/Pagination";
import { AiOutlineIdcard, AiOutlineFileText } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import {
  useLazyCoachListQuery,
  useLazyFanListQuery,
  useLazyPlayerListQuery,
  useLazyStaffListQuery,
  useStaffResponsibilittyMutation,
  useTeamResponsibilittyMutation,
  useUpdateCoachStatusMutation,
  useUpdateFanStatusMutation,
  useUpdatePlayerStatusMutation,
  useUpdateStaffStatusMutation,
} from "@/redux/services/UserListService";
import Loading from "@/components/Loading";
import { MESSAGE } from "@/utils/Constants";
import { Toggle } from "rsuite";
import ClosingModal from "@/components/ClosingModal";
import { IMAGES } from "@/utils/SharedImages";
import Utility from "@/utils/Utility";
import { RotatingLines } from "react-loader-spinner";

const UserList = () => {
  // api call
  const [
    coachList,
    { data: isCoachListData, isFetching: isCoachListFetching },
  ] = useLazyCoachListQuery();
  const [
    staffList,
    { data: isStaffListData, isFetching: isStaffListFetching },
  ] = useLazyStaffListQuery();
  const [
    playerList,
    { data: isPlayerListData, isFetching: isPlayerListFetching },
  ] = useLazyPlayerListQuery();
  const [fanList, { data: isFanListData, isFetching: isFanListFetching }] =
    useLazyFanListQuery();
  const [updateCoachStatus, { data: isUpdateCoachStatusData }] =
    useUpdateCoachStatusMutation();
  const [updateStaffStatus, { data: isUpdateStaffStatusData }] =
    useUpdateStaffStatusMutation();
  const [updatePlayerStatus, { data: isUpdatePlayerStatusData }] =
    useUpdatePlayerStatusMutation();
  const [updateFanStatus, { data: isUpdateFanStatusData }] =
    useUpdateFanStatusMutation();
  const [
    teamResponsibility,
    { data: isTeamResponsibilityData, isLoading: isTeamResponsibilityLoading },
  ] = useTeamResponsibilittyMutation();
  const [
    staffResponsibility,
    {
      data: isStaffResponsibilityData,
      isLoading: isStaffResponsibilityLoading,
    },
  ] = useStaffResponsibilittyMutation();

  //local state
  let dataFetching =
    isCoachListFetching ||
    isStaffListFetching ||
    isPlayerListFetching ||
    isFanListFetching;
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [tabName, setTabName] = useState("coach");
  const [datas, setDatas] = useState(isCoachListData?.data);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [toggleChecked, setToggleChecked] = useState(false);
  const [toggleItem, setToggleItem] = useState({});
  const [toggleModalOpen, setToggleModalOpen] = useState(false);
  const [responsibility, setResponsibility] = useState([]);
  useEffect(() => {
    async function _usersApiCall() {
      if (tabName === "coach") {
        coachList({ search: searchText });
      } else if (tabName === "staff") {
        staffList({ search: searchText });
      } else if (tabName === "player") {
        playerList({ search: searchText });
      } else {
        fanList({ search: searchText });
      }
    }
    _usersApiCall();
  }, [
    tabName,
    searchText,
    isUpdateCoachStatusData,
    isUpdateStaffStatusData,
    isUpdatePlayerStatusData,
    isUpdateFanStatusData,
    coachList,
    staffList,
    playerList,
    fanList,
  ]);

  useEffect(() => {
    if (tabName === "coach") {
      setDatas(isCoachListData?.data);
    } else if (tabName === "staff") {
      setDatas(isStaffListData?.data);
    } else if (tabName === "player") {
      setDatas(isPlayerListData?.data);
    } else {
      setDatas(isFanListData?.data);
    }
    setCurrentPage(1);
  }, [
    tabName,
    isStaffListData,
    isPlayerListData,
    isFanListData,
    isCoachListData,
  ]);

  useEffect(() => {
    if (tabName === "coach") {
      setResponsibility(isTeamResponsibilityData?.data);
    } else if (tabName === "staff") {
      setResponsibility(isStaffResponsibilityData?.data);
    }
  }, [isTeamResponsibilityData, isStaffResponsibilityData]);

  const handlePageChange = async (page: any) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = datas?.slice(startIndex, startIndex + itemsPerPage);

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
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 relative">
                  <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Team Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Responsibility
                      </th>
                      <th scope="col" className="px-6 py-4">
                        User Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {!isStaffResponsibilityLoading &&
                      !isTeamResponsibilityLoading &&
                      responsibility?.map((items: any) => {
                        return (
                          <tr key={items._id} className="bg-white border-b">
                            <td className="px-6 py-3">{items.team_name}</td>
                            <td className="px-6 py-3">
                              <div className="flex items-center">
                                <td className="">b</td>
                                <div
                                  className={`h-3 w-3 ${
                                    items.responsibility?.b
                                      ? "active-bg-green"
                                      : "active-bg-red"
                                  }`}
                                />
                                <td className="ms-2">pc</td>
                                <div
                                  className={`h-3 w-3 ${
                                    items.responsibility?.pc
                                      ? "active-bg-green"
                                      : "active-bg-red"
                                  }`}
                                />
                                <td className="ms-2">sc</td>
                                <div
                                  className={`h-3 w-3 ${
                                    items.responsibility?.sc
                                      ? "active-bg-green"
                                      : "active-bg-red"
                                  }`}
                                />
                                <td className="ms-2">vs</td>
                                <div
                                  className={`h-3 w-3 ${
                                    items.responsibility?.vs
                                      ? "active-bg-green"
                                      : "active-bg-red"
                                  }`}
                                />
                              </div>
                            </td>
                            <td className="px-6 py-3">
                              <Toggle
                                checked={items.status}
                                onChange={() => {
                                  setToggleChecked(items.status ? false : true);
                                  setToggleItem(items);
                                  setToggleModalOpen(true);
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                {(isTeamResponsibilityLoading ||
                  isStaffResponsibilityLoading) && (
                  <div className="flex justify-center items-center h-16 ">
                    <RotatingLines
                      visible={true}
                      height="30"
                      width="30"
                      strokeColor="#005dab"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                )}
                {(
                  isStaffResponsibilityData?.data ||
                  isTeamResponsibilityData?.data
                )?.length === 0 && (
                  <span className="flex justify-center items-center h-16">
                    {MESSAGE.NO_DATA_FOUND_MESSAGE}
                  </span>
                )}
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
        <div className="text-center text-sm sm:flex responsive justify-between mx-5 my-2 items-center">
          <div
            className="flex border tab-width items-center rounded-3xl sm:w-fit"
            style={{ maxWidth: "-webkit-fill-available" }}
          >
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
          <div className="w-fit sm:flex" style={{ display: "ruby" }}>
            <SearchBar
              value={searchText}
              onChange={(text: any) => setSearchText(text.target.value)}
              clearButton={() => {
                setSearchText("");
              }}
            />
            <button className="user-status px-3 py-2 ms-0 sm:ms-3 my-1 sm:my-0 flex items-center rounded-md">
              <AiOutlineIdcard className="button-icon" />
              User Status
            </button>
            <button className="export-report px-3 py-2 ms-3 flex items-center rounded-md">
              <BsFileEarmarkText className="button-icon" />
              Export Report
            </button>
          </div>
        </div>
       
        <div className="overflow-x-auto m-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 relative">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-4">
                  S No.
                </th>
                <th scope="col" className="px-6 py-4">
                  UNIQUE ID
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
            {dataFetching ? (
              <div className="flex justify-center items-center h-96 ">
                <Loading />
              </div>
            ) : (
              <tbody>
                {displayedData?.map((item: any, index: any) => {
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
                      <td className="px-6 py-3">{item.customeid}</td>
                      <td className="px-6 py-3">{item.first_name}</td>
                      <td className="px-6 py-3">{item.last_name}</td>
                      <td className="px-6 py-3">{item.email}</td>
                      {tabName === "coach" && (
                        <td
                          className={`px-6 py-3 ${
                            item.is_subscribe
                              ? "active-green font-semibold"
                              : " text-red-600 font-semibold"
                          }`}
                        >
                          {item.is_subscribe ? "ACTIVE" : "DEACTIVE"}
                        </td>
                      )}
                      {tabName === "player" && (
                        <>
                          <td className="px-6 py-3">{item.team_name}</td>
                          <td className="px-6 py-3">{item.jersy_no}</td>
                          <td className="px-6 py-3">{item.batting_style}</td>
                          <td className="px-6 py-3">{item.throwing_style}</td>
                          <td className="px-6 py-3">
                            <Toggle
                              checked={item.status}
                              onChange={() => {
                                setToggleChecked(item.status ? false : true);
                                setToggleItem(item);
                                setToggleModalOpen(true);
                              }}
                            />
                          </td>
                        </>
                      )}
                      {tabName === "fan" && (
                        <>
                          <td className="px-6 py-3">{item.team_name}</td>
                          <td
                            className={`px-6 py-3 ${
                              item.is_subscribe
                                ? "active-green font-semibold"
                                : " text-red-600 font-semibold"
                            }`}
                          >
                            {item.is_subscribe ? "ACTIVE" : "INACTIVE"}
                          </td>
                          <td className="px-6 py-3">
                            <Toggle
                              checked={item.status}
                              onChange={() => {
                                setToggleChecked(item.status ? false : true);
                                setToggleItem(item);
                                setToggleModalOpen(true);
                              }}
                            />
                          </td>
                        </>
                      )}
                      {(tabName === "coach" || tabName === "staff") && (
                        <td className="px-6 py-3">
                          <button
                            className="view-button px-3 py-1 rounded-md"
                            onClick={async () => {
                              setModalOpen(true);
                              if (tabName === "coach") {
                                await teamResponsibility({ email: item.email });
                              } else {
                                await staffResponsibility({
                                  email: item.email,
                                });
                              }
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
            )}
          </table>
          {!dataFetching && datas?.length === 0 && (
            <span className="flex justify-center items-center h-96 ">
              {tabName === "coach"
                ? MESSAGE.COACH_EMPTY_MESSAGE
                : tabName === "staff"
                ? MESSAGE.STAFF_EMPTY_MESSAGE
                : tabName === "player"
                ? MESSAGE.PLAYER_EMPTY_MESSAGE
                : MESSAGE.FAN_EMPTY_MESSAGE}
            </span>
          )}
          {renderModalPopup()}
          {toggleModalOpen && (
            <ClosingModal
              image={toggleChecked ? IMAGES.smile_emoji : IMAGES.sad_emoji}
              popTitle="Confirm"
              popContent={
                toggleItem?.team_name === "" && toggleItem?.status
                  ? "User has not signed up, hence cannot be deactivated."
                  : `Are you sure you want to ${
                      toggleChecked ? "activate" : "deactivate"
                    }`
              }
              popBoldContent={
                toggleItem?.first_name && toggleItem?.last_name
                  ? `${toggleItem?.first_name} ${toggleItem?.last_name}`
                  : ""
              }
              buttonText="Confirm"
              disabled={
                toggleItem?.team_name === "" && toggleItem?.status
                  ? true
                  : false
              }
              cancelButtonOnClick={() => {
                setToggleModalOpen(false);
              }}
              buttonOnClick={async () => {
                setToggleModalOpen(false);
                setModalOpen(false);
                let updateStatusReq = {
                  userId: toggleItem?._id,
                  status: toggleChecked ? "ACTIVE" : "INACTIVE",
                };
                if (tabName === "coach") {
                  const res = await updateCoachStatus(updateStatusReq).unwrap();
                  if (res?.code === 0) {
                    Utility.toastMessage("Coach status updated successfully");
                  }
                } else if (tabName === "staff") {
                  const res = await updateStaffStatus(updateStatusReq).unwrap();
                  if (res?.code === 0) {
                    Utility.toastMessage("Staff status updated successfully");
                  }
                } else if (tabName === "player") {
                  const res = await updatePlayerStatus(
                    updateStatusReq
                  ).unwrap();
                  if (res?.code === 0) {
                    Utility.toastMessage("Player status updated successfully");
                  }
                } else {
                  const res = await updateFanStatus(updateStatusReq).unwrap();
                  if (res?.code === 0) {
                    Utility.toastMessage("Fan status updated successfully");
                  }
                }
              }}
            />
          )}
          {!dataFetching && datas !== undefined && datas?.length > 10 && (
            <div className="grid grid-cols-2">
              <div />
              <div className="ml-auto">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(datas?.length / itemsPerPage)}
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
