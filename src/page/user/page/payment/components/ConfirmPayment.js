import React, { useEffect } from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import useSendMailPaymentSuccess from '../hook/useSendMailPaymentSuccess';
import useLoadingEffect from 'fuse/hook/useLoadingEffect';
import { toast } from 'react-hot-toast';

const ConfirmPayment = () => {

  const navigate = useNavigate();

  const {mutate, isLoading} = useSendMailPaymentSuccess();

  const handleBackHome = () => {
    navigate('/')
  }

  useEffect(async()=> {
    await mutate({
      Data: {},
      onSuccess: (res) => {
        toast.success(res?.data?.message);
      },
      onError: (res) => {
        toast.error(res?.Error?.message);
      }
    })
  }, [])

  useLoadingEffect(isLoading);

  return (
    <div>
      <Result
        status="success"
        title="Đặt hàng thành công!"
        subTitle="Chúc bạn sẽ có những trải nghiệm tuyệt vời tại Blakc&Cat"
        extra={[
          <Button key="buy" onClick={handleBackHome}>Tiếp tục mua sắm</Button>,
        ]}
      />
    </div>
  )
}

export default ConfirmPayment