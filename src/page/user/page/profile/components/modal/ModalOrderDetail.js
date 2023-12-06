import { Button, Modal, Popover } from "antd";
import moment from "moment";
import { COLOR } from "page/user/shareComponent/constant";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import PopoverReturnOrder from "./components/PopoverReturnOrder";

const ModalOrderDetail = ({ open, onOpen, title, data }) => {
  const cancelOrder = () => {
    toast("Chức năng đang phát triển");
  };
  const [openReturnOrder, setOpenReturnOrder] = useState(false);

  const hide = () => {
    setOpenReturnOrder(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpenReturnOrder(newOpen);
  };

  const renderListOrder = () => {
    return data?.danhSach?.map((sach, index) => {
      return (
        <div className="grid grid-cols-5 gap-[10px]" key={index}>
          <img
            src={sach?.sach?.hinhAnh?.url}
            className="w-[50px] xl:w-[70px] h-full"
          />
          <p className="col-span-2">{sach?.sach?.tenSach}</p>
          <p>Số lượng: {sach?.soLuong}</p>
          {data?.tinhTrang == 2 && (
            <PopoverReturnOrder sach={sach} dataMain={data}/>
          )}
        </div>
      );
    });
  };

  return (
    <Modal
      className="!w-[90%] 2xl:!w-[70%]"
      open={open}
      onCancel={() => {
        onOpen({
          open: false,
        });
      }}
      footer={null}
      title={title}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px] p-[10px]">
        <div
          className="rounded-[10px] p-[10px] col-span-2 flex flex-col justify-between h-fit grid grid-cols-1 gap-[10px]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
        >
          <div className="flex items-center">
            <h5
              className="mr-[10px] font-[500]"
              style={{ color: `${COLOR.primaryColor}` }}
            >
              Mã đơn hàng:{" "}
            </h5>
            <span>{data?.maDonHang}</span>
          </div>
          <div className="flex items-center">
            <h5
              className="mr-[10px] font-[500]"
              style={{ color: `${COLOR.primaryColor}` }}
            >
              Ngày giao hàng dự kiến:{" "}
            </h5>
            <span>
              {moment(
                data?.thongTinGiaoHang?.ngayNhanHangDuKien?.ngayBatDau
              ).format("DD/MM/yyyy") +
                " - " +
                moment(
                  data?.thongTinGiaoHang?.ngayNhanHangDuKien?.ngayKetThuc
                ).format("DD/MM/yyyy")}
            </span>
          </div>
          <div className="flex items-center">
            <h5
              className="mr-[10px] font-[500]"
              style={{ color: `${COLOR.primaryColor}` }}
            >
              Tên người nhận:{" "}
            </h5>
            <span>
              {data?.thongTinGiaoHang?.thongTinNguoiNhan?.tenNguoiNhan}
            </span>
          </div>
          <div className="flex items-center">
            <h5
              className="mr-[10px] font-[500]"
              style={{ color: `${COLOR.primaryColor}` }}
            >
              Số điện thoại:{" "}
            </h5>
            <span>{data?.thongTinGiaoHang?.thongTinNguoiNhan?.sdt}</span>
          </div>
          <div className="flex items-center">
            <h5
              className="mr-[10px] font-[500]"
              style={{ color: `${COLOR.primaryColor}` }}
            >
              Địa chỉ:{" "}
            </h5>
            <span>{data?.thongTinGiaoHang?.thongTinNguoiNhan?.diaChi}</span>
          </div>
          <div className="flex items-center">
            <h5
              className="mr-[10px] font-[500]"
              style={{ color: `${COLOR.primaryColor}` }}
            >
              Hình thức thanh toán:{" "}
            </h5>
            <span>
              {data?.thongTinGiaoHang?.thongTinThanhToan?.phuongThucThanhToan}
            </span>
          </div>
          <div className="flex items-center">
            <h5
              className="mr-[10px] font-[500]"
              style={{ color: `${COLOR.primaryColor}` }}
            >
              Tình trạng thanh toán:{" "}
            </h5>
            <span>
              {data?.thongTinGiaoHang?.thongTinThanhToan?.tinhTrang
                ? "Đã thanh toán"
                : "Chưa thanh toán"}
            </span>
          </div>
          <div className="flex items-center">
            <h5
              className="mr-[10px] font-[500]"
              style={{ color: `${COLOR.primaryColor}` }}
            >
              Tình trạng đơn hàng:{" "}
            </h5>
            <span>
              {data?.tinhTrang == 0
                ? "Đã xác nhận"
                : data?.tinhTrang == 1
                ? "Đang giao"
                : "Đã giao"}
            </span>
          </div>
          {data?.tinhTrang == 0 && (
            <button
              className="flex justify-center w-full rounded-[10px] px-[20px] py-[10px] text-[white]"
              style={{ backgroundColor: `${COLOR.secondaryColor}` }}
              onClick={cancelOrder}
            >
              Huỷ đơn hàng
            </button>
          )}
        </div>
        <div
          className="rounded-[10px] p-[10px] col-span-3 max-h-[80vh] overflow-y-scroll grid grid-cols-1 gap-[10px]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
        >
          {renderListOrder()}
        </div>
      </div>
    </Modal>
  );
};

export default ModalOrderDetail;
