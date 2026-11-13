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
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Manage all your payments and professional invoices in one place. Track
          expenses, automate reminders, and stay on top of your finances with
          just a few taps
        </p>
        {/* download icons */}
        <div className="mt-6 flex flex-row flex-wrap sm:mt-10">
          <img
            src={apple}
            alt="App Store icon"
            className="mr-5 h-[42px] w-[128px] cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="Google Play icon"
            className="mr-5 h-[42px] w-[128px] cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
};
