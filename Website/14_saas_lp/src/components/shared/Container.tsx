import type { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}
    >
      {children}
    </div>
  );
};
