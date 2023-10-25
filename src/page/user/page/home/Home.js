import React from "react";
import { ListRoomArea } from "../../component/ListRoomArea";
import { Slider } from "../../component/Slider";
import { Reason } from "../../component/Reason";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { layDuLieuPhong } from "../../../../redux/action/phongAction";
import AreaBook from "page/user/component/AreaBook";

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

  const fakeData = {
    title: 'New Arrival',
    path: '/books?type=newArrival',
    data: [{
      tenSach: 'Dac Nhan Tam',
      hinhAnh: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnhanvietmedia.edu.vn%2Fsan-pham%2Fdac-nhan-tam-kho-lon.html&psig=AOvVaw1XCwMyDsn6BU2bQjBcIuUZ&ust=1697946567290000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjBhoKehoIDFQAAAAAdAAAAABAE',
      maSach: 'dacnhantam',
      giaSach: 500000,
      tonKho: 1,
      tinhTrang: 'newArrival',
      sale: null,
    }]
  }


  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <Slider data={listBanner} />
      </div>
      {/* <SearchArea/> */}
      {/* <ListRoomArea /> */}
      {/* <div className="w-[90%] lg:w-[80%] py-[20px]">
        <AreaBook data={fakeData} />
      </div>
      <Reason /> */}
    </div>
  );
};
