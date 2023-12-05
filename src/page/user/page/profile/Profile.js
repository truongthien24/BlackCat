import React from "react";
import { Icon } from "../../../../assets/icon";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ModalEditProfile } from "../../component/modal/ModalEditProfile";
import { Confirm } from "../../../../component/Confirm/Confirm";
import { useEffect } from "react";
import { COLOR } from "page/user/shareComponent/constant";
import useGetDataDonHang from "page/admin/page/donHangManagement/hook/useGetDataDonHang";

export const Profile = () => {
  // State
  const [statusOrder, setStatusOrder] = useState(0);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  // Somethings
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Effect
  useEffect(() => {}, []);

  const { userInfo } = useSelector((state) => state.home);

  const { donHangData, isDataLoading, fetchData, isFetching } =
    useGetDataDonHang("0", "0", userInfo?._id);

  // Method
  const handleEdit = () => {
    setIsOpenEdit(true);
  };

  const onStatusOrder = (status) => {
    setStatusOrder(status)
  }

  // Return
  return (
    <>
      <div className="md:pt-[150px] pb-[20px] min-h-[calc(100vh_-_300px)] flex justify-center">
        <div className="flex flex-col items-center bg-[#eaeaea] w-[95%] xl:w-[90%] 2xl:w-[70%] px-[25px] py-[20px]">
          <h3 className="mb-[30px] text-[20px]">Thông tin tài khoản</h3>
          <div className="w-full grid lg:grid-cols-5 gap-[20px]">
            <div
              className="rounded-[10px] p-[10px] col-span-2"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <div className="flex items-center justify-between">
                <img
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] rounded-[50%] ml-[10px] object-cover cursor-pointer"
                  src="https://cdn1.vectorstock.com/i/1000x1000/60/20/orange-cat-cartoon-cute-vector-45736020.jpg"
                />
                <div className="text-[13px] md:text-[14px] text-[#525252]">
                  <div className="flex justify-end">
                    Thành viên:
                    <span className="ml-[5px] text-[#000] font-[500] text-[14px] md:text-[15px]">
                      Sliver
                    </span>
                  </div>
                  <div className="flex justify-end">
                    Điểm:
                    <span
                      className="ml-[5px] font-[500] text-[14px] md:text-[15px]"
                      style={{ color: `${COLOR.secondaryColor}` }}
                    >
                      150
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-[10px] p-[10px] col-span-3 grid grid-cols-1 gap-[30px]"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke={COLOR.secondaryColor}
                      className="w-5 h-5 mr-[10px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                      />
                    </svg>
                    <span>Đơn hàng</span>
                  </div>
                  <div className="text-[13px] md:text-[14px] text-[#585858]">
                    Xem lịch sử đơn hàng
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-[10px] mt-[15px]">
                  <button className="flex relative justify-center items-center text-[13px] md:text-[14px] lg:text-[15px] rounded-[10px] py-[5px] px-[10px]" style={{backgroundColor: `${statusOrder === 0 ? COLOR.secondary : "#fff"}`}} onClick={()=> onStatusOrder(0)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="ml-[5px]">Đã xác nhận</span>
                    <span className="absolute right-[0px] top-[-10px] bg-[#e42e2e] text-[#fff] flex items-center justify-center text-[13px] w-[20px] h-[20px] rounded-[50%]">
                      {
                        (donHangData?.filter(
                          (donHang) => donHang.tinhTrang === 0
                        )).length
                      }
                    </span>
                  </button>
                  <button className="flex relative justify-center items-center text-[13px] md:text-[14px] lg:text-[15px] bg-[white] rounded-[10px] py-[5px] px-[10px]" style={{backgroundColor: `${statusOrder === 1 ? COLOR.secondary : "#fff"}`}} onClick={()=> onStatusOrder(1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    <span className="ml-[5px]">Đang giao</span>
                    <span className="absolute right-[0px] top-[-10px] bg-[#e42e2e] text-[#fff] flex items-center justify-center text-[13px] w-[20px] h-[20px] rounded-[50%]">
                      {
                        (donHangData?.filter(
                          (donHang) => donHang.tinhTrang === 1
                        )).length
                      }
                    </span>
                  </button>
                  <button className="flex relative justify-center items-center text-[13px] md:text-[14px] lg:text-[15px] bg-[white] rounded-[10px] py-[5px] px-[10px]" style={{backgroundColor: `${statusOrder === 2 ? COLOR.secondary : "#fff"}`}} onClick={()=> onStatusOrder(2)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <span className="ml-[5px]">Đánh giá</span>
                    <span className="absolute right-[0px] top-[-10px] bg-[#e42e2e] text-[#fff] flex items-center justify-center text-[13px] w-[20px] h-[20px] rounded-[50%]">
                      {
                        (donHangData?.filter(
                          (donHang) => donHang.tinhTrang === 2
                        )).length
                      }
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-[10px] mt-[15px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
