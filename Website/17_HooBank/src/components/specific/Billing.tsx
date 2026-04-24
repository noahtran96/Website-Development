import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../style";

export const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      {/* left side - image + glows */}
      <div className={layout.sectionImgReverse}>
        {/* image */}
        <img
          src={bill}
          alt="billing"
          className="relative z-[5] h-[100%] w-[100%]"
        />
        {/* gradient glow 1 */}
        <div className="white__gradient absolute top-0 -left-1/2 z-[3] h-[50%] w-[50%] rounded-full" />
        {/* gradient glow 2 */}
        <div className="pink__gradient absolute bottom-0 -left-1/2 z-[0] h-[50%] w-[50%] rounded-full" />
      </div>

      {/* right side - text */}
      <div></div>
    </section>
  );
};
