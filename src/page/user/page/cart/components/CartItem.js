import _ from "lodash";
import { COLOR } from "page/user/shareComponent/constant";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const CartItem = ({ data, columns }) => {
  console.log("data", data);
  const {
    formState: { errors },
    register,
    reset,
    watch,
    getValues,
  } = useFormContext();

  useEffect(() => {
    if (!_.isEmpty(data)) {
      // reset({ ...data.sach, soLuongGioHang: data.soLuong });
    }
  }, [data]);

  const handleChangeQuantity = () => {};

  return (
    <div className="flex items-center justify-between w-full">
      {columns?.map((item, index) => {
        switch (item.name) {
          case "thongTinSanPham": {
            return (
              <div className="flex" style={{ width: `${item.width}` }}>
                <img
                  src={data?.sach?.hinhAnh?.url}
                  className="h-full w-[50px] md:w-[100px] mr-[10px] md:mr-[25px]"
                />
                <div>
                  <h4 className="max-w-[300px] text-[12.5px] md:text-[15px]">
                    {data?.sach?.tenSach}
                  </h4>
                  <span className="text-[#797979] text-[12px] md:text-[14px]">
                    {getValues("tenTheLoai")}
                  </span>
                </div>
              </div>
            );
          }
          case "soLuong": {
            return (
              <div
                className="flex items-center justify-center my-[10px]"
                style={{ width: `${item.width}` }}
              >
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    className="bg-[#dcdbdb] w-[20px] h-[20px] md:w-[35px] md:h-[35px] flex items-center justify-center"
                    onClick={() => handleChangeQuantity("minas")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <input
                    className="bg-[white] text-[11px] md:text-[13px] w-[20px] h-[20px] md:w-[35px] md:h-[35px] text-center"
                    value={data?.soLuong}
                  />
                  <button
                    type="button"
                    className="bg-[#dcdbdb] w-[20px] h-[20px] md:w-[35px] md:h-[35px] flex items-center justify-center"
                    onClick={() => handleChangeQuantity("plus")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          }
          case "gia": {
            return (
              <div
                className="flex justify-center text-[11px] md:text-[13px]"
                style={{ width: `${item.width}` }}
              >
                {data?.sach?.tienCoc?.toLocaleString()}
              </div>
            );
          }
          case "action": {
            return (
              <div
                className="flex justify-center text-[11px] md:text-[13px]"
                style={{ width: `${item.width}` }}
              >
                x
              </div>
            );
          }
          case "thanhTien": {
            return (
              <div
                className="flex justify-center text-[11px] md:text-[13px]"
                style={{ width: `${item.width}` }}
              >
                {(
                  parseInt(data.sach.tienCoc) * parseInt(data.soLuong)
                )?.toLocaleString()}
              </div>
            );
          }
        }
      })}
      {/* {columns?.findIndex((col) => col.name === "thongTinSanPham") != -1 && (
        <div className="flex items-center" style={{}}>
          <img
            src={data?.hinhAnh?.url}
            className="h-full w-[100px] mr-[10px]"
          />
          <div>
            <h4 className="max-w-[250px]">{data?.tenSach}</h4>
            <span className="text-[#797979] text-[14px]">
              {data?.tenTheLoai}
            </span>
          </div>
        </div>
      )}
      {columns?.findIndex((col) => col.name === "soLuong") != -1 && (
        <div className="flex items-center my-[10px]">
          <h5
            style={{
              color: `${COLOR.primaryColor}`,
              marginRight: "10px",
            }}
          >
            Số lượng
          </h5>
          <div className="flex items-center">
            <button
              type="button"
              className="bg-[#dcdbdb] w-[35px] h-[35px] flex items-center justify-center"
              onClick={() => handleChangeQuantity("minas")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </button>
            <input
              className="bg-[white] w-[35px] h-[35px] text-center"
              {...register("soLuong")}
              onError={errors["soLuong"]}
            />
            <button
              type="button"
              className="bg-[#dcdbdb] w-[35px] h-[35px] flex items-center justify-center"
              onClick={() => handleChangeQuantity("plus")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </button>
          </div>
          {errors["soLuong"] && (
            <span className="text-[red] ml-[10px] text-[10px]">
              {errors["soLuong"]?.message}
            </span>
          )}
        </div>
      )} */}
    </div>
  );
};

export default CartItem;
