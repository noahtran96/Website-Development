import { STATS, type Stat } from "../../constants";
import styles from "../../style";

export const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} mb-6 flex-row flex-wrap sm:mb-20`}
    >
      {STATS.map((stat: Stat) => (
        <div
          key={stat.id}
          className={`m-3 flex flex-1 flex-row items-center justify-start`}
        >
          <h4 className="xs:text-[40px] xs:leading-[53px] text-[30px] leading-[43px] font-semibold text-white">
            {stat.value}
          </h4>
          <p className="xs:text-[20px] xs:leading-[26px] text-gradient ml-3 text-[15px] leading-[21px] font-normal uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};
