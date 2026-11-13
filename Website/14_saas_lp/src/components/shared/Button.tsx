import type { FC } from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-full border border-transparent px-6 py-3 outline-none dark:bg-violet-600 ${className}`}
    >
      {children}
    </button>
  );
};
