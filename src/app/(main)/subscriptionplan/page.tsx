"use client";

//imports
import React, { useEffect, useState } from "react";
import "./style.css";
import { BsFileEarmarkText } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";

//components
import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import Pricing from "./Pricing";
import Promo from "./Promo";
import { Transaction } from "./Transaction";
import {
  useLazyPromoCodeListQuery,
  useLazySubscriptionPlanQuery,
} from "@/redux/services/SubscriptionService";
import Loading from "@/components/Loading";
import Animation from "@/components/Animation";

const SubscriptionPlan = () => {
  //local state
  const [tabName, setTabName] = useState("pricing");
  const [fromSelectedDate, setFromSelectedDate] = useState();
  const [toSelectedDate, setToSelectedDate] = useState();
  const [searchText, setSearchText] = useState("");
  const [dateSearch, setDateSearch] = useState(false);

  //api call
  const [
    subscriptionPlan,
    { data: isSubscriptionPlanData, isLoading: isSubscriptionPlanLoading },
  ] = useLazySubscriptionPlanQuery();
  const [
    promoCodeList,
    { data: isPromoCodeListData, isLoading: isPromoCodeListLoading },
  ] = useLazyPromoCodeListQuery();

  useEffect(() => {
    async function _listApiCall() {
      subscriptionPlan({});
      promoCodeList({});
    }
    _listApiCall();
  }, []);

  const coachList = isSubscriptionPlanData?.data?.filter(
    (item: any) => item.type === "coach"
  );
  const fanList = isSubscriptionPlanData?.data?.filter(
    (item: any) => item.type === "fan"
  );

  return (
    <Animation>
      <div className="grow">
        <div className="flex sm:justify-end justify-center sm:px-4 sm:py-6  sm:my-0 my-2">
          <Dropdown />
        </div>
        <h5 className="border-t p-4">Subscriptions</h5>
        <div className="border mx-3 my-2 h-min relative">
          {/* <div className="lg:flex mx-6 justify-between border-b py-3 items-center ">
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
                  Transaction
                </span>
              </div>
            </div>
          </div>
          {tabName === "transaction" && (
            <div>
              <div className="lg:flex items-center">
                <div>
                  <SearchBar
                    value={searchText}
                    onChange={(text: any) => setSearchText(text.target.value)}
                    clearButton={() => {
                      setSearchText("");
                    }}
                  />
                </div>
                <div className="flex">
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
                  <div className="sm:flex justify-center my-2 sm:my-0">
                    <button
                      className={`px-3 py-1 rounded-md ms-3 ${
                        fromSelectedDate && toSelectedDate
                          ? "clearButton"
                          : "disabledButton"
                      }`}
                      disabled={
                        !fromSelectedDate && !toSelectedDate ? true : false
                      }
                      onClick={() => {
                        setDateSearch(!dateSearch);
                      }}
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
                        setDateSearch(!dateSearch);
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
            </div>
          )}
        </div> */}
          <div className="text-center text-sm sm:flex responsive justify-between mx-5 my-2 items-center">
            <div
              className="flex border tab-width items-center rounded-3xl sm:w-fit"
              style={{ maxWidth: "-webkit-fill-available" }}
            >
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
                Transaction
              </span>
            </div>
            {tabName === "transaction" && (
              <div
                className="w-fit sm:flex items-center"
                style={{ display: "ruby" }}
              >
                <SearchBar
                  value={searchText}
                  onChange={(text: any) => setSearchText(text.target.value)}
                  clearButton={() => {
                    setSearchText("");
                  }}
                />
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
                <div className="flex items-baseline mt-1 xl:mt-0">
                  <button
                    className={`px-2 py-1 rounded-md ms-3 mt-auto ${
                      fromSelectedDate && toSelectedDate
                        ? "clearButton"
                        : "disabledButton"
                    }`}
                    style={{ height: "38px" }}
                    disabled={
                      !fromSelectedDate && !toSelectedDate ? true : false
                    }
                    onClick={() => {
                      setDateSearch(!dateSearch);
                    }}
                  >
                    <IoMdSearch style={{ height: "25px", width: "25px" }} />
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md ms-3 ${
                      fromSelectedDate || toSelectedDate
                        ? "clearButton"
                        : "disabledButton"
                    }`}
                    style={{ height: "38px" }}
                    disabled={
                      !fromSelectedDate && !toSelectedDate ? true : false
                    }
                    onClick={() => {
                      setFromSelectedDate("");
                      setToSelectedDate("");
                      setDateSearch(!dateSearch);
                    }}
                  >
                    Clear
                  </button>
                  <button className="export-report px-3 py-2 ms-3 flex items-baseline rounded-md">
                    <BsFileEarmarkText className="button-icon" />
                    Export Report
                  </button>
                </div>
              </div>
            )}
          </div>
          {tabName === "pricing" && (
            <>
              {isSubscriptionPlanLoading ? (
                <div className="h-96">
                  <Loading />
                </div>
              ) : (
                <>
                  <Pricing title={"Coach"} data={coachList} />
                  <Pricing title={"Fan"} data={fanList} />
                </>
              )}
            </>
          )}
          {tabName === "promo" && (
            <>
              {isPromoCodeListLoading ? (
                <div className="h-96">
                  <Loading />
                </div>
              ) : (
                <>
                  <Promo
                    data={isPromoCodeListData}
                    loading={isPromoCodeListLoading}
                  />
                </>
              )}
            </>
          )}
          {tabName === "transaction" && (
            <Transaction
              search={searchText}
              fromDate={fromSelectedDate}
              toDate={toSelectedDate}
              dateSearch={dateSearch}
            />
          )}
        </div>
      </div>
    </Animation>
  );
};

export default SubscriptionPlan;
