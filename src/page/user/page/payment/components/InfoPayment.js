import { Button } from "antd";
import { jwtDecode } from "jwt-decode";
import React, { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { PlusOutlined } from "@ant-design/icons";
import ModalAddInfoPayment from "./modals/ModalAddInfoPayment";

const InfoPayment = () => {
  const jwt = localStorage.getItem("jwt");

  const [open, setOpen] = useState(false);

  const userInfo = useMemo(() => {
    if (jwt) {
      const jwtDC = jwtDecode(jwt);
      return jwtDC?.users;
    }
  }, [jwt]);

  const method = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });

  const { handleSubmit } = method;

  const onOpen = (event) => {
    setOpen(event);
  };

  const handleSubmitForm = (data) => {};

  const renderThongTinGiaoHang = () => {
    return userInfo?.thongTinNhanHang?.map((diaChi, index) => {
      return (
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
        >
          {test}
        </div>
      );
    });
  };

  return (
    <>
      <FormProvider {...method}>
        <form className="" onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="mb-[10px] md:mb-[20px] grid grid-cols-1 gap-[10px]">
            {renderThongTinGiaoHang()}
            <div
              className="w-full md:w-[300px] px-[10px] py-[7px] rounded-[10px] cursor-pointer"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
              onClick={() => onOpen(true)}
            >
              <Button
                type="primary"
                icon={<PlusOutlined />}
                className="mr-[10px]"
              />
              <span>Thêm thông tin giao hàng</span>
            </div>
          </div>
        </form>
      </FormProvider>
      <ModalAddInfoPayment open={open} onOpen={onOpen} />
    </>
  );
};

export default InfoPayment;
