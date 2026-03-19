import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { SliderProducts } from "../../constants/products";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        breakpoints={{ 640: { slidesPerView: 3 }, 0: { slidesPerView: 1 } }}
        modules={[Pagination, Navigation]}
        className="my-swiper"
        slidesPerView={3}
        navigation={true}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {[...SliderProducts, ...SliderProducts].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>${slide.price}</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} alt="Product Image" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
