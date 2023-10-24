import { COLOR } from 'page/user/shareComponent/constant';
import React from 'react'

const Book = (props) => {
    const { data } = props;

    return (
        <div className='rounded-[5px] bg-[white] border-[1px] border-solid border-[gray]'>
            <img src={data?.hinhAnh} className="w-full max-h-[100px]"/>
            <div className='flex flex-col items-center'>
                <h5>{data?.tenSach}</h5>
                <span style={{color: `${COLOR.primaryColor}`}}>{(data?.giaSach)?.toLocaleString()} VND</span>
                <span>{data?.tonKho > 0 ? 'In Stock' : 'Sold out'}</span>
            </div>
        </div>
    )
}

export default Book