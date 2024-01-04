import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ItemMenu = (props) => {
  const { t } = useTranslation();

  const { data } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(data?.path);
  };
  return (
    <div key={data?.key} onClick={handleClick} className="uppercase text-[14px] px-[10px] mx-[2px] cursor-pointer duration-200 border-b-[3px] border-transparent hover:border-[#498374]">
      {t(data?.title)}
    </div>
  );
};

export default ItemMenu;
