import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormBaseRegister } from "../../component/Form/FormBaseRegister";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import axios from "axios";
import useRegister from "./hook/useRegister";
import { toast } from "react-hot-toast";
import useLoadingEffect from "fuse/hook/useLoadingEffect";

export const Register = () => {
<<<<<<< HEAD

=======
>>>>>>> 318f210c33aef3963e889fca57e8f0fe23c8bc98
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { mutate, isLoading: isSubmitting } = useRegister();

  const initialValue = {
    tenDangNhap: "",
    matKhau: "",
    loaiTaiKhoan: "guest", //user
  };

<<<<<<< HEAD
  const initialValue = {
    tenDangNhap: "",
    matKhau: "",
    loaiTaiKhoan: "guest" //user
  }

  const formField = [
    {
      name: "tenDangNhap",
      type: "string"
    },
    {
      name: "matKhau",
      type: "password"
    },
    {
      name: "confirmPassword",
      type: "password"
    },
    {
      name: "email",
      type: "email"
    },
  ]

  const validationSchema = yup.object().shape({
    tenDangNhap: yup.string().required("Please input...."),  //Reuired: bắt buộc nhập, string là kiểu kí tự chuỗi
    matKhau: yup.string().required("Please input....").test('len', 'Must be 6-24 characters',
      (data) => {
=======
  const formField = [
    {
      name: "tenDangNhap",
      type: "string",
    },
    {
      name: "matKhau",
      type: "password",
    },
    {
      name: "confirmPassword",
      type: "password",
    },
    {
      name: "email",
      type: "email",
    },
  ];

  const validationSchema = yup.object().shape({
    tenDangNhap: yup.string().required("Please input...."), //Reuired: bắt buộc nhập, string là kiểu kí tự chuỗi
    matKhau: yup
      .string()
      .required("Please input....")
      .test("len", "Must be 6-24 characters", (data) => {
>>>>>>> 318f210c33aef3963e889fca57e8f0fe23c8bc98
        if (data.toString().length >= 6 && data.toString().length <= 24) {
          return true; //Hợp lệ
        }
        return false; //Không hợp lệ
<<<<<<< HEAD
      }
    ),
    confirmPassword: yup.string().required("Please input....").oneOf([yup.ref('matKhau')], "Password does not match").test('len', 'Must be 6-24 characters',
      (data) => {
=======
      }),
    confirmPassword: yup
      .string()
      .required("Please input....")
      .oneOf([yup.ref("matKhau")], "Password does not match")
      .test("len", "Must be 6-24 characters", (data) => {
>>>>>>> 318f210c33aef3963e889fca57e8f0fe23c8bc98
        if (data.toString().length >= 6 && data.toString().length <= 24) {
          return true;
        }
        return false;
<<<<<<< HEAD
      }
    ),
    email: yup.string().email('Please input abc@gmail...').required("Please input...")
=======
      }),
    email: yup
      .string()
      .email("Please input abc@gmail...")
      .required("Please input..."),
>>>>>>> 318f210c33aef3963e889fca57e8f0fe23c8bc98
  });

  // useEffect(()=> {
  //   if(window.location.pathname === "/user/login") {
  //     window.onclick = () => navigate("/user");
  //   }
  // })

  useEffect(() => {
<<<<<<< HEAD
    axios.get('http://localhost:3003/getAll-TaiKhoan');
=======
    axios.get("http://localhost:3001/getAll-TaiKhoan");
>>>>>>> 318f210c33aef3963e889fca57e8f0fe23c8bc98
  }, []);

  const registerUserTest = async (data) => {
    // axios.post("http://localhost:3001/create-TaiKhoan", data?.data).then(result=> console.log('result', result)).catch(err=> console.log('err', err))
    await mutate({
<<<<<<< HEAD
      Data: data?.data,
      onSuccess: async (msg) => {
        toast.success("Register success");
        console.log('success')
        setTimeout(() => {
          window.location.replace("/login");
        }, 500);
=======
      Data: {...data?.data, loaiTaiKhoan: "user"},
      onSuccess: async (msg) => {
        toast.success(msg.data.message);
>>>>>>> 318f210c33aef3963e889fca57e8f0fe23c8bc98
      },
      onError: async (err) => {
        toast.error(err.error);
      },
    });
<<<<<<< HEAD
  }


=======
  };

  useLoadingEffect(isSubmitting);
>>>>>>> 318f210c33aef3963e889fca57e8f0fe23c8bc98

  // Xúất ra giao diện
  return (
    <>
<<<<<<< HEAD
      <div className='fixed top-0 left-0 w-screen h-screen bg-[white] z-[101] flex flex-col lg:flex-row items-center lg:justify-center'>
        <div className='mr-[10px] my-[20px] flex justify-center lg:flex-1'>
          <img src="/images/logo.png" className='w-[200px] md:w-[250px]' />
        </div>
        <div className="lg:flex-1 w-full flex justify-center">
          <div
            className='bg-[white] w-[85%] md:w-[70%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%] rounded-[10px] px-[15px] lg:px-[30px] py-[20px]'
            style={{ boxShadow: 'rgba(0, 0, 0, 0.26) 0px 5px 40px' }}
          >
            <div className='flex items-center justify-between mb-[20px] md:mb-[30px]'>
              <h3 className='text-[20px] md:text-[25px] font-[500] text-[#498374]'>{t('register')}</h3>
              <span className='text-[25px] md:text-[30px] font-[500] translate-y-[-5px] text-[#498374] cursor-pointer' onClick={() => {
                navigate('/user/login')
              }}>&times;</span>
            </div>
            <div className='flex items-center justify-center'>
=======
      <div className="fixed top-0 left-0 w-screen h-screen bg-[white] z-[101] flex flex-col lg:flex-row items-center lg:justify-center">
        <div className="mr-[10px] my-[20px] flex justify-center lg:flex-1">
          <img src="/images/logo.png" className="w-[200px] md:w-[250px]" />
        </div>
        <div className="lg:flex-1 w-full flex justify-center">
          <div
            className="bg-[white] w-[85%] md:w-[70%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%] rounded-[10px] px-[15px] lg:px-[30px] py-[20px]"
            style={{ boxShadow: "rgba(0, 0, 0, 0.26) 0px 5px 40px" }}
          >
            <div className="flex items-center justify-between mb-[20px] md:mb-[30px]">
              <h3 className="text-[20px] md:text-[25px] font-[500] text-[#498374]">
                {t("register")}
              </h3>
              <span
                className="text-[25px] md:text-[30px] font-[500] translate-y-[-5px] text-[#498374] cursor-pointer"
                onClick={() => {
                  navigate("/user/login");
                }}
              >
                &times;
              </span>
            </div>
            <div className="flex items-center justify-center">
>>>>>>> 318f210c33aef3963e889fca57e8f0fe23c8bc98
              <FormBaseRegister
                initialValue={initialValue}
                formField={formField}
                validationSchema={validationSchema}
                methodSubmit={registerUserTest}
              />
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="lg:flex-1 w-full flex justify-center">
        <div
          className='bg-[white] w-[85%] md:w-[70%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%] rounded-[10px] px-[15px] lg:px-[30px] py-[20px]'
          style={{ boxShadow: 'rgba(0, 0, 0, 0.26) 0px 5px 40px' }}
        >
          <div className='flex items-center justify-between mb-[20px] md:mb-[30px]'>
            <h3 className='text-[20px] md:text-[25px] font-[500] text-[#498374]'>{t('register')}</h3>
            <span className='text-[25px] md:text-[30px] font-[500] translate-y-[-5px] text-[#498374] cursor-pointer' onClick={() => {
              navigate('/login')
            }}>&times;</span>
          </div>
          <div className='flex items-center justify-center'>
            <FormBaseRegister
              initialValue={initialValue}
              formField={formField}
              validationSchema={validationSchema}
              methodSubmit={registerUser}
            />
          </div>
        </div>
      </div>
    </>
  )
}
=======
    </>
  );
};
>>>>>>> 318f210c33aef3963e889fca57e8f0fe23c8bc98
