import React from "react";

const Tooltip = ({ icon, text }) => {
  return (
    <>
      <div className="group relative flex items-center text-zinc-600 text-sm font-bold w-10">
        <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-white-200 to-white-200 p-1 rounded-full cursor-pointer duration-300">
          {icon}
          <span className="text-[0px] group-hover:text-sm group-hover:pr-2 duration-300">
            {text}
          </span>
        </div>
      </div>
    </>
  );
};

export default Tooltip;
