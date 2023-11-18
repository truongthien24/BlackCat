import axios from 'axios';
import React from 'react'

const InfoPayment = () => {
  return (
    <button
      type="button"
      onClick={async () => {
        const thanhToan = await axios.post(
          "http://localhost:3001/api/thanhToan",
          { tongTien: 300000 }
        );
      }}>
      Thanh toán
    </button >
  )
}

export default InfoPayment