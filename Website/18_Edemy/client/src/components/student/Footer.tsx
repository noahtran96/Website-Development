import { assets } from "@/assets/assets";

export const Footer = () => {
  return (
    <footer className="mt-10 w-full bg-gray-900 text-left md:px-36">
      <div className="flex flex-col items-start justify-center gap-10 border-b border-white/30 px-8 py-10 md:flex-row md:gap-32 md:px-0">
        <div className="flex w-full flex-col items-center md:items-start">
          <img src={assets.logo_dark} alt="Logo" />
          <p className="mt-6 text-center text-sm text-white/80 md:text-left">
            High-quality courses crafted to help you learn, grow, and succeed on
            your own terms.
          </p>
        </div>
        <div className="flex w-full flex-col items-center md:items-start">
          <h2 className="mb-5 font-semibold text-white">Company</h2>
          <ul className="flex w-full justify-between text-sm text-white/80 md:flex-col md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="hidden w-full flex-col items-start md:flex">
          <h2 className="mb-5 font-semibold text-white">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-9 w-64 rounded border border-gray-500/30 bg-gray-800 px-2 text-sm text-gray-500 placeholder-gray-500 outline-none"
            />
            <button className="h-9 w-24 rounded bg-blue-600 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs text-white/60 md:text-sm">
        Copyright 2026 © Edemy. All rights reserved.
      </p>
    </footer>
  );
};
