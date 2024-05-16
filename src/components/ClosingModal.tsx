import Image from "next/image";
import React from "react";

type props = {
  popTitle: string;
  popContent: string;
  popBoldContent: string;
  buttonText: string;
  buttonOnClick: () => void;
  cancelButtonOnClick: () => void;
  image: any;
  disabled: boolean;
};

const ClosingModal = ({
  popTitle,
  popContent,
  popBoldContent,
  buttonText,
  buttonOnClick,
  cancelButtonOnClick,
  image,
  disabled,
}: props) => {
  return (
    <div>
      <div className="fixed z-20  inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="sm:flex sm:items-start">
              <div>
                {image && (
                  <Image
                    src={image}
                    className="mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full sm:mx-0 sm:h-14 sm:w-14"
                    alt=""
                  />
                )}
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium">{popTitle}</h3>
                <div className="mt-2 flex sm:flex-row flex-col">
                  <p className="text-sm leading-5 flex">{popContent}</p>
                  <p className="text-sm leading-5 ms-1 font-bold">
                    {popBoldContent}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  className={`${
                    disabled ? "cursor-not-allowed" : undefined
                  } inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5`}
                  onClick={buttonOnClick}
                  disabled={disabled}
                >
                  {buttonText}
                </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={cancelButtonOnClick}
                >
                  Cancel
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingModal;
