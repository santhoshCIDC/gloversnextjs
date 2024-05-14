"use client";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import { useLazyTransactionListQuery } from "@/redux/services/SubscriptionService";
import { MESSAGE } from "@/utils/Constants";
import moment from "moment";
import React, { useEffect, useState } from "react";

export const Transaction = ({ search, fromDate, toDate, dateSearch }: any) => {
  const [
    transactionList,
    { data: isTransactionListData, isFetching: isTransactionListFetching },
  ] = useLazyTransactionListQuery();

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function _listApiCall() {
      let transactionReq = {
        limit: 10,
        offset: (currentPage - 1) * 10,
        search_keyword: search ? search : undefined,
        from_date: fromDate ? fromDate : undefined,
        end_date: toDate ? toDate : undefined,
      };
      transactionList(transactionReq);
    }
    _listApiCall();
  }, [currentPage, search, dateSearch !== true, transactionList]);

  return (
    <div>
      <div className="overflow-x-auto m-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4">
                S No.
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                Price
              </th>
              <th scope="col" className="px-6 py-4">
                Payment Method
              </th>
              <th scope="col" className="px-6 py-4">
                Subscription Type
              </th>
              <th scope="col" className="px-6 py-4">
                Transaction Date
              </th>
              <th scope="col" className="px-6 py-4">
                Renewal Date
              </th>
              <th scope="col" className="px-6 py-4">
                Account Username
              </th>
            </tr>
          </thead>
          {isTransactionListFetching ? (
            <div className="flex justify-center items-center h-96 ">
              <Loading />
            </div>
          ) : (
            <tbody>
              {isTransactionListData?.data?.map((item: any, index: any) => {
                const serialNumber =
                  (currentPage - 1) * itemsPerPage + index + 1;
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {serialNumber}
                    </th>
                    <td className="px-6 py-3">{item.username}</td>
                    <td className="px-6 py-3">{item.email}</td>
                    <td className="px-6 py-3">{`$${
                      item.data?.payment_method === "STRIPE"
                        ? item.data.amount / 100
                        : item.data.amount
                    }`}</td>
                    <td className="px-6 py-3">{item.data?.payment_method}</td>
                    <td className="px-6 py-3">
                      {item.data?.plan?.interval === "month" &&
                      item.data?.plan?.interval_count >= 2
                        ? "Season"
                        : item.data.plan.interval === "year"
                        ? "Annual"
                        : "Monthly"}
                    </td>
                    <td className="px-6 py-3">
                      {moment(item.data?.startDate).format("MM/DD/YYYY")}
                    </td>
                    <td className="px-6 py-3">
                      {moment(item.data?.endDate).format("MM/DD/YYYY")}
                    </td>
                    <td className="px-6 py-3">{item.username}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        {!isTransactionListFetching &&
          isTransactionListData?.data?.length === 0 && (
            <span className="flex justify-center items-center h-96 ">
              {MESSAGE.TRANSCATION_EMPTY_MESSAGE}
            </span>
          )}
        {!isTransactionListFetching &&
          isTransactionListData?.data !== undefined &&
          isTransactionListData?.data[0]?.list_count > 10 && (
            <div className="grid grid-cols-2">
              <div />
              <div className="ml-auto">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(
                    isTransactionListData?.data[0]?.list_count / itemsPerPage
                  )}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};
