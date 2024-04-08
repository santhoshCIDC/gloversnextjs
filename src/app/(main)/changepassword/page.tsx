"use client";
import Dropdown from "@/components/Dropdown";
import React, { useState } from "react";
import "./style.css";
import { usePathname } from "next/navigation";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const path = usePathname();
  console.log("sdfdsfds", path.split("/")[1]);
  return (
    <div className="grow">
      <div className="md:flex justify-end sm:px-4 sm:py-6">
        <Dropdown />
      </div>
      <h5 className="border-y p-4">Change Password</h5>
      <div className="grid grid-cols-2">
        <div className="light-grey m-5 p-7 rounded-md">
          <h5 className="labelStyle">Old Password</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm rounded-md"
            value={oldPassword}
            onChange={(text) => setOldPassword(text)}
          />
          <h5 className="labelStyle">New Password</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm rounded-md"
            value={newPassword}
            onChange={(text) => setNewPassword(text)}
          />
          <h5 className="labelStyle">Confirm Password</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm rounded-md"
            value={confirmPassword}
            onChange={(text) => setConfirmPassword(text)}
          />
          <div className="flex">
            <button className="updateButton px-3 py-1 rounded-md ms-3">
              Update
            </button>
            <button className="closeButton px-3 py-1 rounded-md ms-3">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
