import { Empty } from "antd";
import { COLOR } from "page/user/shareComponent/constant";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const { userInfo } = useSelector((state) => state.home);

  const navigate = useNavigate();

  const handleInfoBook = (sach) => {
    navigate(`/infoBook/${sach?._id}`);
  };

  const renderBook = () => {
    const danhSachYeuThich = userInfo?.danhSachYeuThich;
    if (danhSachYeuThich?.length > 0) {
      return danhSachYeuThich.map((sach, index) => {
        return (
          <div
            key={index}
            className="bg-[#fff] grid grid-cols-5 p-[10px] lg:p-[20px] gap-[10px] lg:gap-[20px] rounded-[10px] hover:!shadow-2xl duration-300 cursor-pointer relative"
            style={{
              boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
              backgroundColor: `${COLOR.primaryColor}`,
            }}
            onClick={() => handleInfoBook(sach?.sach)}
          >
            <img
              className="col-span-2 h-full object-fit rounded-[10px]"
              src={sach?.sach?.hinhAnh?.url}
            />
            <div className="col-span-3">
              <h5
                className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#fff]"
                // style={{ color: `${COLOR.primaryColor}` }}
              >
                {sach?.sach?.tenSach}
              </h5>
            </div>
            <img
              className="absolute bottom-[5px] right-[5px] w-[20px] lg:w-[30px] rotate-[20deg]"
              src="/images/caythongnoel.png"
            />
          </div>
        );
      });
    } else {
      return <Empty description="Chưa có sách yêu thích nào" />;
    }
  };

  return (
    <div className="md:pt-[150px] pb-[20px] min-h-[calc(100vh_-_300px)] flex justify-center">
      <div className="flex flex-col bg-[#eaeaea] w-[95%] xl:w-[90%] 2xl:w-[70%] px-[15px] py-[10px] lg:px-[25px] lg:py-[20px] relative">
        <div className="mb-[10px] md:mb-[20px]">
          <h2 className="font-[500] md:text-[22px]">Danh sách yêu thích</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:gap-[20px]">
          {renderBook()}
        </div>
        <img
          src="/images/nonnoel.png"
          className="absolute left-[-13px] top-[-15px] w-[50px]"
        />
      </div>
    </div>
  );
};

export default Favourite;
