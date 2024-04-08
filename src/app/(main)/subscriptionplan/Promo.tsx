import React from "react";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { ImPointRight } from "react-icons/im";
import { LuPlusSquare } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
const Promo = () => {
  const data = [
    {
      id: "1",
      promo_code: "CSADXEWHBEW",
      discount: "1",
      discount_type: "Once",
    },
    {
      id: "2",
      promo_code: "XAEASD45GDSV",
      discount: "2",
      discount_type: "Repeat",
    },
    {
      id: "3",
      promo_code: "PKINABQ7IFBI",
      discount: "3",
      discount_type: "Forever",
    },
    {
      id: "4",
      promo_code: "ETNFWIDZN1LDN",
      discount: "4",
      discount_type: "Once",
    },
    {
      id: "5",
      promo_code: "VSDGWSGWGHGHSW",
      discount: "5",
      discount_type: "Repeat",
    },
  ];
  return (
    <div className="m-6">
      <div className="sm:grid sm:grid-cols-3 gap-3">
        <div
          className={`addPromo_Button rounded-lg cursor-pointer ${
            data.length === 0 ? "h-32" : undefined
          }`}
        >
          <LuPlusSquare />
          <h5 className="ms-1">Add Promo</h5>
        </div>
        {data?.map((item) => {
          return (
            <div
              key={item.id}
              className="border p-4 h-full rounded-lg sm:my-0 my-3"
            >
              <div className="flex pb-3 items-center">
                <FaCircleDollarToSlot
                  color="#005dab"
                  style={{ height: "40px", width: "40px" }}
                />
                <div className="flex flex-col m-auto items-center">
                  <h5 className="text-xl font-bold">{item.promo_code}</h5>

                  <h5 className="font-semibold flex">save {item.discount} %</h5>
                  <h5 className="font-normal ms-1">{item.discount_type}</h5>
                </div>
                <HiOutlineDotsVertical
                  color="#005dab"
                  style={{ height: "30px", width: "30px" }}
                />
              </div>
              <div className="flex pt-3 border-t">
                <div>
                  <ImPointRight
                    color="green"
                    style={{ height: "18px", width: "18px" }}
                  />
                </div>
                <span className="ms-2">{item.discount} % discount</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Promo;
