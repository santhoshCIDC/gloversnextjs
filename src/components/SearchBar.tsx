import React from "react";
import { IoSearch, IoCloseCircleOutline } from "react-icons/io5";

type props = {
  value: string;
  onChange: (text: any) => void;
  clearButton: (text: any) => void;
};
const SearchBar = ({ value, onChange, clearButton }: props) => {
  return (
    <div className="flex items-center rounded-full px-3 light-grey h-10 mt-2 sm:mt-0">
      <IoSearch style={{ height: "22px", width: "22px" }} />
      <input
        className="sm:w-80 light-grey h-10 text-black px-2 text-sm"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <IoCloseCircleOutline
        className="cursor-pointer"
        style={{ height: "22px", width: "22px" }}
        onClick={clearButton}
      />
    </div>
  );
};

export default SearchBar;
