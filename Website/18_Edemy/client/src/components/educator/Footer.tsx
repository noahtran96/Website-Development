import { assets } from "@/assets/assets";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col-reverse items-center justify-between border-t px-8 text-left md:flex-row">
      <div className="flex items-center gap-4">
        <img src={assets.logo} alt="Logo" className="hidden w-20 md:block" />
        <div className="hidden h-7 w-px bg-gray-500/60 md:block" />
        <p className="py-4 text-center text-xs text-gray-500 md:text-sm">
          Copyright 2026 © Edemy. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-3 max-md:mt-4">
        <a href="#">
          <img src={assets.facebook_icon} alt="Facebook icon" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="Twitter icon" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="Instagram icon" />
        </a>
      </div>
    </footer>
  );
};
