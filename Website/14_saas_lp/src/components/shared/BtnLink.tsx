import type { FC } from "react";

interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink: FC<BtnLinkProps> = ({ href, text, className = "" }) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer transform transition duration-300 ${className}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};
