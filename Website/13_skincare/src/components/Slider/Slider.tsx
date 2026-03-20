import React from "react";
import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { SliderProducts, type Product } from "../../constants/products";

const Slider: FC = () => {
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
        {[...SliderProducts, ...SliderProducts].map(
          (slide: Product, index: number) => (
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
          ),
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
