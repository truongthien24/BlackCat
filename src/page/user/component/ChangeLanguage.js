import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import i18n from "../../../assets/i18n/i18n";
import { setLoading } from "../../../redux/action/homeAction";
import { useTranslation } from "react-i18next";

// const language = localStorage.getItem('language');

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState({
    name: "VN",
    value: "vn",
    image: "/images/vn.png",
  });

  const language = localStorage.getItem("language");
  if (language && language == "en") {
    lang.name = "EN";
    lang.value = "en";
    lang.image = "/images/us.png";
  } else {
    lang.name = "VN";
    lang.value = "vn";
    lang.image = "/images/vn.png";
    localStorage.setItem("language", lang.value);
  }
  // useEffect(()=> {language === 'vn' ? setLang({
  //     name: 'VN',
  //     value: 'vn',
  //     image: '/images/vn.png'
  // }) : language === 'en' ? setLang({
  //     name: 'EN',
  //     value: 'en',
  //     image: '/images/us.png'
  // }) : setLang({
  //     name: 'KR',
  //     value: 'kr',
  //     image: '/images/kr.png'
  // })},[language])

  const dispatch = useDispatch();

  const handleMethod = (data) => {
    // dispatch(setLoading({
    //     status: 'isLoading'
    // }))
    // localStorage.setItem('language', data.value);
    // i18n.changeLanguage(data.value)
    // setTimeout(()=> {
    //     setOpen(false);
    //     dispatch(setLoading({
    //         status: 'done'
    //     }))
    // }, 500)
    // Swal.fire({
    //     icon: 'info',
    //     text: 'Chức năng đang được phát triển',
    //     showConfirmButton: false,
    // })

    //
    //   lang = { name: "VN", value: "vn", image: "/images/vi.png" };
    // else
    if (data.value == "en") {
      lang.name = "EN";
      lang.value = "en";
      lang.image = "/images/us.png";
    } else {
      lang.name = "VN";
      lang.value = "vn";
      lang.image = "/images/vn.png";
    }
    i18n.changeLanguage(lang.value);
    localStorage.setItem("language", lang.value);
    setOpen(!open);
  };
  const listLanguage = [
    // {
    //     name: 'KR',
    //     value: 'kr',
    //     image: '/images/kr.png',
    //     method: () => {
    //         handleMethod({
    //             value: 'kr',
    //         })
    //     }
    // },
    {
      name: "EN",
      value: "en",
      image: "/images/us.png",
      method: () => {
        handleMethod({
          value: "en",
        });
      },
    },
    {
      name: "VN",
      value: "vn",
      image: "/images/vn.png",
      method: () => {
        handleMethod({
          value: "vn",
        });
      },
    },
  ];

  // Method
  const renderListLanguage = () => {
    return listLanguage.map((item, index) => {
      return (
        <li
          className="flex items-center justify-between py-[7px] px-[8px] bg-[white] border-b-2 duration-200 last:border-b-0 hover:bg-[#8ecaed] cursor-pointer"
          onClick={item.method}
        >
          <img src={item.image} className="w-[25px]" />
          <span>{item.name}</span>
        </li>
      );
    });
  };

  return (
    <div className="relative mr-[20px]">
      <button
        className="flex items-center justify-between rounded-[8px] px-[8px] py-[5px]"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img className="w-[25px] mr-[10px]" src={lang.image} />
        <span>{lang.name}</span>
      </button>
      {open && (
        <ul className="absolute top-[110%] left-0 border-solid border-[#dadada] w-full border-[1px] rounded-[8px] overflow-hidden shadow-lg shadow-gray-200 z-10">
          {renderListLanguage()}
        </ul>
      )}
    </div>
  );
};
