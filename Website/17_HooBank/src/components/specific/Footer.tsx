import styles from "../../style";
import { logo } from "../../assets";
import {
  FOOTER_LINKS,
  type FooterLink,
  type InternalLink,
} from "../../constants";

export const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} mb-8 w-full flex-col md:flex-row`}>
        {/* logo + tagline */}
        <div className="mr-10 flex flex-1 flex-col justify-start">
          <img
            src={logo}
            alt="HooBank logo"
            className="h-[72px] w-[266px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* links */}
        <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
          {FOOTER_LINKS.map((footerLink: FooterLink, index: number) => (
            <div
              key={index}
              className="ss:my-0 my-4 flex min-w-[150px] flex-col"
            >
              <h4 className="text-[18px] leading-[27px] font-medium text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((link: InternalLink, index: number) => (
                  <li
                    key={index}
                    className={`text-dimWhite hover:text-secondary cursor-pointer text-[16px] leading-[24px] font-normal ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
