import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import CartItem from "./components/CartItem";
import CardHead from "./components/CardHead";
import { columns } from "./helper";

const Cart = () => {
  const method = useForm({
    mode: "onSubmit",
    defaultValues: {},
    resolver: yupResolver(),
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
    watch,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = method;

  const renderCartItem = () => {
    const a = [
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
    return a?.map((cart, index) => {
      return <CartItem data={cart} key={index} columns={columns}/>;
    });
  };

  const handleSubmitCart = (data) => {
    console.log("data", data);
  };

  return (
    <div className="pt-[150px] pb-[20px] min-h-[calc(100vh_-_300px)] flex justify-center">
      <div className="bg-[#eaeaea] min-h-[calc(100%_-_150px)] px-[25px] py-[20px] w-full xl:w-[90%] 2xl:w-[70%]">
        <h2 className="font-[500] md:text-[22px] mb-[20px]">
          Giỏ hàng của bạn
        </h2>
        <FormProvider {...method}>
          <form
            className="border-solid border-[#498374] border-[1px] w-full px-[25px] py-[15px] grid grid-cols-1 gap-[15px]"
            onSubmit={handleSubmit(handleSubmitCart)}
          >
            <CardHead columns={columns}/>
            <div className="grid grid-cols-1 gap-[15px]">{renderCartItem()}</div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Cart;
