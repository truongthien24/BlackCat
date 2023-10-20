import React from "react";
import { ListRoomArea } from "../../component/ListRoomArea";
import { Slider } from "../../component/Slider";
import { Reason } from "../../component/Reason";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { layDuLieuPhong } from "../../../../redux/action/phongAction";

export const HomeUser = () => {
  // Danh sách banner
  const listBanner = [
    {
      title: "é é",
      image:
        "https://bizweb.dktcdn.net/100/364/248/themes/736344/assets/slider_1.jpg?1685433925349",
    },
    {
      title: "é é 2",
      image:
        "https://bizweb.dktcdn.net/100/364/248/themes/736344/assets/slider_3.jpg?1685433925349",
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDuLieuPhong());
  }, []);

  return (
    <div className="">
      <div className="w-full">
        <Slider data={listBanner} />
      </div>
      {/* <SearchArea/> */}
      <ListRoomArea />
      <Reason />
    </div>
  );
};
