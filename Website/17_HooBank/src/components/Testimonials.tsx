import { TESTIMONIALS, type Testimonial } from "../constants";
import styles from "../style";
import { TestimonialCard } from "./common";

export const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
    >
      <div />

      {/* Tagline */}
      <div className="relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row">
        <h1 className={styles.heading2}>
          What people are <br className="hidden sm:block" /> saying about us
        </h1>
        <div className="mt-6 w-full md:mt-0">
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      {/* Testimonial cards */}
    </section>
  );
};
