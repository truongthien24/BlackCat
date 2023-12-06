import { Button, Popover } from "antd";
import { COLOR } from "page/user/shareComponent/constant";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";

const PopoverReturnOrder = ({ sach, dataMain }) => {
  const [openReturnOrder, setOpenReturnOrder] = useState(false);

  const hide = () => {
    setOpenReturnOrder(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpenReturnOrder(newOpen);
  };

  const ngayDenHan = useMemo(() => {
    if (dataMain?.ngayGiao) {
      let res = new Date(dataMain?.ngayGiao?.toString());
      res.setDate(res.getDate() + sach?.soNgayThue);
      return res?.toLocaleDateString("en-GB");
    }
  }, [dataMain?.ngayGiao]);

  return (
    <Popover
      content={
        <div>
          <div>
            <span className="font-[500] my-[0px]">Hạn cuối trả hàng:</span>{" "}
            {ngayDenHan}
          </div>
          <div>
            <span className="font-[500] my-[0px]">Tình trạng:</span> chưa trả
          </div>
          <Button
            style={{
              backgroundColor: `${COLOR.secondaryColor}`,
              color: "white",
              marginTop: "10px",
              width: "100%",
            }}
            onClick={() => {
              toast("Chức năng đang phát triển");
            }}
          >
            Xác nhận trả hàng
          </Button>
        </div>
      }
      title="Thông tin trả hàng"
      trigger="click"
      open={openReturnOrder}
      onOpenChange={handleOpenChange}
    >
      <Button
        style={{ backgroundColor: `${COLOR.primaryColor}` }}
        type="primary"
      >
        Trả hàng
      </Button>
    </Popover>
  );
};

export default PopoverReturnOrder;
