import { Modal } from 'antd'
import { COLOR } from 'page/user/shareComponent/constant'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

const ModalReviewSach = ({ data, open = false, onReview, title }) => {

    const { handleSubmit, register, setValue, getValues } = useForm({
        mode: 'onSubmit',
        defaultValue: {
            quantity: 1,
        }
    })

    const addToCart = (data) => {
        toast.error('Chức năng đang phát triển')
    }

    const handleChangeQuantity = (type) => {
        let quantity = getValues("quantity");
        switch (type) {
            case 'plus': return setValue("quantity", ++quantity);
            case 'minas': return setValue("quantity", --quantity);
            default: return;
        }
    }

    const onCancel = () => {
        onReview(prev => { return { open: false, data: null } })
    }
    return (
        <Modal open={open} width="70%" onCancel={onCancel} footer={null} title={title}>
            <form className="grid grid-cols-2 gap-[20px]" onSubmit={handleSubmit(addToCart)}>
                <div className="w-full">
                    <img src={data?.hinhAnh} className="w-full h-full" />
                </div>
                <div className="w-full bg-[#f3f3f3] p-[15px] flex flex-col justify-between h-full">
                    <h3 className="text-[22px] font-[400] mb-[10px]">{data?.tenSach}</h3>
                    <div>
                        <div className="flex items-center">
                            <h5 style={{ color: `${COLOR.primaryColor}` }}>Số lượng</h5>
                            <div className="flex items-center">
                                <button type="button" className="bg-[#dcdbdb]" onClick={() => handleChangeQuantity("minas")}>-</button>
                                <input {...register('quantity')} />
                                <button type="button" className="bg-[#dcdbdb]" onClick={() => handleChangeQuantity("plus")}>+</button>
                            </div>
                        </div>
                        <button className='text-[#fff] w-full p-[10px] rounded-[5px] flex items-center justify-center' style={{ backgroundColor: `${COLOR.primaryColor}` }}>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default ModalReviewSach