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
            slidesPerView={3}
            grid={{
                rows: 1,
            }}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
            style={{ height: '100px' }}
        >
            {renderSlide()}
            // <SwiperSlide>
            //     <Book data={{}} />
            // </SwiperSlide>
            // <SwiperSlide><div className="bg-[green] h-[50px]">Slide 2</div></SwiperSlide>
            // <SwiperSlide><div className="bg-[blue] h-[50px]">Slide 3</div></SwiperSlide>
            // <SwiperSlide><div className="bg-[yellow] h-[50px]">Slide 4</div></SwiperSlide>
            // <SwiperSlide><div className="bg-[violet] h-[50px]">Slide 5</div></SwiperSlide>
            // <SwiperSlide><div className="bg-[red] h-[50px]">Slide 6</div></SwiperSlide>
            // <SwiperSlide><div className="bg-[red] h-[50px]">Slide 7</div></SwiperSlide>
            // <SwiperSlide><div className="bg-[red] h-[50px]">Slide 8</div></SwiperSlide>
            // <SwiperSlide><div className="bg-[red] h-[50px]">Slide 9</div></SwiperSlide>
        </Swiper>
    )
}

export default SliderBook