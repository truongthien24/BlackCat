import React from "react";
import ItemMenu from "./components/ItemMenu";
import { I18nextProvider, useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();
  const listMenu = [
    {
      key: "all",
      title: "AllBooks",
      path: "/allBooks",
      child: [],
    },
    // {
    //   key: "newArrivals",
    //   title: "New Arrivals",
    //   path: "/book?type=newArrivals",
    //   child: [],
    // },
    {
      key: "aboutUs",
      title: "AboutUs",
      path: "/aboutUs",
      child: [],
    },
    {
      key: "contact",
      title: "Contact",
      path: "/contact",
      child: [],
    },
    {
      key: "BaiViet",
      title: "News",
      path: "/baiviet",
      child: [],
    },
  ];

  const renderMenu = () => {
    return listMenu?.map((menu) => {
      return <ItemMenu data={menu} />;
    });
  };
  return (
    <div className="flex items-center justify-start flex-[2] px-[20px] h-[45px]">
      {renderMenu()}
    </div>
  );
};

export default Menu;
