import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const VerifyEmail = () => {
    const navigate = useNavigate();
    const param = useParams();

    useEffect(()=> {
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:3001/taiKhoan/${param.id}/verify/${param.token}`;
                const data = await axios.get(url);
                console.log('data', data);
            } catch (error) {
                console.log('eror', error);
            }
        }
        verifyEmailUrl();
    }, [param])
  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center">
        <h2>Chúc mừng bạn đã đăng ký thành công !</h2>
        <img className="w-[200px]" src="https://img.freepik.com/premium-vector/opened-envelope-document-with-green-check-mark-line-icon-official-confirmation-message-mail-sent-successfully-email-delivery-verification-email-flat-design-vector_662353-720.jpg"/>
        <button onClick={()=> {
            navigate('/login')
        }}>
            Đăng nhập thôi nào
        </button>
    </div>
  )
}

export default VerifyEmail