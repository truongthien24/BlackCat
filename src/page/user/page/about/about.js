import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../../../../assets/icon";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="md:pt-[150px] pb-[20px] min-h-[calc(100vh_-_300px)] flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[10px] md:gap-[15px] xl:gap-[20px] w-[95%] xl:w-[90%] 2xl:w-[70%] px-[25px] py-[20px]">
        <strong>Nguồn nhân lực</strong>
      </div>
    </div>
  );
};
