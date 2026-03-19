import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../constants/testimonials";

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Pure ingredients for your natural glow. Experience the ultimate skin
            transformation today.
          </span>
        </div>
        <img src={Hero} alt="Testimonial Hero Image" />
        <div className={css.container}>
          <span>100K</span>
          <span>Happy Customers with us</span>
        </div>
      </div>
      <div className={css.reviews}>Reviews</div>
      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.testimonialCarousel}
          breakpoints={{
            856: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="Testimonial Image" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
