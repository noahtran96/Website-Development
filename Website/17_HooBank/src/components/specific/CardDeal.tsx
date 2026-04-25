import { card } from "../../assets";
import styles, { layout } from "../../style";
// import Button from "../common";

export const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Search, compare, and apply. Discover the best credit card deals with
          zero hassle and total transparency
        </p>
      </div>
      <Button styles="mt-10" />
    </section>
  );
};
