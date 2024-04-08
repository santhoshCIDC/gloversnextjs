"use client";
import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import "./style.css";
import { BsFileEarmarkText } from "react-icons/bs";
import Pricing from "./Pricing";
import Promo from "./Promo";
import "react-datepicker/dist/react-datepicker.css";
import { Transaction } from "./Transaction";
import DatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
const SubscriptionPlan = () => {
  const [tabName, setTabName] = useState("pricing");
  const [fromSelectedDate, setFromSelectedDate] = useState();
  const [toSelectedDate, setToSelectedDate] = useState();
  return (
    <div className="grow">
      <div className="flex sm:justify-end justify-center sm:px-4 sm:py-6  sm:my-0 my-2">
        <Dropdown />
      </div>
      <h5 className="border-t p-4">Subscriptions</h5>
      <div className="border mx-3 my-2 h-min">
        <div className="sm:flex mx-6 justify-between border-b py-3 items-center">
          <div className="sm:mb-0 mb-1">
            <div className="text-center text-sm flex justify-center">
              <div className="flex border items-center rounded-3xl  max-w-fit">
                <span
                  className={`tab ${tabName === "pricing" ? "active" : ""}`}
                  onClick={() => setTabName("pricing")}
                >
                  Pricing
                </span>
                <span
                  className={`tab ${tabName === "promo" ? "active" : ""}`}
                  onClick={() => setTabName("promo")}
                >
                  Promo
                </span>
                <span
                  className={`tab ${tabName === "transaction" ? "active" : ""}`}
                  onClick={() => setTabName("transaction")}
                >
                  Transcation
                </span>
              </div>
            </div>
          </div>
          {tabName === "transaction" && (
            <div>
              <div className="sm:flex items-center">
                <div>
                  <SearchBar />
                </div>

                <div
                  className="relative items-center flex ms-3 max-w-fit"
                  style={{ margin: "auto", paddingLeft: "10px" }}
                >
                  <DatePicker
                    selected={fromSelectedDate}
                    onChange={(date) => setFromSelectedDate(date)}
                    selectsStart
                    placeholderText={"From Date"}
                    dateFormat="MM/dd/yyyy"
                    className="custom-date-picker"
                    autoComplete="off"
                    maxDate={toSelectedDate || null}
                  />
                  <MdCalendarMonth
                    className="absolute"
                    style={{ right: "20px", height: "20px", width: "20px" }}
                  />
                </div>

                <div
                  className="relative items-center flex max-w-fit"
                  style={{ margin: "auto", paddingLeft: "10px" }}
                >
                  <DatePicker
                    selected={toSelectedDate}
                    onChange={(date) => setToSelectedDate(date)}
                    selectsStart
                    placeholderText={"To Date"}
                    dateFormat="MM/dd/yyyy"
                    className="custom-date-picker"
                    autoComplete="off"
                    minDate={fromSelectedDate || null}
                  />
                  <MdCalendarMonth
                    className="absolute"
                    style={{ right: "20px", height: "20px", width: "20px" }}
                  />
                </div>
                <div className="flex justify-center my-2 sm:my-0">
                  <button
                    className={`px-3 py-1 rounded-md ms-3 ${
                      fromSelectedDate && toSelectedDate
                        ? "clearButton"
                        : "disabledButton"
                    }`}
                    disabled={
                      !fromSelectedDate && !toSelectedDate ? true : false
                    }
                    onClick={() => {}}
                  >
                    <IoMdSearch style={{ height: "25px", width: "25px" }} />
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md ms-3 ${
                      fromSelectedDate || toSelectedDate
                        ? "clearButton"
                        : "disabledButton"
                    }`}
                    disabled={
                      !fromSelectedDate && !toSelectedDate ? true : false
                    }
                    onClick={() => {
                      setFromSelectedDate("");
                      setToSelectedDate("");
                    }}
                  >
                    Clear
                  </button>
                </div>
                <div className="flex justify-center sm:my-0 my-1">
                  <button className="export-report px-3 py-2 ms-3 flex items-center rounded-md">
                    <BsFileEarmarkText className="button-icon" />
                    Export Report
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {tabName === "pricing" && (
          <>
            <Pricing
              title={"Coach"}
              data={[
                {
                  id: "1",
                  pass_name: "Annual Pass",
                  amount: "150.55",
                },
                {
                  id: "2",
                  pass_name: "Season Pass",
                  amount: "60.55",
                },
                {
                  id: "3",
                  pass_name: "Monthly Pass",
                  amount: "40.55",
                },
              ]}
            />
            <Pricing
              title={"Fan"}
              data={[
                {
                  id: "1",
                  pass_name: "Annual Pass",
                  amount: "100.55",
                },
                {
                  id: "2",
                  pass_name: "Season Pass",
                  amount: "50.55",
                },
                {
                  id: "3",
                  pass_name: "Monthly Pass",
                  amount: "30.55",
                },
              ]}
            />
          </>
        )}
        {tabName === "promo" && (
          <>
            <Promo />
          </>
        )}
        {tabName === "transaction" && (
          <>
            <Transaction />
          </>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPlan;
