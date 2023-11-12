import { Badge, Modal } from "antd";
import { COLOR } from "page/user/shareComponent/constant";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ReviewContent from "./components/ReviewContent";
import ReviewHeading from "./components/ReviewHeading";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useGetDetailBook from "page/admin/page/RoomManagement/hook/useGetDetailBook";
import useLoadingEffect from "fuse/hook/useLoadingEffect";
import { useNavigate } from "react-router-dom";

const ModalReviewSach = ({ data, open = false, onReview, title }) => {
  const navigate = useNavigate();

  const { sachDataDetail, isDataDetailLoading, fetchData, isFetching } =
    useGetDetailBook("0", "0", data?._id);

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      soLuong: 1,
    },
    resolver: yupResolver(
      yup.object().shape({
        soLuong: yup
          .number()
          .required("Please input")
          .min(1, "Số lượng phải lớn hơn 0")
          .max(
            10,
            "Không được thuê quá 10 cuốn sách. Liên hệ:xxx để được tư vấn "
          ),
      })
    ),
  });

  const addToCart = (data) => {
    if (data?.soLuong > sachDataDetail.soLuong) {
      toast.error(
        `Số lượng không đủ. Chỉ còn ${sachDataDetail.soLuong} quyển :((`
      );
    } else {
      // toast.error("Chức năng đang phát triển");
      navigate("/cart/123213123");
    }
  };

  const handleChangeQuantity = (type) => {
    let soLuong = getValues("soLuong");
    switch (type) {
      case "plus":
        return setValue("soLuong", ++soLuong);
      case "minas":
        return setValue("soLuong", --soLuong);
      default:
        return;
    }
  };

  const onCancel = () => {
    onReview((prev) => {
      return { open: false, data: null };
    });
  };

  useLoadingEffect(isDataDetailLoading);

  return (
    <Modal
      className="!w-[90%] md:!w-[80%] lg:!w-[80%] xl:!w-[70%] 2xl:!w-[60%]"
      open={open}
      onCancel={onCancel}
      footer={null}
      title={title}
    >
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-[20px]"
        onSubmit={handleSubmit(addToCart)}
      >
        <div className="w-full">
          <img src={sachDataDetail?.hinhAnh?.url} className="w-full h-full" />
        </div>
        <div className="w-full bg-[#f3f3f3] p-[15px] flex flex-col justify-between h-full">
          <ReviewContent data={sachDataDetail} />
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
                  {...register("soLuong")}
                  onError={errors["soLuong"]}
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
              {errors["soLuong"] && (
                <span className="text-[red] ml-[10px] text-[10px]">
                  {errors["soLuong"].message}
                </span>
              )}
            </div>
            <button
              disabled={sachDataDetail?.soLuong < 1}
              className="text-[#fff] w-full p-[10px] rounded-[5px] flex items-center justify-center"
              style={{
                backgroundColor: `${
                  sachDataDetail?.soLuong > 0 ? COLOR.primaryColor : "gray"
                }`,
              }}
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
