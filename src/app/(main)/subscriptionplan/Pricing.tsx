import React from "react";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { ImPointRight } from "react-icons/im";

type props = {
  title: string;
  data: [];
};

const Pricing = ({ title, data }: props) => {
  return (
    <div>
      <div className="mx-6 py-5">
        <h5 className="mb-3 font-semibold text-lg">{title}</h5>
        <div className="grid sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 grid-cols-none gap-3 ">
          {data?.map((item: any) => {
            return (
              <div key={item.id} className="border p-4 h-full rounded-lg">
                <div className="flex border-b pb-3 items-center">
                  <FaCircleDollarToSlot
                    color="#005dab"
                    style={{ height: "40px", width: "40px" }}
                  />

                  <div className="flex flex-col m-auto items-center">
                    <h5 className="text-xl font-bold">{item.title}</h5>
                    <div className="flex">
                      <h5 className="font-semibold flex">$ {item.amount}</h5>
                      <h5 className="font-normal ms-1">
                        per{" "}
                        {item.title === "Annual Pass"
                          ? "year"
                          : item.title === "Season Pass"
                          ? "season"
                          : "month"}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex pt-3">
                  <div>
                    <ImPointRight
                      color="green"
                      style={{ height: "18px", width: "18px" }}
                    />
                  </div>
                  <span className="ms-2">
                    Valid for{" "}
                    {item.title === "Annual Pass"
                      ? "1 year"
                      : item.title === "Season Pass"
                      ? "3 month"
                      : "1 month"}{" "}
                    from date of subscription
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
