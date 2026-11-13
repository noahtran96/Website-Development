import styles from "../../style";
import { Button } from "../common";

export const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
    >
      {/* text */}
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      {/* button */}
      <div className={`${styles.flexCenter} mt-10 ml-0 sm:mt-0 sm:ml-10`}>
        <Button />
      </div>
    </section>
  );
};
