import React from "react";
import { Bars } from "react-loader-spinner";

type props = {
  onClickButton: () => void;
  loading: boolean;
  buttonLabel: string;
  btnClassName: string;
};

const ButtonLoading = ({
  onClickButton,
  loading,
  buttonLabel,
  btnClassName,
}: props) => {
  return (
    <button className={btnClassName} onClick={onClickButton}>
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
