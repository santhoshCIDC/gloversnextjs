"use client";
import React, { useState } from "react";
import { Pagination } from "rsuite";

export const Transaction = () => {
  const liveData = [
    {
      id: "1",
      name: "Santhosh",
      amount: "10",
      payment_method: "Strip",
      subscription_type: "Monthly",
      transaction_date: "02-18-2024",
      renewal_date: "03-18-2024",
      username: "Santhosh",
    },
    {
      id: "2",
      name: "Antony",
      amount: "30",
      payment_method: "Apple",
      subscription_type: "Season",
      transaction_date: "04-18-2024",
      renewal_date: "07-18-2024",
      username: "Antony",
    },
    {
      id: "3",
      name: "Tommy",
      amount: "10",
      payment_method: "Apple",
      subscription_type: "Yearly",
      transaction_date: "02-18-2024",
      renewal_date: "02-18-2025",
      username: "Tommy",
    },
  ];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = async (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = liveData.slice(startIndex, startIndex + itemsPerPage);
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

          <tbody>
            {displayedData !== 0 &&
              displayedData.map((item) => {
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
                    <td className="px-6 py-3">{item.name}</td>
                    <td className="px-6 py-3">$ {item.amount}</td>
                    <td className="px-6 py-3">{item.payment_method}</td>
                    <td className="px-6 py-3">{item.subscription_type}</td>
                    <td className="px-6 py-3">{item.transaction_date}</td>
                    <td className="px-6 py-3">{item.renewal_date}</td>
                    <td className="px-6 py-3">{item.username}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {displayedData?.length === 0 && (
          <div className="flex items-center justify-center pt-5">
            <span className="font-serif">
              {tabName === "live"
                ? "No live events found"
                : tabName === "recent"
                ? "No recent events found"
                : "No upcoming events found"}
            </span>
          </div>
        )}
        {liveData !== undefined && liveData.length > 10 && (
          <div className="grid grid-cols-2">
            <div />
            <div className="ml-auto">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(liveData.length / itemsPerPage)}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
