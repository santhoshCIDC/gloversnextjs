"use client";
import Dropdown from "@/components/Dropdown";
import SeasonModal from "@/components/SeasonModal";
import Tooltip from "@/components/Tooltip";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PiPencilDuotone } from "react-icons/pi";
const Season = () => {
  const data = [
    { id: "1", season_name: "Winter", status: "Active" },
    { id: "2", season_name: "Winter 20246", status: "Active" },
    { id: "3", season_name: "Winter 2025-2023", status: "Active" },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  return (
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
              <span className="light-grey px-2 cursor-pointer py-2">
                Create Season
              </span>
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
                  Season
                </th>
                <th scope="col" class="px-6 py-4">
                  Update
                </th>
                <th scope="col" class="px-6 py-4">
                  Delete
                </th>
                <th scope="col" class="px-6 py-4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
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
                    <td className="px-6 py-3">{item.season_name}</td>
                    <td
                      className="px-6 py-3"
                      onClick={() => setModalOpen(true)}
                    >
                      <Tooltip
                        icon={
                          <PiPencilDuotone className="seasonIconSize cursor-pointer" />
                        }
                        text={"Edit"}
                      />
                    </td>
                    <td className="px-6 py-3">
                      <Tooltip
                        icon={
                          <MdDeleteForever className="seasonIconSize cursor-pointer" />
                        }
                        text={"Delete"}
                      />
                    </td>
                    <td className="px-6 py-3">{item.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <SeasonModal
            modalOpen={modalOpen}
            confirmButtonText={"Update"}
            cancelButtonText={"Close"}
            onCancelClick={() => setModalOpen(false)}
          >
            <div className="flex flex-col">
              <div className="flex">
                <div>Season Name:</div>
                <input className="custom-date-picker"></input>
              </div>
              <div className="flex">
                <div>Start Date:</div>
                <input className="custom-date-picker"></input>
              </div>
              <div className="flex">
                <div>Season Name:</div>
                <input className="custom-date-picker"></input>
              </div>
            </div>
          </SeasonModal>
        </div>
      </div>
    </div>
  );
};

export default Season;
