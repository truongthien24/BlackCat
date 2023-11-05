import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Confirm } from "../../../../component/Confirm/Confirm";
import { TableMain } from "../../shareComponent/table/TableMain";
import { useDispatch } from "react-redux";
import { columns } from "./helper";
import { ModalEditBook } from "./component/modal/ModalEditBook";
import { ModalCreateRoom } from "./component/modal/ModalCreateRoom";
import { ModalEditReaction } from "./component/modal/ModalEditReaction";
import { getCommonCode } from "redux/action/getCommonCode";
import useGetDataBook from "./hook/useGetDataBook";
import useGetDetailBook from "./hook/useGetDetailBook";
import useLoadingEffect from "fuse/hook/useLoadingEffect";

export const BookManagement = () => {
  // State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalEditReaction, setIsModalEditReaction] = useState(false);
  const [dataEdit, setDataEdit] = useState({});

  // Somethings
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Effect
  useEffect(async () => {
    await dispatch(getCommonCode("tacGia"));
    await dispatch(getCommonCode("theLoai"));
    await dispatch(getCommonCode("nhaXuatBan"));
    await dispatch(getCommonCode("nhaCungCap"));
  }, []);

  const { sachData, isDataLoading, fetchData, isFetching } = useGetDataBook(
    "0",
    "0"
  );

  const {
    sachDataDetail,
    isDataDetailLoading,
    fetchData: fetchDetail,
    isFetching: isFetchingDetail,
  } = useGetDetailBook("0", "0", dataEdit?._id);

  // Method
  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (data) => {
    setDataEdit(data);
    setIsModalEditOpen(true);
  };

  const handleDelete = async (data) => {
  };

  const handleViewDanhGia = (data) => {
    setDataEdit(data);
    setIsModalEditReaction(true);
  };

  useLoadingEffect(isDataLoading, isDataDetailLoading);

  return (
    <>
      <div className="h-[12%] flex justify-between items-center">
        <h3 className="text-[20px] text-[#3790c7] font-bold">
          {t("Quản lý sách")}
        </h3>
        <button
          className="flex items-center justify-center bg-[#3790c7] text-white py-[10px] px-[20px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]"
          type="submit"
          onClick={handleAdd}
        >
          {t("add")}
        </button>
      </div>
      <div className="h-[88%]">
        <TableMain
          data={sachData}
          columns={columns(handleViewDanhGia)}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <ModalEditBook
        methodCancel={() => setIsModalEditOpen(false)}
        title={t("Sửa sách")}
        isOpen={isModalEditOpen}
        dataEdit={sachDataDetail}
        fetcher={fetchDetail}
        fetch={fetchData}
        childrenForm={<></>}
      />
      <ModalCreateRoom
        methodCancel={() => setIsModalOpen(false)}
        title={t("Thêm sách")}
        isOpen={isModalOpen}
        fetcher={fetchDetail}
        fetch={fetchData}
      />
      <ModalEditReaction
        isOpen={isModalEditReaction}
        methodCancel={() => setIsModalEditReaction(false)}
        title={t("Edit Reaction")}
        idRoom={dataEdit?.id}
      />
      <Confirm />
    </>
  );
};
