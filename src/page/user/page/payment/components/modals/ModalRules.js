import { Modal } from "antd";
import { COLOR } from "page/user/shareComponent/constant";
import React, { useContext, useState } from "react";

const ModalRules = ({ open, onOpen, title }) => {
  return (
    <Modal
      className="!w-[90%] md:!w-[80%] lg:!w-[70%] xl:!w-[60%]"
      open={open}
      onCancel={() => {
        onOpen(false);
      }}
      footer={null}
      title={title}
    >
      {/* <h2
        className="text-[15px] lg:text-[20px] mb-[20px]"
        style={{ color: `${COLOR.primaryColor}` }}
      >
        Điều khoản của chúng tôi
      </h2> */}
      <div>Không được bom hàng quá 2 lần</div>
      <div>Không được bom hàng quá 2 lần</div>
      <div>Không được bom hàng quá 2 lần</div>
      <div>Không được bom hàng quá 2 lần</div>
    </Modal>
  )
}

export default ModalRules