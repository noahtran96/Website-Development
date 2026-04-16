import styles from "../style";
import { discount, robot } from "../assets";

export const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]">
          <img
            src={discount}
            alt="discount icon"
            className="h-[32px] w-[32px]"
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
      </div>
    </section>
  );
};
