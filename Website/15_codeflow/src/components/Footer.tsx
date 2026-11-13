import type { FC } from "react";
import logo from "../assets/logo.png";
import {
  SiGithub,
  SiX,
  SiPolywork,
  SiGmail,
} from "@icons-pack/react-simple-icons";
import { FOOTER_LINKS } from "../constants/footerLinks";

export const Footer: FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      {/* logo, brandname, tagline, social media, footer links, copyright and resources */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* logo, brandname, tagline, social media and footer links */}
        <div className="mb-8 hidden gap-6 sm:mb-12 sm:grid sm:grid-cols-3 sm:gap-8 lg:grid-cols-6 lg:gap-12">
          {/* logo, brandname, tagline, social media */}
          <div className="col-span-1 text-center sm:col-span-3 sm:text-left lg:col-span-2">
            {/* logo and brandname */}
            <div className="mb-3 flex items-center justify-center space-x-2 sm:mb-4 sm:justify-start">
              {/* logo */}
              <div className="rounded-lg">
                <img
                  src={logo}
                  alt="CodeFlow Logo"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </div>
              {/* brand name */}
              <span className="text-lg font-bold sm:text-xl">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>
            {/* tagline */}
            <p className="mx-auto mb-4 max-w-xs text-sm text-gray-400 sm:mx-0 sm:mb-6 sm:text-base">
              Transform your workflow with AI-powered tools and automation.
              Build for modern teams.
            </p>
            {/* social media */}
            <div className="flex justify-center space-x-3 sm:justify-start sm:space-x-4">
              <a
                href="#"
                className="rounded-lg bg-slate-800 p-2 transition-colors duration-200 hover:bg-slate-700 sm:p-2.5"
              >
                <SiX className="h-5 w-5 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-slate-800 p-2 transition-colors duration-200 hover:bg-slate-700 sm:p-2.5"
              >
                <SiGithub className="h-5 w-5 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-slate-800 p-2 transition-colors duration-200 hover:bg-slate-700 sm:p-2.5"
              >
                <SiPolywork className="h-5 w-5 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-slate-800 p-2 transition-colors duration-200 hover:bg-slate-700 sm:p-2.5"
              >
                <SiGmail className="h-5 w-5 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* footer links */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12">
              {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                <div key={category}>
                  {/* footer links title */}
                  <h3 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base">
                    {category}
                  </h3>
                  {/* footer links */}
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-xs text-gray-400 transition-colors duration-200 hover:text-white sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* copyright and resources */}
        <div className="border-t-0 border-slate-800 pt-6 sm:border-t sm:pt-8">
          {/* copyright and resources container */}
          <div className="flex flex-col items-center justify-between space-y-3 sm:flex-row sm:space-y-0">
            {/* copyright */}
            <p className="text-xs text-gray-400 sm:text-sm">
              © 2026 CodeFlow. All rights reserved.
            </p>
            {/* resources */}
            <div className="flex items-center space-x-4 text-xs sm:space-x-6 sm:text-sm">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
