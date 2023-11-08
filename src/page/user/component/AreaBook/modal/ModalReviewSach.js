import { Badge, Modal } from "antd";
import { COLOR } from "page/user/shareComponent/constant";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ReviewContent from "./components/ReviewContent";
import ReviewHeading from "./components/ReviewHeading";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ModalReviewSach = ({ data, open = false, onReview, title }) => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(
      yup.object().shape({
        quantity: yup
          .number()
          .required("Please input")
          .typeError("Number")
          .min(1)
          .max(99),
      })
    ),
  });

  const addToCart = (data) => {
    toast.error("Chức năng đang phát triển");
  };

  const handleChangeQuantity = (type) => {
    let quantity = getValues("quantity");
    switch (type) {
      case "plus":
        return setValue("quantity", ++quantity);
      case "minas":
        return setValue("quantity", --quantity);
      default:
        return;
    }
  };

  const onCancel = () => {
    onReview((prev) => {
      return { open: false, data: null };
    });
  };
  return (
    <Modal
      className="!w-[90%] md:!w-[80%] xl:!w-[70%] 2xl:!w-[50%]"
      open={open}
      onCancel={onCancel}
      footer={null}
      title={title}
    >
      <form
        className="grid grid-cols-2 gap-[20px]"
        onSubmit={handleSubmit(addToCart)}
      >
        <div className="w-full">
          <img src={data?.hinhAnh} className="w-full h-full" />
        </div>
        <div className="w-full bg-[#f3f3f3] p-[15px] flex flex-col justify-between h-full">
          <ReviewContent data={data} />
          <div>
            <div className="flex items-center my-[10px]">
              <h5
                style={{
                  color: `${COLOR.primaryColor}`,
                  marginRight: "10px",
                }}
              >
                Số lượng
              </h5>
              <div className="flex items-center">
                <button
                  type="button"
                  className="bg-[#dcdbdb] w-[35px] h-[35px] flex items-center justify-center"
                  onClick={() => handleChangeQuantity("minas")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                </button>
                <input
                  className="bg-[white] w-[35px] h-[35px] text-center"
                  {...register("quantity")}
                  onError={errors["quantity"]}
                />
                <button
                  type="button"
                  className="bg-[#dcdbdb] w-[35px] h-[35px] flex items-center justify-center"
                  onClick={() => handleChangeQuantity("plus")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </button>
              </div>
              {errors["quantity"] && (
                <span className="text-[red] ml-[10px] text-[10px]">
                  {errors["quantity"].message}
                </span>
              )}
            </div>
            <button
              className="text-[#fff] w-full p-[10px] rounded-[5px] flex items-center justify-center"
              style={{ backgroundColor: `${COLOR.primaryColor}` }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ModalReviewSach;
