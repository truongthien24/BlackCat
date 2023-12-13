import React, { useState } from 'react';
import { Avatar, Tooltip } from 'antd';
import { formateDate } from '../../../method/formatDate';
import { Icon } from '../../../assets/icon';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { COLOR } from '../shareComponent/constant';
import { toast } from 'react-hot-toast';

export const Reaction = (props) => {

    // Props
    const { data } = props;

    // State
    const [isReply, setIsReply] = useState(false)

    // Somethings
    const { t } = useTranslation();

    // Method
    const renderSoSao = () => {
        let arr = [];
        for (let i = 0; i < data?.soSao; i++) {
            arr.push({});
        }
        return arr.map((item, index) => {
            return <Icon name="star" fill="#ffd902" font="small" key={index} />
        })
    }

    const handleLikeReaction = () => {
        // Swal.fire({
        //     icon: 'info',
        //     iconColor: '#3790c7',
        //     title: `${t('FuncIsDev')}`,
        //     confirmButtonColor: '#3790c7',
        //     confirmButtonText: `${t('ok')}`,
        //     timer: 3000,
        //     timerProgressBar: true
        // })
        toast('Chức năng đang phát triển')
    }

    const handleReplyReaction = () => {
        // Swal.fire({
        //     icon: 'info',
        //     iconColor: '#3790c7',
        //     title: `${t('FuncIsDev')}`,
        //     confirmButtonColor: '#3790c7',
        //     confirmButtonText: `${t('ok')}`,
        //     timer: 3000,
        //     timerProgressBar: true
        // })
        // toast('Chức năng đang phát triển')
        setIsReply(true);
    }

    // Return
    return (
        <div className="bg-[#f4f7f8] p-[10px] rounded-[15px]">
            <div className="flex items-start justify-between">
                <div className='flex items-start'>
                    <Avatar size={40} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{data?.idTaiKhoan?.email.toString().toUpperCase().charAt(0)}</Avatar>
                    <div className="ml-[8px] h-max">
                        <h5 className="text-[11px] md:text-[13px] font-bold">{data?.idTaiKhoan?.email}</h5>
                        <p className="text-[10px] md:text-[12px]">{new Date(data?.ngayTao)?.toLocaleDateString(
                            "en-GB"
                        )}</p>
                    </div>
                </div>
                <div className="flex">
                    {renderSoSao()}
                </div>
            </div>
            <p className="text-white rounded-[15px] py-[7px] px-[15px] mt-[8px] mx-[10px] text-[12px] md:text-[14px] w-fit" style={{ backgroundColor: `${COLOR.primaryColor}` }}>{data?.noiDung}</p>
            {/* <span className="text-[10px] md:text-[12px] ml-[5px]">{formateDate(data?.createAt?.seconds)}</span> */}
            <div className="flex items-center mt-[10px]">
                {
                    isReply
                        ?
                        <div className="w-full border-[1px] border-dashed border-[#979797] rounded-[10px] shadow-md p-[10px] flex relative">
                            <form>
                                
                            </form>
                            <button className='absolute right-[0px] top-[-10px] bg-[white] w-[30px]h-[30px] text-[15px]' onClick={()=> {
                                setIsReply(false);
                            }}>&times;</button>
                        </div>
                        :
                        <>
                            <Tooltip placement="top" title={t('like')}>
                                <button className="mx-[10px]" onClick={handleLikeReaction}>
                                    <Icon name="like" font="small" />
                                </button>
                            </Tooltip>
                            <Tooltip placement="top" title={t('reply')}>
                                <button className="mx-[10px]" onClick={handleReplyReaction}>
                                    <Icon name="reply" font="small" />
                                </button>
                            </Tooltip>
                        </>
                }
            </div>
        </div>
    )
}
