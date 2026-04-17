import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "./GetStarted";

export const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        {/* discount badge */}
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

        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="ss:text-[72px] ss:leading-[100px] flex-1 text-[52px] leading-[75px] font-semibold text-white">
            The Next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Generation</span> Payment Method.
          </h1>
          <div className="ss:flex mr-0 hidden md:mr-4">
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};
