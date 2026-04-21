import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from "./Button";

export const Business = () => {
  return (
    <section id="features" className={layout.section}>
      {/* left side - description + button */}
      <div className={layout.sectionInfo}>
        {/* title */}
        <h2 className={styles.heading2}>
          You do the business, <br className="hidden sm:block" /> we'll handle
          the money.
        </h2>
        {/* description */}
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        {/* button */}
        <Button styles="mt-10" />
      </div>
    </section>
  );
};
