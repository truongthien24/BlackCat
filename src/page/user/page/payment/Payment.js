import { Steps } from "antd";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import React from "react";
import { useParams } from "react-router-dom";
import InfoPayment from "./components/InfoPayment";
import MethodPayment from "./components/MethodPayment";
import ConfirmPayment from "./components/ConfirmPayment";

const Payment = () => {

  const {id} = useParams();

  const renderStepContent = () => {
    const step = 'info';
    switch(step) {
      case 'info': {
        return <InfoPayment/>
      }
      case 'payment': {
        return <MethodPayment/>
      }
      case 'confirm': {
        return <ConfirmPayment/>
      }
      default: return <></>
    }
  };

  return (
    <div className="md:pt-[150px] pb-[20px] min-h-[calc(100vh_-_300px)] flex justify-center">
      <div className="flex flex-col items-center bg-[#eaeaea] w-[95%] xl:w-[90%] 2xl:w-[70%] px-[25px] py-[20px]">
        <h3 className="mb-[30px] text-[20px]">Thanh toán</h3>
        <div className="w-full">
          <Steps
            items={[
              {
                title: "Verification",
                status: "finish",
                icon: <SolutionOutlined />,
              },
              {
                title: "Pay",
                status: "process",
                icon: <LoadingOutlined />,
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
      </div>
    </div>
  );
};

export default Payment;
