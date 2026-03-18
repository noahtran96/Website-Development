import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";

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
    </div>
  );
};

export default Testimonials;
