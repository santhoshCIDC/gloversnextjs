import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import { useGlobalSearchMutation } from "@/redux/services/DashboardService";
import { MESSAGE } from "@/utils/Constants";

const GlobalSearch = ({ searchText }: any) => {
  const [
    globalSearch,
    { data: isGlobalSearchData, isLoading: isGlobalSearchLoading },
  ] = useGlobalSearchMutation();

  //local state
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = async (page: any) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = isGlobalSearchData?.data?.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  useEffect(() => {
    async function _apiCall() {
      if (searchText !== "") {
        let req = {
          type: "users",
          search: searchText,
        };
        await globalSearch(req);
      }
    }
    _apiCall();
  }, [globalSearch, searchText]);

  return (
    <div className="my-5 mx-10">
      <div className="p-10 rounded-md" style={{ backgroundColor: "#f2f7ff" }}>
        {!isGlobalSearchLoading && (
          <div className="flex gap-2 mb-3">
            <span className="">{`Showing result`}</span>
            <span className="font-bold">{`${isGlobalSearchData?.data?.length}`}</span>
          </div>
        )}
        <div className="overflow-x-auto ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 relative">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-4">
                  S No.
                </th>
                <th scope="col" className="px-6 py-4">
                  First Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Email
                </th>
                <th scope="col" className="px-6 py-4">
                  Team Name
                </th>
              </tr>
            </thead>
            {isGlobalSearchLoading ? (
              <div className="flex justify-center items-center h-44">
                <Loading />
              </div>
            ) : (
              <>
                <tbody>
                  {displayedData?.map((item: any, index: any): any => {
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
                        <td className="px-6 py-3">{item.first_name}</td>
                        <td className="px-6 py-3">{item.last_name}</td>
                        <td className="px-6 py-3">{item.email}</td>
                        <td className="px-6 py-3">{item.team_name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </>
            )}
          </table>
          {!isGlobalSearchLoading && isGlobalSearchData?.data?.length === 0 && (
            <span className="flex justify-center items-center h-44 ">
              {MESSAGE.NO_DATA_FOUND_MESSAGE}
            </span>
          )}
        </div>
      </div>
      {!isGlobalSearchLoading &&
        isGlobalSearchData?.data !== undefined &&
        isGlobalSearchData?.data.length > 5 && (
          <div className="flex justify-end">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(
                isGlobalSearchData?.data?.length / itemsPerPage
              )}
              onPageChange={handlePageChange}
            />
          </div>
        )}
    </div>
  );
};

export default GlobalSearch;
