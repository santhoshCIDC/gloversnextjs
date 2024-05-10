import React, { useState } from "react";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { ImPointRight } from "react-icons/im";
import { LuPlusSquare } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { capitalize } from "lodash";
import SeasonModal from "@/components/SeasonModal";
// import "rsuite/dist/rsuite.css";
import Select from "react-select";
import {
  Button,
  ButtonToolbar,
  Popover,
  SelectPicker,
  Stack,
  Whisper,
} from "rsuite";
import {
  useCreatePromoCodeMutation,
  useDeletePromoCodeMutation,
  useLazyPromoCodeListQuery,
} from "@/redux/services/SubscriptionService";
import Utility, { ToastMessage } from "@/utils/Utility";

const Promo = ({ data }: any) => {
  let initialData = {
    promoCode: "",
    discountType: null,
    discount: "",
    durationType: null,
    description: "",
    duration_in_months: "",
  };
  const [promoCodeList, {}] = useLazyPromoCodeListQuery();
  const [createPromoCode, {}] = useCreatePromoCodeMutation();
  const [deletePromoCode, {}] = useDeletePromoCodeMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const [addPromoState, setAddPromoState] = useState(initialData);

  let disabled =
    addPromoState?.promoCode !== "" &&
    addPromoState?.discount !== "" &&
    addPromoState?.discountType !== null &&
    addPromoState?.durationType !== null;
  console.log(addPromoState);

  const onClickSubmit = async () => {
    let promoCodeReq = {
      name: addPromoState?.promoCode,
      type: addPromoState?.discountType?.value,
      amount: addPromoState?.discount,
      duration: addPromoState?.durationType?.value,
      duration_in_months:
        addPromoState?.durationType === "repeating"
          ? addPromoState?.duration_in_months
          : undefined,
      description:
        addPromoState.description.length > 0
          ? addPromoState?.description
          : undefined,
    };

    const res = await createPromoCode(promoCodeReq).unwrap();
    if (res?.code === 0) {
      setModalOpen(false);
      promoCodeList({});
      Utility.toastMessage("Promo code was Created");
    } else {
      Utility.toastMessage(res?.message);
    }
  };

  const handleDelete = async (item: any) => {
    const res = await deletePromoCode({ id: item.id }).unwrap();
    if (res?.code === 0) {
      promoCodeList({});
      Utility.toastMessage("Promo code was Deleted");
    } else {
      Utility.toastMessage(res?.message);
    }
  };

  return (
    <div className="m-6">
      <div className="sm:grid sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <div
          className={`addPromo_Button rounded-lg cursor-pointer ${
            data?.data?.length === 0 ? "h-32" : undefined
          }`}
          onClick={() => setModalOpen(true)}
        >
          <LuPlusSquare />
          <h5 className="ms-1">Add Promo</h5>
        </div>
        {data?.data?.map((item: any) => {
          return (
            <div
              key={item.id}
              className="border p-4 h-full rounded-lg sm:my-0 my-3 grid justify-normal"
            >
              <div className="flex pb-3 items-center">
                <FaCircleDollarToSlot
                  color="#005dab"
                  style={{ height: "40px", width: "40px" }}
                />
                <div className="flex flex-col m-auto items-center">
                  <h5 className="text-xl font-bold">{item.promo_code?.code}</h5>
                  <div className=" flex md:flex-row flex-col items-center">
                    <h5 className="font-semibold flex">
                      save {item.amount} {item.type === "amount" ? "$" : "%"}
                    </h5>
                    {item.duration_in_months && (
                      <h6 className="text-sm font-sans">{`(Valid for ${item.duration_in_months} month)`}</h6>
                    )}
                  </div>
                  <h5 className="font-normal ms-1">
                    {capitalize(item.duration)}
                  </h5>
                </div>
                <Whisper
                  placement="bottom"
                  trigger="click"
                  speaker={
                    <Popover
                      className="cursor-pointer hover:bg-slate-50"
                      arrow={false}
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </Popover>
                  }
                >
                  <Button>
                    <HiOutlineDotsVertical
                      className="cursor-pointer"
                      color="#005dab"
                      style={{ height: "30px", width: "30px" }}
                    />
                  </Button>
                </Whisper>
              </div>
              {item.description && (
                <div className="flex pt-3 border-t">
                  <div>
                    <ImPointRight
                      color="green"
                      style={{ height: "18px", width: "18px" }}
                    />
                  </div>
                  <span className="ms-2">{item.description}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {modalOpen && (
        <SeasonModal
          modalOpen={modalOpen}
          confirmButtonText={"Create"}
          cancelButtonText={"Close"}
          onCancelClick={() => {
            setModalOpen(false);
            setAddPromoState({
              ...addPromoState,
              promoCode: "",
              discountType: null,
              discount: "",
              durationType: null,
              description: "",
              duration_in_months: "",
            });
          }}
          onConfirmClick={() => {
            onClickSubmit();
          }}
          confirmButtonColor="login-btn"
          confirmButtonHoverColor="login-btn"
          disabled={disabled ? false : true}
        >
          <span className="flex items-center justify-center mb-5 underline">
            {`Create a new promo code`}
          </span>
          <div className="flex flex-col mx-6">
            <div className="flex items-center">
              <span className="flex-1">Promo Code</span>
              <input
                value={addPromoState?.promoCode}
                className="custom-date-picker"
                placeholder="Enter your code"
                onChange={(text) => {
                  setAddPromoState({
                    ...addPromoState,
                    promoCode: text.target.value,
                  });
                }}
              />
            </div>
            <div className="flex items-center mt-3">
              <span className="flex-1">Discount Type</span>

              <Select
                placeholder="Select your Type"
                value={addPromoState?.discountType}
                onChange={(value) => {
                  setAddPromoState({
                    ...addPromoState,
                    discountType: value,
                  });
                }}
                options={[
                  {
                    label: "Percentage Discount",
                    value: "percentage",
                  },
                  { label: "Amount Discount", value: "amount" },
                ]}
              />
            </div>
            {addPromoState?.discountType?.value === "percentage" && (
              <div className="flex items-center mt-3">
                <span className="flex-1">Percentage</span>
                <div
                  className="flex border-solid border rounded items-center"
                  style={{
                    height: "38px",
                    width: "180px",
                    borderColor: "#ced4da",
                  }}
                >
                  <span className="px-2 text-sm">%</span>
                  <input
                    placeholder="Enter your percentage"
                    className="text-sm overflow-hidden"
                    value={addPromoState?.discount}
                    onChange={(text) => {
                      setAddPromoState({
                        ...addPromoState,
                        discount: text.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            )}
            {addPromoState?.discountType?.value === "amount" && (
              <div className="flex items-center mt-3">
                <span className="flex-1">Amount</span>
                <div
                  className="flex border-solid border rounded items-center"
                  style={{
                    height: "38px",
                    width: "180px",
                    borderColor: "#ced4da",
                  }}
                >
                  <span className="px-2 text-sm">$</span>
                  <input
                    className="text-sm overflow-hidden"
                    placeholder="Enter your amount"
                    value={addPromoState?.discount}
                    onChange={(text) => {
                      setAddPromoState({
                        ...addPromoState,
                        discount: text.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            )}
            <div className="flex items-center mt-3">
              <span className="flex-1">Duration</span>

              <Select
                placeholder="Select your Type"
                value={addPromoState?.durationType}
                onChange={(value) => {
                  setAddPromoState({
                    ...addPromoState,
                    durationType: value,
                  });
                }}
                options={[
                  { label: "Forever", value: "forever" },
                  { label: "Once", value: "once" },
                  { label: "Repeating", value: "repeating" },
                ]}
              />
            </div>
            {addPromoState?.durationType?.value === "repeating" && (
              <div className="flex items-center mt-3">
                <span className="flex-1">Number of month</span>
                <input
                  className="custom-date-picker"
                  placeholder="Enter your month"
                  value={addPromoState?.duration_in_months}
                  onChange={(text) => {
                    setAddPromoState({
                      ...addPromoState,
                      duration_in_months: text.target.value,
                    });
                  }}
                />
              </div>
            )}
            <div className="flex items-center mt-3">
              <span className="flex-1">Description</span>
              <input
                className="custom-date-picker"
                placeholder="Decription(optional)"
                value={addPromoState?.description}
                onChange={(text) => {
                  setAddPromoState({
                    ...addPromoState,
                    description: text.target.value,
                  });
                }}
              />
            </div>
          </div>
        </SeasonModal>
      )}
      {ToastMessage()}
    </div>
  );
};

export default Promo;
