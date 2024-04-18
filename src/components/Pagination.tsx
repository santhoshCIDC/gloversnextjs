import React from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-4 mx-1 rounded-md pagination ${
              currentPage === i ? "active" : "bg-white"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={`px-4 mx-1 rounded-md pagination ${
                currentPage === i ? "active" : "bg-white"
              }`}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(
          <span key={-1} className="px-4 mx-1">
            ...
          </span>
        );
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(
          <span key={-1} className="px-4 mx-1">
            ...
          </span>
        );
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={`px-4 mx-1 rounded-md pagination ${
                currentPage === i ? "active" : "bg-white"
              }`}
            >
              {i}
            </button>
          );
        }
      } else {
        pageNumbers.push(
          <span key={-1} className="px-4 mx-1">
            ...
          </span>
        );
        for (let i = currentPage - 1; i <= currentPage + 2; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={`px-4 mx-1 rounded-md pagination ${
                currentPage === i ? "active" : "bg-white"
              }`}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(
          <span key={-2} className="px-4 mx-1">
            ...
          </span>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4 border rounded-3xl">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`px-2 mr-2 rounded-3xl light-grey ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
      >
        <FaArrowCircleLeft className="paginationIcon" />
      </button>
      {renderPageNumbers()}
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className={`px-2 ml-2 rounded-3xl light-grey ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
      >
        <FaArrowCircleRight className="paginationIcon" />
      </button>
    </div>
  );
};

export default Pagination;
