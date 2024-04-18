import React from "react";
import { IoSearch, IoCloseCircleOutline } from "react-icons/io5";

type props = {
  value: string;
  onChange: (text: any) => void;
  clearButton: (text: any) => void;
};
const SearchBar = ({ value, onChange, clearButton }: props) => {
  return (
    <div className="sm:w-96 flex items-center rounded-full px-3 light-grey h-10">
      <IoSearch style={{ height: "22px", width: "22px" }} />
      <input
        className="w-96 light-grey h-10 text-black px-2 text-sm"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <IoCloseCircleOutline
        style={{ height: "22px", width: "22px" }}
        onClick={clearButton}
      />
    </div>
  );
};

export default SearchBar;
