import type { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-heading-1 text-2xl font-semibold sm:text-3xl md:text-4xl">
      {children}
    </h1>
  );
};
