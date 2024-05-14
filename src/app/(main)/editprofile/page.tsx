"use client";
import Dropdown from "@/components/Dropdown";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useEditProfileMutation } from "@/redux/services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "@/redux/slices/AuthSlice";
import { useRouter } from "next/navigation";
import ButtonLoading from "@/components/ButtonLoading";
import Utility from "@/utils/Utility";

const EditProfile = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const [editProfile, { data, isLoading }] = useEditProfileMutation();
  const userDetails = useSelector((state) => state.authState?.userDetails);
  const [firstName, setFirstName] = useState(userDetails?.first_name);
  const [lastName, setLastName] = useState(userDetails?.last_name);

  useEffect(() => {
    if (data?.code === 0) {
      dispatch(profileUpdate(data?.data));
    }
  }, [data]);

  const onClickUpdate = async () => {
    if (firstName.trim().length === 0) {
      Utility.toastMessage("Please enter firstname");
    } else if (lastName.trim().length === 0) {
      Utility.toastMessage("Please enter lastname");
    } else {
      let editProfileReq = {
        first_name: firstName,
        last_name: lastName,
      };
      const res = await editProfile(editProfileReq).unwrap();
      if (res?.code === 0) {
        Utility.toastMessage("Profile has been updated successfully");
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
      <h5 className="border-y p-4">Edit Profile</h5>
      <div className="sm:grid grid-cols-2">
        <div className="light-grey m-5 p-7 rounded-md">
          <h5 className="labelStyle">Profile Picture</h5>
          <input type="file" className="text-sm py-10" />
          <button className="uploadButton px-3 py-1 rounded-md ms-3">
            Upload
          </button>
          <h5 className="labelStyle">First Name</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm rounded-md"
            value={firstName}
            onChange={(text) => setFirstName(text.target.value)}
          />
          <h5 className="labelStyle">Last Name</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm rounded-md"
            value={lastName}
            onChange={(text) => setLastName(text.target.value)}
          />
          <h5 className="labelStyle">Email</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm emailText rounded-md"
            disabled
            value={userDetails?.email}
          />
          <div className="flex gap-3 h-7">
            {/* <button
              className="updateButton px-3 py-1 rounded-md ms-3"
              onClick={() => onClickUpdate()}
            >
              Update
            </button> */}
            <ButtonLoading
              loading={isLoading}
              btnClassName="updateButton w-20 rounded-md"
              onClickButton={() => onClickUpdate()}
              buttonLabel="Update"
            />
            <button
              className="closeButton w-20 rounded-md"
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

export default EditProfile;
