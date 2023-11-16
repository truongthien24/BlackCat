import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import CartItem from "./components/CartItem";
import CardHead from "./components/CardHead";
import { columns } from "./helper";
import { COLOR } from "page/user/shareComponent/constant";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "page/user/layout/Layout1";
import { jwtDecode } from "jwt-decode";
import useGetDetailGioHang from "page/admin/page/GioHangManagement/hook/userGetDetailGioHang";
import { Empty } from "antd";

const Cart = () => {

  const navigate = useNavigate();

  const isMobile = useContext(LayoutContext);

  const jwt = localStorage.getItem('jwt');

  const userInfo = useMemo(() => {
    if (jwt) {
      const userJwt = jwtDecode(jwt);
      return userJwt?.users;
    } else {
      return {}
    }
  }, [jwt])

  const { gioHangDataDetail, isDataDetailLoading, fetchData, isFetching } = useGetDetailGioHang("0", "0", userInfo?.gioHang);

  const method = useForm({
    mode: "onSubmit",
    defaultValues: {},
    // yup.object().shape({
    //   soLuong: yup
    //     .number()
    //     .required("Please input")
    //     .typeError("Number")
    //     .min(1)
    //     .max(99),
    // })
  });

  const {
    handleSubmit,
  } = method;

  const renderCartItem = () => {
    const data = [
      {
        hinhAnh: {
          url: "https://res.cloudinary.com/dsbvqrhhk/image/upload/v1699591908/v6f5du557mnnqv9zlg4u.jpg",
        },
        tenSach: "Diệu Linh",
        tenTheLoai: "Tình yêu",
        gia: 250000,
      },
      {
        hinhAnh: {
          url: "https://res.cloudinary.com/dsbvqrhhk/image/upload/v1699591908/v6f5du557mnnqv9zlg4u.jpg",
        },
        tenSach: "Diệu Linh 2",
        tenTheLoai: "Tình yêu",
        gia: 300000,
      },
      {
        hinhAnh: {
          url: "https://res.cloudinary.com/dsbvqrhhk/image/upload/v1699591908/v6f5du557mnnqv9zlg4u.jpg",
        },
        tenSach: "Diệu Linh 3",
        tenTheLoai: "Tình yêu",
        gia: 300000,
      },
    ];
    if (gioHangDataDetail?.danhSach?.length > 0) {
      return data?.map((cart, index) => {
        return <CartItem data={cart} key={index} columns={columns(isMobile)} />;
      });
    } else {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Chưa có sản phẩm nào" />
    }
  };

  const handleSubmitCart = (data) => {
    navigate(`/payment/${userInfo?._id}`)
  };

  return (
    <div className="md:pt-[150px] pb-[20px] min-h-[calc(100vh_-_300px)] flex justify-center">
      <div className="bg-[#eaeaea] min-h-[calc(100%_-_150px)] px-[10px] py-[10px] md:px-[25px] md:py-[20px] w-full xl:w-[90%] 2xl:w-[70%]">
        <h2 className="font-[500] md:text-[22px] mb-[10px] md:mb-[20px]">
          Giỏ hàng của bạn
        </h2>
        <FormProvider {...method}>
          <form
            className="border-solid border-[#498374] border-[1px] w-full px-[10px] py-[10px] md:px-[25px] md:py-[15px] grid grid-cols-1 gap-[15px]"
            onSubmit={handleSubmit(handleSubmitCart)}
          >
            <CardHead columns={columns(isMobile)} />
            <div className="grid grid-cols-1 gap-[10px] md:gap-[15px]">
              {renderCartItem()}
            </div>
            <div className="flex justify-end items-center">
              {/* <p className="w-[15%] text-[13px] md:text-[15px] flex justify-center mr-[20px]">300.000</p> */}
              <div className="flex justify-center">
                <button
                  className="text-[#fff] text-[11px] md:text-[15px] p-[10px] rounded-[5px] flex items-center justify-center"
                  type="submit"
                  disabled={!gioHangDataDetail?.danhSach?.length > 0}
                  style={{
                    backgroundColor: `${gioHangDataDetail?.danhSach?.length > 0 ? COLOR.primaryColor : 'gray'}`,
                  }}
                // type="button"
                // onClick={async () => {
                //   console.log("thanh toán");
                //   const thanhToan = await axios.post(
                //     "http://localhost:3001/api/thanhToan",
                //     { tongTien: 300000 }
                //   );
                // }}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Cart;
