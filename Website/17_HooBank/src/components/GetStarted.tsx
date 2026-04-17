import styles from "../style";
import { arrowUp } from "../assets";

export const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] cursor-pointer rounded-full p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} bg-primary h-[100%] w-[100%] flex-col rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row gap-2`}>
          <p className="text-[18px] leading-[23px] font-medium">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow up icon"
            className="h-[23px] w-[23px] object-contain"
          />
        </div>
        <p className="text-[18px] leading-[23px] font-medium">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};
