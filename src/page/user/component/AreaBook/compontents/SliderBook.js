import React from 'react'
import { Grid, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import Book from './Book'

const SliderBook = (props) => {
    const { data } = props;

    const renderSlide = () => {
        return data?.map((slide, index) => {
            return <SwiperSlide key={index}>
                <Book data={slide} />
            </SwiperSlide>
        })
    }
    return (
        <Swiper
            slidesPerView={5}
            grid={{
                rows: 1,
            }}
            spaceBetween={20}
            // pagination={{
            //     clickable: true,
            // }}
            modules={[Grid]}
            className="mySwiper"
            style={{padding: '10px 0'}}
        >
            {renderSlide()}
        </Swiper>
    )
}

export default SliderBook