"use client";
import React, { ReactNode, useState } from "react";

type props = {
  modalOpen: boolean;
  confirmButtonText: string;
  cancelButtonText: string;
  onCancelClick: () => void;
  onConfirmClick: () => void;
  children: ReactNode;
  confirmButtonColor: string;
  confirmButtonHoverColor: string;
};
const SeasonModal = ({
  modalOpen,
  children,
  confirmButtonText,
  onConfirmClick,
  cancelButtonText,
  onCancelClick,
  confirmButtonColor,
  confirmButtonHoverColor,
}: props) => {
  return (
    <div>
      {modalOpen && (
        <div className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-visible shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              {children}
              <div className="mt-5 sm:mt-10 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 ${confirmButtonColor} text-base leading-6 font-medium text-white shadow-sm hover:${confirmButtonHoverColor} focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5`}
                    onClick={onConfirmClick}
                  >
                    {confirmButtonText}
                  </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={onCancelClick}
                  >
                    {cancelButtonText}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeasonModal;
