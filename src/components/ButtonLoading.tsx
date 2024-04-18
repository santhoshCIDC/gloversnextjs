import React from "react";
import { Bars } from "react-loader-spinner";

type props = {
  onClickButton: () => void;
  loading: boolean;
  loadingLabel: string;
  buttonLabel: string;
};

const ButtonLoading = ({
  onClickButton,
  loading,
  loadingLabel,
  buttonLabel,
}: props) => {
  return (
    <button
      className="login-btn w-full rounded-md py-2 mt-3"
      onClick={onClickButton}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <Bars
            height="25"
            width="25"
            color="#FFFFFF"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <span>{buttonLabel}</span>
      )}
    </button>
  );
};

export default ButtonLoading;
