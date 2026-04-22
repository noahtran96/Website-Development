import type { Feature } from "../../constants";
import styles from "../../style";

export const FeatureCard = ({ icon, title, content }: Feature) => (
  <div className={`feature-card flex flex-row gap-4 rounded-[20px] p-6`}>
    {/* image */}
    <div
      className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="Icon" className="h-[50%] w-[50%] object-contain" />
    </div>
    {/* description */}
    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="mb-1 text-[18px] leading-[23px] font-semibold text-white">
        {title}
      </h4>
      <p className="text-dimWhite mb-1 text-[16px] leading-[24px] font-normal">
        {content}
      </p>
    </div>
  </div>
);
