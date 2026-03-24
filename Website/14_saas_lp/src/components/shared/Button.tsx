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
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 ${className}`}
    >
      {children}
    </button>
  );
};
