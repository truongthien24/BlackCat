import useGetDetailBook from "page/admin/page/RoomManagement/hook/useGetDetailBook";
import React from "react";
import { useParams } from "react-router-dom";

const InfoBook = () => {
  const { id } = useParams();

  const {
    sachDataDetail,
    isDataDetailLoading,
    fetchData: fetchDetail,
    isFetching: isFetchingDetail,
  } = useGetDetailBook("0", "0", id);

  return (
    <div className="md:pt-[150px] pb-[20px] min-h-[calc(100vh_-_300px)] flex justify-center">
      <div className="flex flex-col items-center bg-[#eaeaea] w-[95%] xl:w-[90%] 2xl:w-[70%] px-[25px] py-[20px]">
        <div className="grid md:grid-cols-2 2xl:grid-cols-[3] gap-[20px]">
          <img src={sachDataDetail?.hinhAnh?.url} className="w-full h-full" />
          <div className="2xl:col-span-2 flex flex-col">
            <h2>{sachDataDetail?.tenSach}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBook;
