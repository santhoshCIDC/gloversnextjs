"use client";

//imports
import React, { useEffect, useState } from "react";
import { MdDeleteForever, MdCalendarMonth } from "react-icons/md";
import { PiPencilDuotone } from "react-icons/pi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

// components
import Dropdown from "@/components/Dropdown";
import Loading from "@/components/Loading";
import SeasonModal from "@/components/SeasonModal";
import Tooltip from "@/components/Tooltip";
import {
  useLazySeasonListQuery,
  useSeasonCreateMutation,
  useSeasonDeleteMutation,
} from "@/redux/services/SeasonService";
import { MESSAGE } from "@/utils/Constants";
import Utility, { ToastMessage } from "@/utils/Utility";
import ClosingModal from "@/components/ClosingModal";
import { IMAGES } from "@/utils/SharedImages";
import Animation from "@/components/Animation";

const Season = () => {
  //api call
  const [
    seasonList,
    { data: isSeasonListData, isFetching: isSeasonListFetching },
  ] = useLazySeasonListQuery();
  const [
    seasonCreate,
    { data: isSeasonCreateData, isLoading: isSeasonCreateLoading },
  ] = useSeasonCreateMutation();
  const [
    seasonDelete,
    { data: isSeasonDeleteData, isLoading: isSeasonDeleteLoading },
  ] = useSeasonDeleteMutation();

  // local state
  const [modalOpen, setModalOpen] = useState(false);
  const [startSelectedDate, setStartSelectedDate] = useState(undefined);
  const [endSelectedDate, setEndSelectedDate] = useState(undefined);
  const [seasonName, setSeasonName] = useState("");
  const [modalFrom, setmodalFrom] = useState("");
  const [seasonData, setSeasonData] = useState("");

  function _resetState() {
    setModalOpen(false);
    setSeasonName("");
    setStartSelectedDate(undefined);
    setEndSelectedDate(undefined);
    setmodalFrom("");
  }

  useEffect(() => {
    seasonList({});
    //Season Create
    if (isSeasonCreateData?.code === 0) {
      _resetState();
      Utility.toastMessage(isSeasonCreateData?.data);
    } else {
      Utility.toastMessage(isSeasonCreateData?.message);
    }
  }, [isSeasonCreateData, seasonList]);

  useEffect(() => {
    seasonList({});
    // Season Delete
    if (isSeasonDeleteData?.code === 0) {
      _resetState();
      Utility.toastMessage("Season was deleted successfully");
    } else {
      Utility.toastMessage(isSeasonDeleteData?.message);
    }
  }, [isSeasonDeleteData, seasonList]);

  const onClickEdit = (item) => {
    setModalOpen(true);
    setmodalFrom("Edit");
    setSeasonName(item.values);
    setStartSelectedDate(moment(item.start_date).format("MM/DD/YYYY"));
    setEndSelectedDate(moment(item.end_date).format("MM/DD/YYYY"));
  };

  const onClickConfirm = () => {
    if (modalFrom === "Create") {
      setTimeout(async () => {
        let seasonReq = {
          name: seasonName,
          start_date: moment(startSelectedDate).format("MM/DD/YYYY"),
          end_date: moment(endSelectedDate).format("MM/DD/YYYY"),
        };
        await seasonCreate(seasonReq);
      }, 500);
    } else {
      setTimeout(async () => {
        let seasonReq = {
          name: seasonName,
          start_date: moment(startSelectedDate).format("MM/DD/YYYY"),
          end_date: moment(endSelectedDate).format("MM/DD/YYYY"),
          season_id: seasonData?._id,
        };
        await seasonCreate(seasonReq);
      }, 500);
    }
  };

  return (
    <Animation>
      <div className="grow">
        <div className="flex sm:justify-end justify-center sm:px-4 sm:py-6  sm:my-0 my-2">
          <Dropdown />
        </div>
        <h5 className="border-t p-4">Season</h5>

        <div className="border mx-3 my-2 h-min">
          <div className="sm:flex mx-6 justify-between border-b py-3 items-center">
            <div className="sm:mb-0 mb-1">
              <span className="border-b-2 borderBottomColor">Season List</span>
            </div>
            <div className="sm:flex items-center">
              <div className="flex justify-center sm:my-0 my-1">
                <span
                  className="light-grey px-2 cursor-pointer py-2"
                  onClick={() => {
                    setModalOpen(true);
                    setmodalFrom("Create");
                  }}
                >
                  Create Season
                </span>
              </div>
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
                    Season
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Update
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Delete
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                </tr>
              </thead>
              {isSeasonListFetching ? (
                <div className="flex justify-center items-center h-96 ">
                  <Loading />
                </div>
              ) : (
                <tbody>
                  {isSeasonListData?.data?.Season?.map(
                    (item: any, index: any) => {
                      let serialNumer = index + 1;
                      return (
                        <tr
                          key={item.id}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {serialNumer}
                          </th>
                          <td className="px-6 py-3">{item.values}</td>
                          <td
                            className="px-6 py-3"
                            onClick={() => {
                              onClickEdit(item);
                              setSeasonData(item);
                            }}
                          >
                            <Tooltip
                              icon={
                                <PiPencilDuotone className="seasonIconSize cursor-pointer" />
                              }
                              text={"Edit"}
                            />
                          </td>
                          <td
                            className="px-6 py-3"
                            onClick={() => {
                              setModalOpen(true);
                              setSeasonData(item);
                            }}
                          >
                            <Tooltip
                              icon={
                                <MdDeleteForever className="seasonIconSize cursor-pointer" />
                              }
                              text={"Delete"}
                            />
                          </td>
                          <td
                            className={`px-6 py-3 ${
                              item.status === "ACTIVE"
                                ? "active-green font-semibold"
                                : "text-red font-semibold"
                            }`}
                          >
                            {item.status}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              )}
            </table>
            {!isSeasonListFetching && isSeasonListData?.data?.length === 0 && (
              <span className="flex justify-center items-center h-96 ">
                {MESSAGE.SEASONS_EMPTY_MESSAGE}
              </span>
            )}
            {modalFrom && (
              <SeasonModal
                modalOpen={modalOpen}
                confirmButtonText={`${
                  modalFrom === "Create" ? "Create" : "Update"
                }`}
                cancelButtonText={"Close"}
                onCancelClick={() => {
                  _resetState();
                }}
                onConfirmClick={() => {
                  onClickConfirm();
                }}
                confirmButtonColor="login-btn"
                confirmButtonHoverColor="login-btn"
                disabled={false}
              >
                <span className="flex items-center justify-center mb-5 underline">
                  {`${modalFrom} Season`}
                </span>
                <div className="flex flex-col mx-6">
                  <div className="flex items-center">
                    <span className="flex-1">Seasons Name:</span>
                    <input
                      className="custom-date-picker"
                      placeholder="Type a Season Name"
                      value={seasonName}
                      onChange={(text) => setSeasonName(text.target.value)}
                    />
                  </div>
                  <div className="flex items-center my-5">
                    <span className="flex-1">Start Date:</span>
                    <div
                      className="relative items-center flex max-w-fit"
                      style={{ margin: "auto", paddingLeft: "10px" }}
                    >
                      <DatePicker
                        selected={startSelectedDate}
                        onChange={(date) => setStartSelectedDate(date)}
                        placeholderText={"mm/dd/yyyy"}
                        dateFormat="MM/dd/yyyy"
                        className="custom-date-picker"
                        autoComplete="off"
                        minDate={startSelectedDate || null}
                      />
                      <MdCalendarMonth
                        className="absolute"
                        style={{ right: "20px", height: "20px", width: "20px" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="flex-1">End Date:</span>
                    <div
                      className="relative items-center flex max-w-fit"
                      style={{ margin: "auto", paddingLeft: "10px" }}
                    >
                      <DatePicker
                        selected={endSelectedDate}
                        onChange={(date) => setEndSelectedDate(date)}
                        placeholderText={"mm/dd/yyyy"}
                        dateFormat="MM/dd/yyyy"
                        className="custom-date-picker"
                        autoComplete="off"
                        minDate={startSelectedDate || null}
                      />
                      <MdCalendarMonth
                        className="absolute"
                        style={{ right: "20px", height: "20px", width: "20px" }}
                      />
                    </div>
                  </div>
                </div>
              </SeasonModal>
            )}
          </div>
          {modalOpen && !modalFrom && (
            <ClosingModal
              image={IMAGES.sad_emoji}
              popTitle="Season"
              popContent=" Are you sure want to delete the "
              popBoldContent={`${seasonData?.values}?`}
              buttonText="Delete"
              cancelButtonOnClick={() => {
                setModalOpen(false);
              }}
              buttonOnClick={() => {
                seasonDelete({ season_id: seasonData?._id });
              }}
              disabled={false}
            />
          )}
        </div>
        {ToastMessage()}
      </div>
    </Animation>
  );
};

export default Season;
