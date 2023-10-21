import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormBaseLogin } from '../../component/Form/FormBaseLogin';
import * as yup from 'yup';
import { Loading } from '../../../../component/Loading/Loading';
import { loginUser } from '../../../../redux/action/accountAction';
import { useTranslation } from 'react-i18next';

export const Login = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const initialValue = {
    userName: "",
    password: "",
  }

  const formField = [
    {
      name: "userName",
      type: "string"
    },
    {
      name: "password",
      type: "password"
    }
  ]

  const validationSchema = yup.object().shape({
    userName: yup.string().required("Please input...."),
    password: yup.string().required("Please input...."),
  });

  // useEffect(()=> {
  //   if(window.location.pathname === "/user/login") {
  //     window.onclick = () => navigate("/user");
  //   }
  // })


  return (
    <>
      <div className='fixed top-0 left-0 w-screen h-screen bg-[#ffeadc] z-[101] flex items-center'>
        <div className='flex items-center justify-center flex-1'>
          <img src="/images/logo.png" className='w-[200px] md:w-[250px]' />
        </div>
        <div
          className='flex-1'
        >
          <div className="w-[80%] bg-[#f7d38f00] rounded-[10px] px-[15px] md:px-[30px] py-[20px]" style={{ boxShadow: 'rgba(0, 0, 0, 0.26) 0px 5px 40px' }}>
            <div className='flex items-center justify-between mb-[20px] md:mb-[30px]'>
              <h3 className='text-[20px] md:text-[25px] font-[500] text-[#498374]'>{t('login')}</h3>
              <span className='text-[25px] md:text-[30px] font-[500] translate-y-[-5px] text-[#498374] cursor-pointer' onClick={() => {
                navigate('/')
              }}>&times;</span>
            </div>
            <div className='flex items-center justify-center'>
              <FormBaseLogin
                initialValue={initialValue}
                formField={formField}
                validationSchema={validationSchema}
                methodSubmit={loginUser}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
