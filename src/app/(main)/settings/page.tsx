"use client";
import Dropdown from "@/components/Dropdown";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useLazyEventCreationSettingQuery } from "@/redux/services/SettingService";

const Settings = () => {
  const [evenCreation, { data: isEventCreationData }] =
    useLazyEventCreationSettingQuery();

  const [numberOfPlayers, setNumberOfPlayers] = useState("");
  const [numberOfCoaches, setNumberOfCoaches] = useState("");

  useEffect(() => {
    async function _apiCall() {
      evenCreation({});
    }
    _apiCall();
  }, []);

  useEffect(() => {
    setNumberOfPlayers(isEventCreationData?.data?.total_no_players_home_team);
    setNumberOfCoaches(
      isEventCreationData?.data?.no_of_staffs_coaches_home_team
    );
  }, [isEventCreationData]);

  return (
    <div className="grow">
      <div className="flex sm:justify-end justify-center sm:px-4 sm:py-6  sm:my-0 my-2">
        <Dropdown />
      </div>
      <h5 className="border-t p-4">Settings</h5>

      <div className="border mx-3 my-2 h-min">
        <div className="flex mx-6 justify-between border-b py-3">
          <span className="border-b-2 borderBottomColor">Event Creation</span>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-row m-6">
            <div className="flex flex-col">
              <span className="py-2 titleStyle">Type</span>
              <span className="py-6">Number of Players for team</span>
              <span className="py-6">Number of Staff + Coaches for team</span>
            </div>
            <div className="flex flex-row ml-10">
              <div className="flex flex-col">
                <span className="py-2 titleStyle">Value</span>
                <input
                  type="text"
                  className="border my-6 w-7 px-1"
                  value={numberOfPlayers}
                  onChange={(text) => setNumberOfPlayers(text.target.value)}
                />
                <input
                  type="text"
                  className="border my-6 w-7 px-1"
                  value={numberOfCoaches}
                  onChange={(text) => setNumberOfCoaches(text.target.value)}
                />
              </div>
              <div className="flex flex-col ml-10">
                <span className="py-2 titleStyle">Action</span>
                <div className="flex my-6">
                  <button className="border submitButtonStyle">Submit</button>
                  <button className="border closeButtonStyle">X</button>
                </div>
                <div className="flex my-6">
                  <button className="border submitButtonStyle">Submit</button>
                  <button className="border closeButtonStyle">X</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
