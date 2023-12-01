import { Steps } from "antd";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import InfoPayment from "./components/InfoPayment";
import MethodPayment from "./components/MethodPayment";
import ConfirmPayment from "./components/ConfirmPayment";
import { COLOR } from "page/user/shareComponent/constant";

const Payment = () => {
  const { id } = useParams();

  const [paymentStep, setPaymentStep] = useState({
    step: 0,
    status: false,
    data: {
      thongTinNhanHang: {},
      thanhToan: {},
    },
  });

  const renderStepContent = () => {
    switch (paymentStep.step) {
      case 0: {
        return <InfoPayment onStep={setPaymentStep} />;
      }
      case 1: {
        return <MethodPayment onStep={setPaymentStep} />;
      }
      case 2: {
        return <ConfirmPayment onStep={setPaymentStep} />;
      }
      default:
        return <></>;
    }
  };

  const changeStep = (type) => {
    switch (type) {
      case "prev":
        return setPaymentStep((prev) => {
          return {
            step: prev.step - 1,
            status: false,
            data: {
              thongTinNhanHang: {},
              thanhToan: {},
            },
          };
        });
      case "next":
        return setPaymentStep((prev) => {
          return {
            step: prev.step + 1,
            status: false,
            data: {
              thongTinNhanHang: {},
              thanhToan: {},
            },
          };
        });
      default:
        return;
    }
  };

  return (
    <div className="md:pt-[150px] pb-[20px] min-h-[calc(100vh_-_300px)] flex justify-center">
      <div className="flex flex-col items-center bg-[#eaeaea] w-[95%] xl:w-[90%] 2xl:w-[70%] px-[25px] py-[20px]">
        <h3 className="mb-[30px] text-[20px]">
          {paymentStep.step === 0
            ? "Thông tin nhận hàng"
            : paymentStep.step === 1
            ? "Phương thức thanh toán"
            : "Thanh toán"}
        </h3>
        <div className="w-full">
          <Steps
            items={[
              {
                title: "Verification",
                // status: "finish",
                status: "process",
                icon: <LoadingOutlined />,
              },
              {
                title: "Pay",
                status: "wait",
                icon: <SolutionOutlined />,
              },
              {
                title: "Done",
                status: "wait",
                icon: <SmileOutlined />,
              },
            ]}
          />
          <div className="pt-[30px]">{renderStepContent()}</div>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="text-[#fff] text-[11px] md:text-[15px] p-[10px] rounded-[5px] flex items-center justify-center mr-[10px]"
            type="submit"
            style={{
              backgroundColor: `${
                paymentStep?.step > 0 ? COLOR.primaryColor : "gray"
              }`,
            }}
            disabled={paymentStep?.step == 0}
            onClick={() => changeStep("prev")}
          >
            Trở lại
          </button>
          <button
            className="text-[#fff] text-[11px] md:text-[15px] p-[10px] rounded-[5px] flex items-center justify-center"
            type="submit"
            style={{
              backgroundColor: `${
                paymentStep?.step < 2 ? COLOR.primaryColor : "gray"
              }`,
            }}
            disabled={paymentStep?.step == 2}
            onClick={() => changeStep("next")}
          >
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
