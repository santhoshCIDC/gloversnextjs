import Dropdown from "@/components/Dropdown";
import React from "react";
import "./style.css";

const Settings = () => {
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
                <input type="text" className="border my-6 w-7 px-1" />
                <input type="text" className="border my-6 w-7 px-1" />
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
