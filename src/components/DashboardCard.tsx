import React from "react";

const DashboardCard = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={`${item.boxStyle} h-32 flex justify-between items-center px-10 my-2 mx-3`}
          >
            <div className="flex flex-col">
              <span className="text-3xl text-white">{item.value}</span>
              <h1 className="text-white text-lg">{item.text}</h1>
            </div>
            <div>{item.icons}</div>
          </div>
        );
      })}
    </>
  );
};

export default DashboardCard;
