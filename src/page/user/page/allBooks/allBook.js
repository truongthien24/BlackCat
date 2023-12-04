import useLoadingEffect from "fuse/hook/useLoadingEffect";
import useGetDetailBook from "page/admin/page/RoomManagement/hook/useGetDetailBook";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewInfoItem from "page/user/component/AreaBook/modal/components/ReviewInfoItem";
import { COLOR } from "page/user/shareComponent/constant";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { Tabs } from "antd";
import { Empty } from "antd";
import _ from "lodash";
import AreaBook from "page/user/component/AreaBook";
import useGetDataBook from "page/admin/page/RoomManagement/hook/useGetDataBook";

export const AllBooks = () => {
  const { data } = useParams();

  const {
    sachData,
    isDataLoading,
    fetchData: fetchDetail,
    isFetching: isFetchingDetail,
  } = useGetDataBook("0", "0", data);

  const navigate = useNavigate();

  const addToCart = (data) => {
    if (data?.soLuong > sachData.soLuong) {
      toast.error(`Số lượng không đủ. Chỉ còn ${sachData.soLuong} quyển :((`);
    } else {
      // toast.error("Chức năng đang phát triển");
      navigate("/cart/123213123");
    }
  };

  const items = [];

  const onChange = (key) => {
    console.log(key);
  };

  useLoadingEffect(isDataLoading);

  return (
    <div className="md:pt-[150px] pb-[20px] min-h-[calc(100vh_-_300px)] flex justify-center">
      <div className="flex flex-col w-[95%] xl:w-[90%] 2xl:w-[70%] px-[25px] py-[20px]">
        <AreaBook
          data={{
            title: "Tất cả sách",
            data: sachData?.filter((sach) => sach),
          }}
        ></AreaBook>
      </div>
    </div>
  );
};
