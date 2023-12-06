import React, { useEffect } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import useSendMailPaymentSuccess from "../hook/useSendMailPaymentSuccess";
import useLoadingEffect from "fuse/hook/useLoadingEffect";
import { toast } from "react-hot-toast";

const ConfirmPayment = ({ step, onStep }) => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useSendMailPaymentSuccess();

  const handleBackHome = () => {
    navigate("/");
  };
  useLoadingEffect(isLoading);

  return (
    <div>
      <Result
        status="success"
        title="Đặt hàng thành công!"
        subTitle="Chúc bạn sẽ có những trải nghiệm tuyệt vời tại Blakc&Cat"
        extra={[
          <Button key="buy" onClick={handleBackHome}>
            Tiếp tục mua sắm
          </Button>,
        ]}
      />
    </div>
  );
};

export default ConfirmPayment;
