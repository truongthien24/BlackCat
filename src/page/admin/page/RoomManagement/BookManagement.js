import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Confirm } from '../../../../component/Confirm/Confirm';
// import { FormCreate } from '../../shareComponent/form/FormCreate';
// import { FormUpdate } from '../../shareComponent/form/FormUpdate';
// import { ModalCreate } from '../../shareComponent/modal/ModalCreate';
import { TableMain } from '../../shareComponent/table/TableMain'
import { useDispatch } from 'react-redux';
import { deleteRoom } from '../../../../redux/action/phongAction';
import { columns, getDataTable } from './helper';
import { ModalEditRoom } from './component/modal/ModalEditRoom';
import { ModalCreateRoom } from './component/modal/ModalCreateRoom';
import { setConfirm } from '../../../../redux/action/homeAction';
import Swal from 'sweetalert2';
import { ModalEditReaction } from './component/modal/ModalEditReaction';
import { getCommonCode } from 'redux/action/getCommonCode';
import useGetDataBook from './hook/useGetDataBook';

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
  }, [])


  const { sachData, isDataLoading, fetchData, isFetching } =
    useGetDataBook(
      "0",
      "0",
    );

    console.log('sachData', sachData)

  // Method
  const handleAdd = () => {
    setIsModalOpen(true);
  }

  const handleEdit = (data) => {
    setDataEdit(data);
    setIsModalEditOpen(true);
  }

  const handleDelete = async (data) => {
    await dispatch(setConfirm({
      status: 'open',
      method: async () => {
        dispatch(deleteRoom(data)).then(data => {

        }).catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Xoá thất bại !',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        });
      }

    }))
  }

  const handleViewDanhGia = (data) => {
    setDataEdit(data);
    setIsModalEditReaction(true);
  }

  return (
    <>
      <div className="h-[12%] flex justify-between items-center">
        <h3 className="text-[20px] text-[#3790c7] font-bold">{t('Book Management')}</h3>
        <button className='flex items-center justify-center bg-[#3790c7] text-white py-[10px] px-[20px] rounded-[7px] duration-300 hover:shadow-[#3790c7a6] hover:shadow-lg hover:translate-y-[-3px]' type="submit" onClick={handleAdd}>{t('add')}</button>
      </div>
      <div className="h-[88%]">
        <TableMain
          data={sachData}
          columns={columns(handleViewDanhGia)}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <ModalEditRoom
        methodCancel={() => setIsModalEditOpen(false)}
        title={t('Edit Room Management')}
        isOpen={isModalEditOpen}
        dataEdit={dataEdit}
        childrenForm={
          <></>
        }
      />
      <ModalCreateRoom
        methodCancel={() => setIsModalOpen(false)}
        title={t('Create Room Management')}
        isOpen={isModalOpen}
      />
      <ModalEditReaction
        isOpen={isModalEditReaction}
        methodCancel={() => setIsModalEditReaction(false)}
        title={t('Edit Reaction')}
        idRoom={dataEdit?.id}
      />
      <Confirm />
    </>
  )
}
