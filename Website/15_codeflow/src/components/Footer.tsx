import type { FC } from "react";
import logo from "/logo.png";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* logo, brandname, tagline, social media and footer links */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* logo, brandname, tagline, social media */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            {/* logo and brandname */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              {/* logo */}
              <div className="rounded-lg">
                <img
                  src={logo}
                  alt="CodeFlow Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              {/* brand name */}
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>
            {/* tagline */}
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Transform your workflow with AI-powered tools and automation.
              Build for modern teams.
            </p>
            {/* social media */}
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <SiX className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <SiGithub className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <SiPolywork className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <SiGmail className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* footer links */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                <div key={category}>
                  {/* footer links title */}
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  {/* footer links */}
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
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
        <div className="pt-6 sm:pt-8 border-t-0 sm:border-t border-slate-800">
          {/* copyright and resources container */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            {/* copyright */}
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2026 CodeFlow. All rights reserved.
            </p>
            {/* resources */}
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
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
