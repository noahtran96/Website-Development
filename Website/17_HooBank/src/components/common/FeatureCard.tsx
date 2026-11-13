import { FEATURES, type Feature } from "../../constants";
import styles from "../../style";

interface FeatureCardProps extends Feature {
  index: number;
}

export const FeatureCard = ({
  icon,
  title,
  content,
  index,
}: FeatureCardProps) => (
  <div
    className={`feature-card flex flex-row gap-4 rounded-[20px] ${index !== FEATURES.length - 1 ? "mb-6" : "mb-0"} p-6`}
  >
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
