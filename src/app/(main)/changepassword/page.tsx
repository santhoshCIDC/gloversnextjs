"use client";
import "./style.css";
import React, { useState } from "react";
import Dropdown from "@/components/Dropdown";
import { useRouter } from "next/navigation";
import { useChangePasswordMutation } from "@/redux/services/AuthService";
import Utility from "@/utils/Utility";
import ButtonLoading from "@/components/ButtonLoading";

const ChangePassword = () => {
  const route = useRouter();
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onClickUpdate = async () => {
    if (oldPassword.trim().length === 0) {
      Utility.toastMessage("Please enter old password");
    } else if (newPassword.trim().length === 0) {
      Utility.toastMessage("Please enter new password");
    } else if (!Utility.validatePassword(newPassword.trim())) {
      Utility.toastMessage("Please enter valid new password");
    } else if (confirmPassword.trim().length === 0) {
      Utility.toastMessage("Please enter Confirm password");
    } else if (!Utility.validatePassword(confirmPassword.trim())) {
      Utility.toastMessage("Please enter valid confirm password");
    } else if (newPassword.trim() !== confirmPassword.trim()) {
      Utility.toastMessage("New and Confirm passwords are not matched");
    } else {
      let changePasswordReq = {
        old_password: oldPassword.trim(),
        new_password: newPassword.trim(),
        confirm_password: confirmPassword.trim(),
      };
      const res = await changePassword(changePasswordReq).unwrap();
      if (res?.code === 0) {
        Utility.toastMessage("Password has been changed");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        Utility.toastMessage(res?.message);
      }
    }
  };
  return (
    <div className="grow">
      <div className="md:flex justify-end sm:px-4 sm:py-6">
        <Dropdown />
      </div>
      <h5 className="border-y p-4">Change Password</h5>
      <div className="sm:grid grid-cols-2">
        <div className="light-grey m-5 p-7 rounded-md">
          <h5 className="labelStyle">Old Password</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm rounded-md"
            value={oldPassword}
            onChange={(text) => setOldPassword(text.target.value)}
          />
          <h5 className="labelStyle">New Password</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm rounded-md"
            value={newPassword}
            onChange={(text) => setNewPassword(text.target.value)}
          />
          <h5 className="labelStyle">Confirm Password</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm rounded-md"
            value={confirmPassword}
            onChange={(text) => setConfirmPassword(text.target.value)}
          />
          <div className="flex">
            <ButtonLoading
              loading={isLoading}
              btnClassName="updateButton px-3 py-1 rounded-md ms-3"
              onClickButton={() => onClickUpdate()}
              buttonLabel="Update"
            />
            {/* <button
              className="updateButton px-3 py-1 rounded-md ms-3"
              onClick={() => onClickUpdate()}
            >
              Update
            </button> */}
            <button
              className="closeButton px-3 py-1 rounded-md ms-3"
              onClick={() => route.back()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
