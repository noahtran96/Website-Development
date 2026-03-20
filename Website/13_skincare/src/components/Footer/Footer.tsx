import React from "react";
import type { FC } from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowLeftStartOnRectangleIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const Footer: FC = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="Logo" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <MapPinIcon className={css.icon} />
              <span>111 North Avenue Orlando, FL 32801</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:352-306-4415">352-306-4415</a>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@amazon.com">support@amazon.com</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <ArrowLeftStartOnRectangleIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">About Us</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright ©2022 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
