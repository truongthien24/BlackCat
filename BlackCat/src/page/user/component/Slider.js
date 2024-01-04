import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = (props) => {

  // Props
  const {data} = props;


  // Method
  const renderSlider = () => {
    return data?.map((item, index) => {
      return <SwiperSlide>
        <div className={`text-[white] h-[650px]`} style={{backgroundImage: `url('${item.image}')`, backgroundSize: 'cover'}}>
          
        </div>
      </SwiperSlide>
    })
  }

  return (
    <Swiper
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //   },
        //   600: {
        //     slidesPerView: 1,
        //   },
        //   1140: {
        //     slidesPerView: 1,
        //   },
        //   1400: {
        //     slidesPerView: 1,
        //   }
        // }}
        slidesPerView={1}
    >
        {renderSlider()}
    </Swiper>
  )
}
