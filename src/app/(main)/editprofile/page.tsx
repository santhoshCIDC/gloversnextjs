"use client";
import Dropdown from "@/components/Dropdown";
import React, { useState } from "react";
import "./style.css";

const EditProfile = () => {
  const [email, setEmail] = useState("admin@gloversscorebooks.com");
  const [firstName, setFirstName] = useState("Admin");
  const [lastName, setLastName] = useState("Glovers");
  return (
    <div className="grow">
      <div className="md:flex justify-end sm:px-4 sm:py-6">
        <Dropdown />
      </div>
      <h5 className="border-y p-4">Edit Profile</h5>
      <div className="grid grid-cols-2">
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
            onChange={(text) => setFirstName(text)}
          />
          <h5 className="labelStyle">Last Name</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm rounded-md"
            value={lastName}
            onChange={(text) => setLastName(text)}
          />
          <h5 className="labelStyle">Email</h5>
          <input
            type="text"
            className="border mb-5 mt-2 w-full px-1 h-9 text-sm emailText rounded-md"
            disabled
            value={email}
            onChange={(text) => setEmail(text)}
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

export default EditProfile;
